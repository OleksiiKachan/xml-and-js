const clientId = `f25aae7f1a8c4b60af857ac03313e8d5`;
const clientSecret = `4c0e46cc619b4695909147f6722a24ea`;

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
    const result = await fetch("https://api.spotify.com/v1/browse/categories", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  
    const data = await result.json();
    return data.categories.items;
  };
  
  const getPlaylistByGenre = async (token, genreId) => {
    const limit = 9;
  
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
                      <img src="${image.url}" width="180" height="180" alt="${name}"/>
                  </a>
                  <ol class="tracks">
                    ${tracksList}
                  </ol>
              </li>`;
          }))
          .then(playlistsList => playlistsList.join(""))
          .then(playlistsList => {
            const html = `
              <article>
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