const clientId = '04870a8c604644f1be7a3baaf9a3de04';
const clientSecret = '979dd4ebacf44712af4228e235700e90';

const getToken = async () => {

    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    })
  
    const data = await result.json()
    return data.access_token;
  }
  
  const getGenres = async (token) => {
    const result = await fetch(`https://api.spotify.com/v1/browse/categories/`, {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + token
      }
    })
  
    const data = await result.json()
  
    return data.categories.items;
  }
  
  const getPlaylistByGenre = async (token, genreId) => {
    const limit = 9;
  
    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + token
      }
    })
  
    const data = await result.json()
  
    return data.playlists ? data.playlists.items : [];
  }
  
  const loadGenres = async () => {
    const token = await getToken()
    const genres = await getGenres(token);
  
    // console.log(genres)
  
    const list = document.getElementById('genres')
  
    genres.map( async ({name, icons: [icon], id}) => {
      const playlists = await getPlaylistByGenre(token, id)
    //   console.log(playlists)
  
      if (playlists.length) {
        const playlistItem = playlists.map(
          ({ name, external_urls: { spotify }, images: [image] }) => 
          `<li><a href="${spotify}"><img src="${image.url}" width="180" height="180" alt="${name}" </li>`)
          .join(``)
  
          const html = `
          <article>
            <div class="genre">
            <img src="${icon.url}" width="${icon.width}" height="${icon.height} alt="${name}" </img>
            <h2>${name}</h2>
            </div>
            <ol>
              ${playlistItem}
            </ol>
            
          </article>`
        
        list.insertAdjacentHTML('beforeend', html)
      }
    })
  }
  
  loadGenres();