const clientId = `5bcd04da78454befa33101010b62cda4`;
const clientSecret = `2614179dc1e1464d8fe2113c6e7ea212`;

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
    console.log(data);
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

  const getTracks = async (token, trackhref) => {
    const limit = 4;
    const result = await fetch(
        trackhref + `?limit=${limit}`, 
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
    const list = document.getElementById("genres");
  
    genres.map(async ({ name, id, icons: [icon] }) => {
      const playlists = await getPlaylistByGenre(token, id);
        
      if (playlists) {
        Promise.all(playlists
          .map(async ({ name, external_urls: { spotify }, images: [image], tracks }) => {
            const playlistTracks = await getTracks(token, tracks.href);
            let tL = '';
            if (playlistTracks) {
                tL = playlistTracks
                .map(({ track }) => {
                  const artists = track.artists
                    .map(({ name }) => name)
                    .join(', ');
                  return `<dl><h1>${artists}</h1><h2>${track.name}</h2></dl>`})
                .join('');
            }
            return `
              <li class="playlist">
                  <a href="${spotify}" target="_blank">
                      <img src="${image.url}" width="100" height="100" alt="${name}"/>
                  </a>
                  <ol>
                    ${tL}
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