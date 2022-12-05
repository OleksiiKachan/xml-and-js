const clientID = `628469d1f3e74931bac25b8c21e06060`;
const clientSecret = `9ac57a2035a5472ab90125ae2310e84e`;

const getToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(clientID + ":" + clientSecret),
        },
        body: "grant_type=client_credentials",

        
      });
const data = await result.json();
      //console.log(data);
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

    //console.log(data);
    return data.categories.items;
  };

  const getPlaylistByGenre = async (token, genreId) => {
    const limit = 4;
  
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
  const limit = 3;

  const result = await fetch(tracksUrl + `?limit=${limit}`, {
    method: "GET",
    headers: { Authorization: "Bearer " + token },
  });

  const data = await result.json();
  //console.log(data);
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
                return `<dl><dt>${artists}   </dt>  <dd>${track.name}</dd></dl>`})
              .join('');
          }
          return `
            <li class="playlist">
                <a href="${spotify}" target="_blank">
                    <img src="${image.url}" width="180" height="180" alt="${name}"/>
                </a>
                <ol>
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