const clientId = `b4621a5afc324db68d001d2b1bcb638b`;
const clientSecret = `ea4eec3c3b4c4be4823ebc6606e15c59`;

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

const getTracks = async (token, tracksUrl) => {
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
  const list = document.getElementById(`genres`);
  genres.map(async ({ name, id, icons: [icon], href }) => {
    const playlists = await getPlaylistByGenre(token, id);
    Promise.all(playlists
      .map(async ({ name, external_urls: { spotify }, images: [image], tracks }) => {
        
          const playlistTracks = await getTracks(token, tracks.href);
          let tracksList = '';
          if (playlistTracks) {
            tracksList = playlistTracks
              .map(({ track }) => {
                const artists = track.artists
                  .map(({ name }) => name)
                  .join(', ');
                return `<li id="trackli">${track.name} - ${artists}</li>`})
              .join('');
          }
        return `
        <li id="trackli">
          <a href="${spotify}" alt="${name}" target="_blank">
            <img src="${image.url}" width="180" height="180"/>
          </a>
          <ol class="tracks">
          ${tracksList}
        </ol>
        </li>`
        }))
        .then(playlistsList => playlistsList.join(""))
        .then(playlistsList => {
   
      const html = `
      <article class="genre-card">
        <div id='headerdiv'>
          <img id="mainpic" src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
          <h2>${name}</h2>
        </div>
        <div id='in'>
          <ol id='inol'> ${playlistsList} </ol>
        </div>
      </article>`;
    
      list.insertAdjacentHTML("beforeend", html);
    })
  });
};

loadGenres();
