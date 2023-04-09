const clientId = `2923e65a209849cca3fec1ee021db4be`;
const clientSecret = `01df3ae566964e7c9460845b6512ca43`;

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
    `https://api.spotify.com/v1/browse/categories`,
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
  return data.playlists.items;
};

const getTracksForPlaylist = async (token, playlistId) => {
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.items;
};

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  const list = document.getElementById(`genres`);
  genres.map(async ({ name, id, icons: [icon], href }) => {
    const playlists = await getPlaylistByGenre(token, id);
    const playlistsList = await Promise.all(playlists.map(async ({ name, id }) => {
      const tracks = await getTracksForPlaylist(token, id);
      const tracksList = tracks
        .map(({ track: { name: trackName, artists } }) => `
          <li>${trackName} - ${artists.map(artist => artist.name).join(', ')}</li>
        `)
        .join('');

      return `
        <li>
          <h3>${name}</h3>
          <ul>
            ${tracksList}
          </ul>
        </li>
      `;
    }));

    if (playlistsList) {
      const html = `
        <article class="genre-card">
          <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
          <div>
            <h2>${name}</h2>
            <ol>
              ${playlistsList.join('')}
            </ol>
          </div>
        </article>
      `;

      list.insertAdjacentHTML("beforeend", html);
    }
  });
};

loadGenres();