const clientId = `3f1df29bbf24473abca2894516807d9f`;
const clientSecret = `5148a3bdbd614a61949c0fd009cc7393`;

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

const getTrackByPlaylist = async (token, playlistId) => {
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
  genres.map(async ({ name, id, icons: [icon], href }) => {
    const playlists = await getPlaylistByGenre(token, id);

    const playlistsList = Promise.all(
      playlists.map(
        async ({ name, external_urls: { spotify }, images: [image], id }) => {
          let output = "";
          const trackList = await getTrackByPlaylist(token, id);

          trackList?.map((item) => {
            const artistName = item.track.artists[0].name;
            const trackName = item.track.name;

            output += `
            
            <span class="artist-name"> Artist Name: ${artistName}</span>
            <span>Track Name ${trackName}</span>
            `;
          });

          return `
        <li>
          <a href="${spotify}" alt="${name}" target="_blank">
            <img src="${image.url}" width="180" height="180"/>
            <p>${output}</p>
          </a>
        </li>`;
        }
      )
    );

    if (playlists) {
      const html = `
      <article class="genre-card">
        <img src="${icon.url}" width="${icon.width}" height="${
        icon.height
      }" alt="${name}"/>
      <h2>${name}</h2>
        <div class="track-card">
        
          <ol>
            ${await playlistsList}
          </ol>
        </div>
      </article>`;

      list.insertAdjacentHTML("beforeend", html);
    }
  });
};

loadGenres();
