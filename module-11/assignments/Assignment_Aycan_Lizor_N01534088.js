const clientId = `ee16a4609beb48a297c451f707020470`;
const clientSecret = `601d610f90914ab2bd25f467c6b17dce`;

let dataArray = [];

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
  
  //------------------------------------------------------------------------------------------
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
  
  
    const trackListItem =  tracks.map(( { track }) => {
      const { name, external_urls: { spotify } } = track
      const artists = track.artists.map(artist => artist.name).join(`, `)
  
      return `
        <li>
          <div class="info">
            <h2>${name}</h2>
            <h3>${artists}</h3>
            <h3>${spotify}</h3>

          </div>
          
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

  ///----------------------------------------------------------------------------------------
  
  const loadGenres = async () => {
    const token = await getToken()
    const genres = await getGenres(token);
  
    dataArray = await Promise.all(genres.map(async (genre) => {
        const playlists = await getPlaylistByGenre(token, genre.id);
        return { ...genre, playlists };
      })
    ); 

    const list = document.getElementById('genres')
    const tracks = document.getElementById('tracks')
  
    genres.map( async ({name, icons: [icon], id}) => {
      const playlists = await getPlaylistByGenre(token, id)
  
      if (playlists.length) {
        const playlistItem = await Promise.all(playlists.map(
          async ({ name, external_urls: { spotify }, images: [image], tracks: { href } }) => {
             
            return `<li onClick="displayTracks('${token}', '${href}')"><img src="${image.url}" width="180" height="180" alt="${name}" /></li>` 
          }))
  
        const html = 
        `<div>
            <div class="genre">
            <img src="${icon.url}" width="${icon.width}" height="${icon.height} alt="${name}" </img>
            <h2>${name}</h2>
            </div>
            
              ${playlistItem.join(``)}
             <h2>Tracks>
                   
          </div>`
        list.insertAdjacentHTML('beforeend', html)
      }
    })


    const renderGenres = (filterTerm) => {
      let source = dataArray;
      const genreWith = document.getElementById("with");
      const genreWithout = document.getElementById("without");
    
      console.log(source);
    
      if (filterTerm) {
        console.log(filterTerm);
        const term = filterTerm.toLowerCase();
        source = source.filter(({ name }) => {
          console.log(name.toLowerCase().includes(term));
          return name.toLowerCase().includes(term);
        });
      }
      if (genreWith.checked) {
        source = source.filter((obj) => {
          if (obj.playlists.length !== 0) return obj;
        });
        console.log(source);
      }
      if (genreWithout.checked) {
      }
      const genreslist = document.getElementById(`genres`);
      const page = source.reduce((acc, { name, icons: [icons], playlists }) => {
      const playlistsList = playlists.map(({ name, external_urls: { spotify }, images: [image] }) => `
          <li>
            <a href="${spotify}" alt="${name}" target="_blank">
              <img class="sub-img  " src="${image.url}" width="180" height="180"/>
            </a>
          </li>`
          ).join(``);
    
        if (!without.checked) {
          return (acc +
            `<article class="genre-card">
                <div class="main-image">
                  <img class = "cat-img" src="${icons.url}" alt="${name}"/>
                  </div>
                  <div class="list">
                    <h2>${name}</h2>
                    <ol>
                      ${playlistsList}
                    </ol>
                  </div>
                </article>`
          );
        } else {
          return (acc +
            `<article class="genre-card">
                <div class="main-image">
                  <img class = "cat-img" src="${icons.url}" alt="${name}"/>
                  </div>
                  <div class="list">
                    <h2>${name}</h2>
                   
                  </div>
                </article>`
          );
        }
      }, ``);
     
      genreslist.innerHTML = page;
    };
    loadGenres().then(renderGenres);
    
    
    const onReset = () => {
      renderGenres();
    };

    const onSubmit = (event) => {
      event.preventDefault();
      const term = event.target.term.value;
    
      renderGenres(term);
    };
    
  }
  
  const main = async () => {
    await loadGenres()
  }
  
  main();
  