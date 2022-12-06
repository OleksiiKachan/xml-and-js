const clientId = `7d60a17682cc4aa19ce85195b8cd416a`;
const clientSecret = `452697df66af4edd9d793b2b0e44fe4d`;

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


const getTracksFromPlaylist = async (token, tracksUrl) => {
    const limit = 5;

    const result = await fetch(tracksUrl + `?limit=${limit}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });

    const data = await result.json();
    return data.items;
  };

  const loadGenres = async () => {
    const token = await getToken();
    const genres = await getGenres(token);
    const list = document.getElementById("genres");
    genres.map(async ({ name, id, icons: [icon] }) => {
      const playlists = await getPlaylistByGenre(token, id);
      if (playlists.length) {
        Promise.all(playlists
          .map(async ({ name, external_urls: { spotify }, images: [image], tracks }) => {
            const playlistTracks = await getTracksFromPlaylist(token, tracks.href);
            let tracksList = '';
            if (playlistTracks) {
              tracksList = playlistTracks
                .map(({ track }) => {
                  const artists = track.artists
                    .map(({ name }) => name)
                    .join(', ');
                  return `<li class="track">${track.name} - ${artists}</li>`})
                .join('');
            }
            return `
              <li class="playlist">
                  <a href="${spotify}" target="_blank">
                      <img src="${image.url}" width="240" height="240" alt="${name}"/>
                  </a>
                  <ol class="tracks">
                    ${tracksList}
                  </ol>
              </li>`;
          }))
          .then(playlistsList => playlistsList.join(""))
          .then(playlistsList => {
            const html = `
              <article class="genre-card">
                  <div>
                      <h2>${name}</h2>
                      <img src="${icon.url}" width="${icon.width}" height="${icon.height}"/>
                  </div>
                  <ol class="playlists">
                      ${playlistsList}
                  </ol>
              </article>`;

            list.insertAdjacentHTML("beforeend", html);
          })
      }
    });
  };

  loadGenres();