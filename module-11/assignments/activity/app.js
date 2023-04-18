const clientId = `111524b3028646caaaa5acfd748f7a5e`;
const clientSecret = `229a581847734e57b89e20775f954403`;

let _data = [];

const getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  return data.access_token;
};

const getGenres = async (token) => {
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories?locale=sv_US`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.categories.items;
};


const getTracksByPlaylist = async (token, playlistId) => {
  const limit = 5;

  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.items ? data.items.map(item => item.track) : [];
};

const getPlaylistByGenre = async (token, genreId) => {
  const limit = 10;

  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  const playlists = data.playlists ? data.playlists.items : [];

  const playlistsWithTracks = await Promise.all(
    playlists.map(async (playlist) => {
      const tracks = await getTracksByPlaylist(token, playlist.id);
      return { ...playlist, tracks };
    })
  );

  return playlistsWithTracks;
};

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);

  _data = await Promise.all(
    genres.map(async (genre) => {
      const playlists = await getPlaylistByGenre(token, genre.id);

      return { ...genre, playlists };
    })
  );
};

const renderGenres = async (filterTerm, playlists) => {
  let source = _data;

  if (filterTerm) {
    const term = filterTerm.toLowerCase();
    source = source.filter(({ name }) => {
      return name.toLowerCase().includes(term);
    });
  }

  if (playlists === "with-playlists") {
    source = source.filter(({ playlists }) => {
      return playlists && playlists.length > 0;
    });
  } else if (playlists === "without-playlists") {
    source = source.filter(({ playlists }) => {
      return !playlists || playlists.length === 0;
    });
  }

  const list = document.getElementById(`genres`);

  const htmlPromises = source.map(async ({ name, icons: [icon], playlists }) => {
    const playlistsList = await Promise.all(
      playlists.map(async ({ name, external_urls: { spotify }, images: [image], tracks }) => {
        const tracksList = tracks.map(({ name: trackName, artists }) => {
          const artistNames = artists.map(({ name }) => name).join(", ");
          return `<li>${trackName} - ${artistNames}</li>`;
        }).join(``);
        return `
          <li>
            <a href="${spotify}" alt="${name}" target="_blank">
              <img src="${image.url}" width="180" height="180"/>
            </a>
            <h3>${name}</h3>
            <ol>${tracksList}</ol>
          </li>`;
      })
    ).then((playlistsList) => playlistsList.join(``));
  
    if (playlists) {
      return `
        <article class="genre-card">
          <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
          <div>
            <h2>${name}</h2>
            <ul>${playlistsList}</ul>
          </div>
        </article>`;
    }
  });
  
  const html = (await Promise.all(htmlPromises)).join('');
  list.innerHTML = html;  
  }


loadGenres().then(renderGenres);

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.term.value;

  renderGenres(term);
};
