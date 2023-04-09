const clientId = `279c5f3951c3412e8b8ea3ce4e02ba0e`;
const clientSecret = `e1e69d46b43744dcadf841599adf3201`;

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
  
  const getTracksOfPlaylist = async (token, playlistId, tracks) => {
    const result = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`, 
      {
        method: "GET",
        headers: {Authorization: "Bearer " + token},
      }
    );
  
    const data = await result.json();
    return data.items.map(({track}) => ({
      name: track.name,
      artists: track.artists.map(artist => artist.name),
    }))
    .slice(0, 3);
  };
  
  const displayTracksArtists = async (token, playlists) => {
    const tracksList = [];
    for (const { name, id: playlistId } of playlists) {
      const tracks = await getTracksOfPlaylist(token, playlistId);
      tracksList.push(`
        <h2><u>${name}</u></h2>
        <ul>
          ${tracks
            .map(({ name, artists }) => `
              <li>
                ${name} - ${artists}
              </li>
              `).join('')}
        </ul>
      `);
    }
    return tracksList.join('');
  }

  const loadGenres = async () => {
    const token = await getToken();
    const genres = await getGenres(token);
    const list = document.getElementById(`genres`);
    for (const { name, id, icons: [icon] } of genres) {
      const playlists = await getPlaylistByGenre(token, id);
      const playlistsList = playlists
        .map(
          ({ name, external_urls: { spotify }, images: [image], id: playlistId }) => `
          <li>
            <a href="${spotify}" alt="${name}" target="_blank">
              <img src="${image.url}" width="180" height="180"/>
            </a>
          </li>`
        )
        .join(``);

        const tracksList = await displayTracksArtists(token, playlists);
  
      if (playlists) {
        const html = `
        <article class="genre-card">
          <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
          <div>
            <h2>${name}</h2>
            <ol>
              ${playlistsList}
            </ol>
            <div>
            ${tracksList}
          </div>
          </div>
        </article>`;
  
        list.insertAdjacentHTML("beforeend", html);
      }
    }
  };
  
  loadGenres();
  