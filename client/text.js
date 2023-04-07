const clientID = "1cd4b8919a804e35af673e40b29986e6";
const clientSecret = "a5bea6c96ef945ad813e33fb59919bb7";

const getToken = async () => {
    const result = await fetch(`https://accounts.spotify.com/api/token`,{
        method: `POST`,
        body: `grant_type=client_credentials`,
        headers:{
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${(btoa(`${clientID}:${clientSecret}`))}`
        }
    });


    const data = await result.json();
    return data.access_token;
};

const getGenres = async (token) => {
  const result = await fetch(`https://api.spotify.com/v1/browse/categories`, {
      method: 'GET',
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
  const data = await result.json();
  return data.categories.items;
};

const getPlaylistsByGenre = async(token, genreID) =>{
    const limit= 10;
    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreID}/playlists?limit=${limit}`,
    {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    );
    const data = await result.json();
    return data.playlists.items;
};

const getTracksByPlaylist = async(token, playlist_id) => {
  const limit = 10;
  const result = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks?limit=${limit}`,
  {
    method: 'GET',
    headers:{
      Authorization: `Bearer ${token}`,
    },
  }
  );
  const data = await result.json();
  return data.items;
};
console.log(getTracksByPlaylist());

const getPlaylistId = (spotify) => {
  const match =  spotify.match(/playlist\/(\w+)/);
  return match ? match[1] : null;
};


const loadGenres = async () => {
    const token = await getToken();
    const list = document.getElementById(`genres`);
    const filter = document.querySelector('input[name="playlist-filter"]:checked').value;
    const genres = await getGenres(token);
    const spotify = 'https://open.spotify.com/playlist/37i9dQZF1DWUa8ZRTfalHk';
    const playlistId = getPlaylistId(spotify);
    const tracks = await getTracksByPlaylist(token, playlistId);

    genres.map(async ({ name, id, icons: [icon], href }) => {

      let playlists = await getPlaylistsByGenre(token, id);
     // let tracks = await getTracksByPlaylist(token, id);
      if (filter === 'with-playlists') {
        // Filter out playlists without tracks
        playlists = playlists.filter(playlist => playlist.tracks.total > 0);
      //  tracks = tracks.filter(track => track.tracks.total > 0);
      } else if (filter === 'without-playlists') {
        // Filter out playlists with tracks
        playlists = playlists.filter(playlist => playlist.tracks.total === 0);
      //  tracks = tracks.filter(track => track.tracks.total === 0);
      }
  
      const playlistsList = await Promise.all(playlists.map(async ({id, name, external_urls: { spotify }, images: [image] }) => {
        const tracks = await getTracksByPlaylist(token, id);
        console.log(tracks);
        const trackList = tracks.map(({ track: { name, artists } }) => `<li>${name} - ${artists.map(({ name }) => name).join(', ')}</li>`).join('');
        return `
          <li>
            <a href="${spotify}" alt="${name}" target="_blank">
              <img src="${image.url}" width="180" height="180"/>
            </a>
            <ol>${trackList}</ol>
          </li>
        `;
      }));
  
      if (playlistsList.length > 0) {
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
      }

    });

    //   const playlists = await getPlaylistsByGenre(token, id);
    //   const playlistsList = playlists
    //     .map(
    //       ({ name, external_urls: { spotify }, images: [image] }) => `
    //       <li>
    //         <a href="${spotify}" alt="${name}" target="_blank">
    //           <img src="${image.url}" width="180" height="180"/>
    //         </a>
    //       </li>`
    //     )
    //     .join(``);
  
    //   if (playlists) {
    //     const html = `
        
    //     <article class="genre-card">
    //       <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
    //       <div>
    //         <h2>${name}</h2>
    //         <ol>
    //           ${playlistsList}
    //         </ol>
    //       </div>
    //     </article>`;
  
    //     list.insertAdjacentHTML("beforeend", html);
    //   }
    // });
  };
  
  loadGenres();

// getToken()
// .then((data) => console.log(data));


