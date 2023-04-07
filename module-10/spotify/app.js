const clientId = `7070cb2b2d1f4d86a854f1cc7e533cc3`;
const clientSecret = `3b733a6a9fff47579657dade48a52ad3`;

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

const getTracks = async (token, href) => {
  const limit = 2;
  const result = await fetch(href + `?limit=${limit}`, {
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
  genres.map(async ({ name, icons: [icon], id }) => {
      const playlists = await getPlaylistByGenre(token, id);

      if (playlists.length) {
          const playlistsList = Promise.all(
              playlists.map(
                  async ({
                      name,
                      external_urls: { spotify },
                      images: [image],
                      tracks,
                  }) => {
                      const tracksInPlaylists = await getTracks(token, tracks.href);
                      console.log(tracksInPlaylists);

                      if (tracksInPlaylists.length) {
                          tracksInPlaylistsList = tracksInPlaylists
                              .map(({ track }) => {
                                  const artist = track.artists.map(({ name }) => name);
                                  return `
                                  <li>
                                  <a href="${track.external_urls.spotify}" target="_blank"> 
                                  <div>${track.name}</div>
                                  <div>Artist(s):</div> ${artist} 
                                  <div>Album:</div> ${track.album.name} 
                                  </li><hr>`;
                              })
                              .join("");
                      }
                      return `
             <li><a href="${spotify}"><img src="${image.url}" width="180" height="180" alt="${name}"/><ol class="tracks">${tracksInPlaylistsList}</ol></li>`;
                  }
              )
          )
              .then((playlistsList) => playlistsList.join(""))
              .then((playlistsList) => {
                  const html = `
                  <article class="genre-card">
                    <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
                    <div>
                      <h2>${name}</h2>
                      <ol>
                        ${playlistsList}
                      </ol>
                    </div>
                  </article>`;

                  list.insertAdjacentHTML("beforeend", html);
              });
      }
  });
};

loadGenres();
