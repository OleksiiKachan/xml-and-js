const clientId = "d333b69db5db43bc9782a89516c0aa86";
const clientSecret = "91ad3ed3f498403eb66d9d4f740a5ee5";

const _getToken = async () => {

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
        },
        body: "grant_type=client_credentials",
    });

    const data = await result.json()
    return data.access_token;
}

const _getGenres = async (token) => {
    const result = await fetch(`https://api.spotify.com/v1/browse/categories/`, {
        method: 'GET',
        headers: {
            Authorization: "Bearer " + token
        }
    });

    const data = await result.json();

    return data.categories.items;
}

const _getPlaylistByGenre = async (token, genreId) => {
    const limit = 10;

    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
        method: 'GET',
        headers: {
            Authorization: "Bearer " + token
        }
    });

    const data = await result.json();

    return data.playlists ? data.playlists.items : [];
}

const _getTracks = async (token, tracksEndPoint) => {
    const limit = 5;

    const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
        method: 'GET',
        headers: {
            Authorization: "Bearer " + token
        }
    });

    const data = await result.json();

    return data.items;
}

const displayGenres = async () => {
    const token = await _getToken();
    const genres = await _getGenres(token);
    const list = document.getElementById(`genres`);
    genres.map(async({name , icons: [icon], id}) => {
      const playlists = await _getPlaylistByGenre(token, id);
  
      if(playlists.length){
          const playlistsList = Promise.all(playlists.map(async({name, external_urls: { spotify }, images: [image], tracks}) =>{
              const tracksInPlaylists = await _getTracks(token, tracks.href);
              console.log(tracksInPlaylists);
  
              if(tracksInPlaylists.length){
                  tracksList = tracksInPlaylists.map( ( { track}) => {
                      const artist = track.artists.map(({name}) => name);
                      return `<li><a href="${spotify}"><strong>${track.name}</strong></a><br><a href="${spotify}">Artist: ${artist}</a></li>`}).join(``);
              }
              return `<li class="li"><img src="${image.url}" width="100" height="100" alt="${name}" /><ol>${tracksList}</ol></li>`;
          }))    
          .then(playlistsList => playlistsList.join(""))
          .then(playlistsList => {
            const html = `
        <article>
        <div class="container">
        <div class="genre">
        <img src="${icon.url}" width="${icon.width}" height="${icon.height} alt="${name}" />
        <h2>${name}</h2>
        </div>
        <ol>
            ${playlistsList}
        </ol>
        </div>
        </article>`
              list.insertAdjacentHTML("beforeend", html);
          })
      }
  });
  };
  
  displayGenres();