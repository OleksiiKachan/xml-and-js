const clientId = `d567ad34518240018fdb7d096e59223c`;
const clientSecret = `0475bd76bd5d4444871e0ce11369e177`;

const getToken = async () => {
 const result = await fetch(`https://accounts.spotify.com/api/token`, {
        method: `POST`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
        body: "grant_type=client_credentials",
    });

    const data = await result.json();
    return data.access_token;

};

// getToken().then((data) => console.log(data));

const getGenres = async (token) => {
    const result = await fetch (`https://api.spotify.com/v1/browse/categories`, 
    {
       method: `GET`,
       headers: { Authorization: "Bearer " + token},
       }, 
    );
    const data = await result.json();
    return data.categories.items;
};

const getPlaylistByGenre = async (token, genreId) => {
    const limit = 10;
  
    const result = await fetch(
      `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}&fields=items(name,external_urls,images)`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
  
    const data = await result.json();
    return data.playlists.items;
  };
  
  
  const loadGenres = async () => {
    const token = await getToken();
    const genres = await getGenres(token);
    const list = document.getElementById(`genres`);
    genres.map(async ({ name, id, icons: [icon], href }) => {
      const playlists = await getPlaylistByGenre(token, id);
      const firstPlaylist = playlists[0];
      if (firstPlaylist) {
        const tracks = await getTracksByPlaylist(token, firstPlaylist.id);
        const tracksList = tracks.map(({ name, artist, album }) => `
          <li>
            <p>${name}</p>
            <p>${artist}</p>
            <p>${album}</p>
          </li>
        `).join('');
        const html = `
          <article class="genre-card">
            <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
            <div>
              <h2>${name}</h2>
              <ol>
                ${tracksList}
              </ol>
            </div>
          </article>
        `;
        list.insertAdjacentHTML("beforeend", html);
      }
    });
  };
  

  const getTracksByPlaylist = async (token, playlistId) => {
    const result = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  
    const data = await result.json();
    return data.items.map(({ track }) => ({
      name: track.name,
      artist: track.artists.map(({ name }) => name).join(', '),
      album: track.album.name
    }));
  };

  loadGenres();