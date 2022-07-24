const clientId = `0147b6a47083466c9642a9446e50520f`;
const clientSecret = `a37bf7ba31424c02ba5c836956c3776f`;

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

const getTracksByPlaylist = async (token, tracksEndpoint) => {
  const limit = 2;
  const result = await fetch(`${tracksEndpoint}?limit=${limit}`, {
    method: "GET",
    headers: { Authorization: "Bearer " + token },
  });
  const data = await result.json();
  return data.items;
};

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  const list = document.getElementById(`genres`);
  genres.map(async ({ name, id, icons: [icon], href }) => {
    const playlists = await getPlaylistByGenre(token, id);
    const playlistsList = await(await Promise.all(playlists.map(
      async ({ name, external_urls: { spotify }, images: [image], tracks }) => {
        const tracksData = await getTracksByPlaylist(token, tracks.href);
        let tracksList = tracksData
          .map(
            ({
              track: {
                external_urls: { spotify },
                name,
                artists,
              },
            }) =>
              `<li>
                  <a href="${spotify}" alt="${name}" target="_blank">
                    <h3>${name} - ${artists.map((artist) => artist.name).join(",")}</h3>
                  </a>
              </li>`
          )
          .join(``);
        return `<li>
                    <a href="${spotify}" alt="${name}" target="_blank">
                    <img src="${image.url}" width="180" height="180"/>
                    <h3>${name}</h3>
                    <div id="tracks"><ol>${tracksList}</ol></div>
                    </a>
                </li>`;
      }
    ))).join(``);

    if (playlists) {
      const html = `<div class="genre-card">
                    <h2>${name}</h2>
                    <img class="genre-icon" src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
                    <div>
                      <ol>
                        ${playlistsList}
                      </ol>
                    </div>
                  </div>`;
      list.insertAdjacentHTML("beforeend", html);
    }
  });
};

loadGenres();
