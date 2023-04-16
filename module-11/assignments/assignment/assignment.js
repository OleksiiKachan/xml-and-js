const clientId = `e1484c6fe28047988a5d04a8fcaf69cd`;
const clientSecret = `8b82057bcd474d8fb3d7c1650ebe1239`;

let _data = [];

const getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: "grant_type=client_credentials",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    },
  });

  const data = await result.json();
  return data.access_token;
};

const getGenres = async (token) => {
  const result = await fetch(
    "https://api.spotify.com/v1/browse/categories?locale=sv_US",
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.categories.items;
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
  return data.playlists ? data.playlists.items : [];
};

const getPlaylistByTracks = async (token, playlistId) => {
  const limit = 3;
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  const data = await result.json();
  return data.items ? data.items : [];
};

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);

  _data = await Promise.all(
    genres.map(async (genre) => {
      const playlists = await getPlaylistByGenre(token, genre.id);

      const playlistsWithTracks = await Promise.all(
        playlists.map(async (playlist) => {
          const items = await getPlaylistByTracks(token, playlist.id);
          return { ...playlist, tracks: items };
        })
      );

      return { ...genre, playlists: playlistsWithTracks };
    })
  );
};

const renderGenres = async (filterTerm) => {
  const token = await getToken();
  const genres = await getGenres(token);
  let source = _data;

  if (filterTerm) {
    const term = filterTerm.toLowerCase();
    source = source.filter(({ name }) => {
      return name.toLowerCase().includes(term);
    });
  }
  const list = document.getElementById(`genres`);
  const html = source.reduce((acc, { name, icons: [icon], playlists }) => {
    const showWithPlaylist = document.querySelector(
      `input[value="withPlaylist"]`
    ).checked;
    const showWithoutPlaylist = document.querySelector(
      `input[value="withoutPlaylist"]`
    ).checked;

    if (showWithPlaylist && playlists.length === 0) {
      value = false;
    } else if (showWithoutPlaylist && playlists.length > 0) {
      value = false;
    } else {
      value = true;
    }

    const playlistsList = playlists.map(
      ({ name, id, images: [image], external_urls: { spotify }, tracks }) => {
        const listItems = tracks
          .map(
            ({ track: { name: trackName, artists } }) =>
              `<div class="all-name">
                  <b class="track-name">${trackName}</b> </br>
                    <div class="artist-name">${artists
                      .map((artist) => artist.name)
                      .join("")} </div>
                </div>`
          )
          .join("");

        return `<li class="main-list">
          <a href="${spotify}" alt="${name}" target="_blank">
              <img src="${image.url}" width="150" height="150"/>
          </a>
          <div class="play-name" > 
              <a href="${spotify}" alt="${name}" target="_blank">${name}</a>
          </div>
            ${listItems}
          </li>`;
      }
    );

    if (playlists) {
      return (
        acc +
        `
          <article class="card">
              <img class="main-img" src="${icon.url}" width="${
          icon.width
        }" height="${icon.height} alt="${name}"/>
            <div>
               <h2>${name}</h2>
               <ol class="list">
                ${!value ? ` ` : playlistsList.join("")}
               </ol>
            </div>
          </article>`
      );
    }
  }, ``);

  list.innerHTML = html;
};

loadGenres().then(renderGenres);

const onSubmit = (event) => {
  event.preventDefault();
  const term = event.target.term.value;
  renderGenres(term);
};
