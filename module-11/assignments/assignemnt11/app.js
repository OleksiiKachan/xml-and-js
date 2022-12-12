const clientId = `72d7f21030a74155a907869b6218550a`;
const clientSecret = `fa1ed4fd140442c48729198482314d6d`;
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
    const limit = 9
  
    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + token
      }
    })
  
    const data = await result.json()
  
    return data.playlists ? data.playlists.items : [];
  }
  
  const getTracks = async (token, href) => {
    href += '?limit=10'
    const result = await fetch(href, {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + token
      }
    })
  
    const data = await result.json()
    return data.items
  }
  
  const closeTracks = () => {
    const track = document.getElementById('tracks')
    if (track) document.body.removeChild(track)
  }
  
  let _trackData;
  
  const loadTrackData = async (token , href) => {
    const tracks = await getTracks(token, href)
  
    closeTracks()
  
    console.log(_trackData)
  
    _trackData = tracks.map(( { track }) => {
      const { name, external_urls: { spotify } } = track
      const artists = track.artists.map(artist => artist.name).join(`, `)
  
      return {
        "name": name, 
        "artists": artists,
        "spotify": spotify
      }
    });
  }
  
  const renderTrackData = () => {
  
    closeTracks()
  
    console.log(_trackData)
  
    const trackListItem =  _trackData.map(( { name, artists, spotify }) => {
  
      return `
        <li>
          <div class="info">
            <p class="track-name">${name}</p>
            <p class="track-artist">${artists}</p>
          </div>
          <p class="play"><a href="${spotify}" target="_blank">Play Song</a></p>
        </li>
      `
    }).join(``);
  
    const trackDiv = document.createElement('div')
    trackDiv.id = 'tracks'
  
    const html = `
        <p onClick="closeTracks()">Close</p>
        <h2>Tracks</h2>
        <ol>
          ${trackListItem}
        <ol>
    `
  
    trackDiv.insertAdjacentHTML('beforeend', html)
  
    document.body.appendChild(trackDiv)
  }
  
  const displayTracks = async (token, href) => {
    await loadTrackData(token, href)
  
    renderTrackData()
  }
  
  let _data;
  
  const loadGenres = async () => {
    const token = await getToken()
    const genres = await getGenres(token)
  
    console.log(genres)
  
    _data = await Promise.all(genres.map( async ({name, icons: [icon], id}) => {
      const playlists = await getPlaylistByGenre(token, id)
  
      return {
        "name": name, 
        "icon": icon,
        playlists,
        token
      }
    }))
  
    _data[1].playlists = []
  
    console.log(_data)
  }
  
  const renderData = (filterText) => {
    const showPlaylist = document.getElementById('with-playlist').checked
    const showGenreWithPlaylist = document.getElementById('genre-with-playlist').checked
  
    const renderHtml =  
    _data
    .filter(data => !filterText || data.name.toLowerCase().includes(filterText))
    .filter(data => showGenreWithPlaylist ? data.playlists.length > 0 : data.playlists.length === 0)
    .map(({name, icon, playlists, token}) => {
      if (playlists.length) {
        const playlistItem = showPlaylist && playlists.map(({ name, images: [image], tracks: { href } }) => {
          return `<li onClick="displayTracks('${token}', '${href}')"><img src="${image.url}" width="180" height="180" alt="${name}" /></li>` 
        })
  
        const html = `
          <article>
            <div class="genre">
              <img src="${icon.url}" width="${icon.width}" height="${icon.height} alt="${name}" </img>
              <h2>${name}</h2>
            </div>
            
            <ol>
              ${showPlaylist ? playlistItem.join(``) : `` }
            </ol>
          </article>`
        
        return html
      } else {
        console.log("Genre without playlist")
        return `<article>
          <div class="genre">
            <img src="${icon.url}" width="${icon.width}" height="${icon.height} alt="${name}" </img>
            <h2>${name}</h2>
          </div>
        </article>`
      }
    });
    
    const html = renderHtml.filter(Boolean).join(``)
    const genres = document.getElementById('genres')
    genres.innerHTML = html
  }
  
  const submitHandler = (event) => {
    event.preventDefault()
    const genre = event.target.genre.value
    renderData(genre.toLowerCase())
  }
  
  const resetHandler = () => {
    renderData()
  }
  
  const main = async () => {
    await loadGenres()
  
    renderData()
  }
  
  main()
  
  