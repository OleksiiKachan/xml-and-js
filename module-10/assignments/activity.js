const clientId =`6d523b0e29c34f52bb87008418e38d86`;
const clientSecret =`e5d085c7113846c5b9c4efc4bf90c7ef`;

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

const getTracks = async (token, href) => {
    const limit = 10;

    const result = await fetch(href + `?limit=${limit}`, {
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
    if(playlists.length){
      const playlistsList = Promise.all(playlists.map(async({name, external_urls: { spotify }, images: [image], tracks}) =>{
          const tracksOfPlaylists = await getTracks(token, tracks.href);
         
          if(tracksOfPlaylists){
            tracksList = tracksOfPlaylists.map( ( { track}) => {
                  const artist = track.artists.map(({name}) => name);
              return `
              <li><a href="${track.external_urls.spotify}"> 
              ${track.name}<br>
              Artist_name: ${artist}<br>
              Album_name: ${track.album.name}
              </li><br>`
              })
              .join('');
          }
          return`
          <li><a href="${spotify}"><img src="${image.url}" width="100" height="100" alt="${name}"/>
          <ol id=tracks>${tracksList}
          </ol></li>`;
      }))    
      .then(playlistsList => playlistsList.join(""))
      .then(playlistsList => {
        const html = `
         <article class="genre-card">
          <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
          <div>
            <h2>${name}</h2>
            <ol>
              ${playlistsList}
            </ol>
          </div>
        </article>`;
        
        list.insertAdjacentHTML("beforeend", html);
      })
    }
  });
};
  
loadGenres();
  