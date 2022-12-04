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
    const limit = 3;
  
    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + token
      }
    })
  
    const data = await result.json()
  
    return data.playlists ? data.playlists.items : [];
  }
  
  const getTracksByPlaylist = async(token, api) => {
    const limit = 5;
    
    const result = await fetch(api + `?limit=${limit}`,{
      method: "GET",
      headers:{
        Authorization: "Bearer " + token
      }
    })

    const data = await result.json();

    return data.items;
  }



  const millisecondsToMinutesAndSeconds = (ms) => {
    const minutes = Math.floor( ms / 60000 );
    const seconds = (( ms % 60000) / 1000 ).toFixed(0);
    return ( 
      ( seconds == 60 ) ? ( minutes + 1 ) + ":00" 
      : ( seconds < 10 ) ? minutes + ":0" + seconds 
      : minutes + ":" + seconds
    ); 
            
  }



  
  const loadGenres = async () => {
    const token = await getToken()
    const genres = await getGenres(token);
  
    // console.log(genres)
  
    const list = document.getElementById('genres')
  
    genres.map( async ({name, icons: [icon], id}) => {
      const playlists = await getPlaylistByGenre(token, id)
      // console.log(playlists)
  

      if (playlists.length) {

        let playlistItem = await Promise.all(playlists.map(
          async({ name, external_urls: { spotify }, images: [image], tracks }) => {
            // console.log(tracks);
            const tracksList = await getTracksByPlaylist(token, tracks.href);
            // console.log(tracksList);

            const tracksHtml = tracksList.reduce((acc, {track})=> {
              // console.log( track.name);
              const artistsNames = track.artists.reduce((acc, {name}) => acc === "" ? name : acc + ", " + name , "");
              
              // console.log(track.name + "|" +  artistsNames + "|" + millisecondsToMinutesAndSeconds(track.duration_ms));
              return acc + `
              <li>
                <img src="./play-button.png" width="30px" height="30px" alt="Play button" />
                <div>
                  <span class="trackName">${track.name}</span>
                  <span class="trackDuration">&nbsp;&nbsp;&nbsp;&nbsp; ${millisecondsToMinutesAndSeconds(track.duration_ms)}</span>
                  <br>
                  <span class="trackArtists">Artists: ${artistsNames}<span>
                </div>
              </li>
              `;
            }, "");
            
            return `
            <li>
              <a href="${spotify}">
                <img src="${image.url}" width="180" height="180" alt="${name}" />
                <div class="tracksOLWrapper">
                  <ol class="tracksOL">
                    ${tracksHtml}
                  </ol>
                </div>
              </a>
            </li>`
          }
          ));

          playlistItem = playlistItem.join('');

          console.log(playlistItem);
  
          const html = `
          <article>
            <div class="genre">
            <img src="${icon.url}" width="${icon.width}" height="${icon.height} alt="${name}" </img>
            <h2>${name}</h2>
            </div>
            <ol class="playlistOL">
              ${playlistItem}
            </ol>
            
          </article>`
        
        list.insertAdjacentHTML('beforeend', html)
      }
    })
  }
  
  loadGenres();