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
      `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
  
    const data = await result.json();
    const playlists = data.playlists.items;

    const playlistsWithTracks = await Promise.all(playlists.map(async (playlist) => {
      playlist.tracks = await getTracksByPlaylist(token, playlist.id);
      return playlist;
    }));
    
    return playlistsWithTracks;
    
  };

  const getTracksByPlaylist = async (token, playlistId) => {
    const limit = 5;
  
    const result = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
  
    const data = await result.json();
    const items = data.items || []; // Check if `data.items` is undefined, and set it to an empty array if it is
    const tracks = items.map(({ track }) => {
      return { name: track.name, artist: track.artists.map((a) => a.name).join(", ") };
    });
    
    return tracks;
  };
  

const loadGenres = async () => {
    const token = await getToken();
    const genres = await getGenres(token);
    const list = document.getElementById(`genres`);
    genres.map(async ({ name, id, icons: [icon], href }) => {
      const playlists = await getPlaylistByGenre(token, id);
      const playlistsList = playlists
  .map(({ name, external_urls: { spotify }, images: [image], tracks }) => {
    const tracksList = tracks.map(({ name, artist }) => `<li>${name} by ${artist}</li>`).join("");
    return `
      <li>
        <a href="${spotify}" alt="${name}" target="_blank">
          <img src="${image.url}" width="180" height="180"/>
        </a>
        <h3>${name}</h3>
        <div class="tracks-list">
          <ol>${tracksList}</ol>
        </div>
      </li>`;
  })
  .join("");


      if (playlists) {
        const html = `
        <article class="genre-card">
          <img src="${icon.url}" alt="${name}" width="100" height="100"/>
          <h2>${name}</h2>
          <ul class="playlist-list">
          ${playlistsList}
          </ul>
          </article>`;
          list.insertAdjacentHTML("beforeend", html);
        }
  });
};

loadGenres();
