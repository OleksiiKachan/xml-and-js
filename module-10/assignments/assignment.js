const clientId = `e42a2ffbbf9c41a18cbe878ab0e80756`;
const clientSecret = `9f40bdb007ec4a0a9d8b6c386c354c85`;

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
  return data.items;
};

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  const list = document.getElementById(`genres`);
  genres.map(async ({ name, id, icons: [icon], href }) => {
    const playlists = await getPlaylistByGenre(token, id);
    const playlistsList = await Promise.all(
      playlists.map(
        async ({ name, id, images: [image], external_urls: { spotify } }) => {
          const items = await getPlaylistByTracks(token, id);
          const listItems = items
            .map(
              ({ track: { name: trackName, artists } }) =>
                `<div class="all-name">
              <b class="song-name">${trackName}</b> </br>
                <div class="artist-name">${artists
                  .map((artist) => artist.name)
                  .join("")} </div>
            </div>`
            )
            .join("");

          return `
          <li class="main-list">
                  <a href="${spotify}" alt="${name}" target="_blank">
                      <img src="${image.url}" width="150" height="150"/>
                  </a>
                  <div class="song-name" > 
                      <a href="${spotify}" alt="${name}" target="_blank">${name}</a>
                  </div>
            ${listItems}
          </li>`;
        }
      )
    );

    if (playlists) {
      const html = `
      <article class="genre-card">
      <div class="genre-card-left">
        <img id="main-img" src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
        </div>
        <div class="genre-card-right">
          <h1>${name}</h1>
          <ol>
            ${playlistsList}
          </ol>
        </div>
      </article>`;

      list.insertAdjacentHTML("beforeend", html);
    }
  });
};

loadGenres();