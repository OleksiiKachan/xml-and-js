var clientId = 'e63a2acc1bdd4af5a5ee1facfa7863d7';
var clientSecret = '5b5ffcdeb0a1425886cb7de0d10f7cb7';

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

const displayTracks = async (token, href) => {
  const tracks = await getTracks(token, href)

  closeTracks()

  console.log(tracks)

  const trackListItem =  tracks.map(( { track }) => {
    const { name, external_urls: { spotify } } = track
    const artists = track.artists.map(artist => artist.name).join(`, `)

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

const loadGenres = async () => {
  const token = await getToken()
  const genres = await getGenres(token);

  const list = document.getElementById('genres')
  const tracks = document.getElementById('tracks')

  genres.map( async ({name, icons: [icon], id}) => {
    const playlists = await getPlaylistByGenre(token, id)

    if (playlists.length) {
      const playlistItem = await Promise.all(playlists.map(
        async ({ name, external_urls: { spotify }, images: [image], tracks: { href } }) => {
          //return `<li><a href="${spotify}"><img src="${image.url}" width="180" height="180" alt="${name}" </li>` 
          return `<li onClick="displayTracks('${token}', '${href}')"><img src="${image.url}" width="180" height="180" alt="${name}" /></li>` 
        }))

      const html = `
        <article>
          <div class="genre">
          <img src="${icon.url}" width="${icon.width}" height="${icon.height} alt="${name}" </img>
          <h2>${name}</h2>
          </div>
          <ol>
            ${playlistItem.join(``)}
          </ol>
          <h2>Tracks>
          <ol>

          <ol>
          
        </article>`
      
      list.insertAdjacentHTML('beforeend', html)
    }
  })
}

const main = async () => {
  await loadGenres()
}

main()





