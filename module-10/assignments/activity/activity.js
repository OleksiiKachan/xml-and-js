const clientId = `318e8c91624a435bb360faa1ef65f7b4`;
const clientSecret = `1102b142a53e486294500470833ccdc3`;

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

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  const list = document.getElementById(`genres`);
  genres.map(async ({ name, id, icons: [icon], href }) => {
    const playlists = await getPlaylistByGenre(token, id);
    const playlistsRows = playlists
      .map(
        ({ name, external_urls: { spotify }, images: [image] }) => `
        <div class="playlist-card">
            <a href="${spotify}" alt="${name}" target="_blank">
              <img src="${image.url}" width="180" height="180"/>
            </a>
            <div class="playlist-info">
              <h3>${name}</h3>
              <a href="${spotify}" alt="${name}" target="_blank">Play on Spotify</a>
            </div>
          </div>`
      )
      .join(``);

    if (playlists) {
      const html = `
        <article class="genre-card">
        <div class="genre-info">
          <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
          <h2>${name}</h2>
          <a href="${href}" target="_blank">View all</a>
        </div>
        <div class="playlists">
          ${playlistsRows}
        </div>
      </article>`;

      list.insertAdjacentHTML("beforeend", html);
    }
  });
};


loadGenres();
