const clientId = `4bd1955c20a443d8b5fe1b44363a919b`;
const clientSecret = `3c72ddfa1b754886aeb3494ae5395e53`;

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
    const playlistsList = await Promise.all(
      playlists.map(async ({ name, external_urls: { spotify }, images: [image], tracks: { href } }) => {
        const tracksResult = await fetch(href, {
          method: "GET",
          headers: { Authorization: "Bearer " + token },
        });

        const { items: tracks } = await tracksResult.json();

        const tracksList = tracks
          .map(({ track: { name, artists } }) => `<li>${name} - ${artists.map(a => a.name).join(', ')}</li>`)
          .join('');

        return `
          <li>
            <article class="playlist-card">
              <a href="${spotify}" target="_blank">
                <img src="${image.url}" width="180" height="180" alt="${name}" />
              </a>
              <h3>${name}</h3>
              <ul class="tracks-list">
                ${tracksList}
              </ul>
            </article>
          </li>`;
      })
    );

    if (playlists) {
      const html = `
        <article class="genre-card">
          <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}" />
          <div>
            <h2>${name}</h2>
            <ol>
              ${playlistsList.join('')}
            </ol>
          </div>
        </article>`;

      list.insertAdjacentHTML("beforeend", html);
    }
  });
};

loadGenres();
