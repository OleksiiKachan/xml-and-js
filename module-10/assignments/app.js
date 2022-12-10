const clientId = `7f102115070942349a05eb1b23d5cfa2`;
const clientSecret = `e1db7b9083434085afd3d502d78a1842`;

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
  const limit = 1;

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

const getTracksByPlayList = async (token, playlistId) => {
  const limit = 5;
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
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
    genres.map(async ({ name, id, icons: [icon], href ,playlists}) => {

      playlists.map(  ({ id, name, external_urls: { spotify }, images: [image] ,tracks}) => {
              const track = tracks.map(({track}) => {
                const artists = track.artists
                  .map(({ name }) => name)
                  .join(', ');
                
                return  `<li>${track.name} - ${artists}</li>`
              }).join(``);

            return `
            <li>
              <a href="${spotify}" alt="${name}" target="_blank">
                <img src="${image.url}" width="180" height="180"/>
                <ul>
                ${track}
                </ul>
              </a>
            </li>`
        }
      )
      .then(playlistItem => playlistItem.join(``))
      .then(playlistItem => {
        console.log(playlistItem);
      if (playlists.length) {
          const html = `
          <article>
            <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
            <div>
              <h2>${name}</h2>
              <ol>
                ${playlistItem}
              </ol>
            </div>
          </article>`;
    
          list.insertAdjacentHTML("beforeend", html);
        }
      })
    });
  };

loadGenres();

