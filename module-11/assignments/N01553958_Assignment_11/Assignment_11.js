const clientId = '1cc99f2f06964b31a74682de7653895d';
const clientSecret = 'c670741d14cb4dc187fa5c6fd5816f7e';

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

const getTracksForPlaylist = async (token, playlistId) => {
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
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
    const withPlaylistsRadio = document.querySelector(`input[value="with-playlists"]`);
    const withoutPlaylistsRadio = document.querySelector(`input[value="without-playlists"]`);
  
    genres.map(async ({ name, id, icons: [icon], href }) => {
      const playlists = await getPlaylistByGenre(token, id);
  
      if (withPlaylistsRadio.checked && playlists.length === 0) {
        return; // skip to next genre if filtering by "with playlists" but there are none
      } else if (withoutPlaylistsRadio.checked && playlists.length > 0) {
        return; // skip to next genre if filtering by "without playlists" but there are some
      }
  
      const playlistsList = await Promise.all(playlists.map(async ({ name, id }) => {
        const tracks = await getTracksForPlaylist(token, id);
        const tracksList = tracks
          .map(({ track: { name: trackName, artists } }) => `
            <li>${trackName} - ${artists.map(artist => artist.name).join(', ')}</li>
          `)
          .join('');
  
        return `
          <li>
            <h3>${name}</h3>
            <ul>
              ${tracksList}
            </ul>
          </li>
        `;
      }));
  
      const html = `
        <article class="genre-card">
          <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
          <div>
            <h2>${name}</h2>
            <ol>
              ${playlistsList.join('')}
            </ol>
          </div>
        </article>
      `;
  
      list.insertAdjacentHTML("beforeend", html);
    });
  };
  
  const filterRadios = document.querySelectorAll(`input[name="playlist-filter"]`);
  filterRadios.forEach(radio => radio.addEventListener("change", loadGenres));
  loadGenres();  