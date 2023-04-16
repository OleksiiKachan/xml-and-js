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
    `https://api.spotify.com/v1/browse/categories?locale=sv_SE`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.categories.items;
};

const getPlaylistByGenre = async (token, genreId, limit, backoffTime) => {
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();

  const playlists = data.playlists.items;

  const playlistsWithTracks = await Promise.all(
    playlists.map(async (playlist) => {
      const result = await fetch(
        `${playlist.tracks.href}?limit=${limit}`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + token },
        }
      );

      const data = await result.json();

      const tracks = data.items.slice(0, limit).map((item) => {
        return {
          name: item.track.name,
          artist: item.track.artists[0].name,
        };
      });

      return {
        ...playlist,
        tracks,
      };
    })
  );

  await new Promise((resolve) => setTimeout(resolve, backoffTime));

  return playlistsWithTracks;
};

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  const limit = 10;
  const backoffTime = 1000;

  _data = await Promise.all(
    genres.map(async (genre) => {
      const playlists = await getPlaylistByGenre(token, genre.id, limit, backoffTime);

      return { ...genre, playlists };
    })
  );
};

const renderGenres = async (filterTerm) => {
  let source = _data;

  if (filterTerm) {
    console.log(filterTerm);
    const term = filterTerm.toLowerCase();
    source = source.filter(({ name }) => {
      console.log(name.toLowerCase().includes(term));
      return name.toLowerCase().includes(term);
    });
  }

  const list = document.getElementById(`genres`);
  const token = await getToken();
  const limit = 10;
  const backoffTime = 5000; 

  for (const { name, id, icons: [icon], href } of source) {
    const playlists = await getPlaylistByGenre(token, id, limit, backoffTime);

    if (playlists) {
      const playlistsList = await Promise.all(playlists.map(async ({ name, external_urls: { spotify }, images: [image], tracks }) => {
        const trackList = await Promise.all(tracks.map(async ({ name, artist }) => {
          const artistData = await getArtist(artist.id, token);
          return `${name} - ${artistData.name}`;
        }));
        return `
          <li>
            <a href="${spotify}" alt="${name}" target="_blank">
              <img src="${image.url}" width="180" height="180"/>
            </a>
            <div>
              <h3>${name}</h3>
            </div>
          </li>
          <div>
            <ul>
              ${trackList.join('')}
            </ul>
          </div>`;
      }));

      const html = `
        <article class="genre-card">
          <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
          <div>
            <h2>${name}</h2>
            <ol>
              ${playlistsList.join('')}
            </ol>
          </div>
        </article>`;

      list.insertAdjacentHTML("beforeend", html);
    }
  }
};

loadGenres().then(renderGenres);

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.term.value;

  renderGenres(term);
};
