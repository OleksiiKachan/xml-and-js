const clientId =  '5f5d5e1d09c94ddd8891378ae6787941';
const clientSecret = '5ddc2ea730644435a63ebf886c13e251';
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
      const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=en_CA&limit=5`, {
          method: `GET`,
          headers: {
              Authorization: "Bearer " + token,
          },
      });

      const data = await result.json();
      return data.categories.items;
  };

  const getPlaylistByGenre = async (token, genreId) => {
      const limit = 10;
      const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
          method: `GET`,
          headers: {
              Authorization: "Bearer " + token,
          },
      });
      const data = await result.json();
      return data.playlists.items;
  }

  const getTracks = async(token, href ) => {
    const limit = 5;
    const result = await fetch(href + `?limit=${limit}`,{
      method: `GET`,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await result.json();
    return data.items;
  }

  const loadGenres = async() => {
      const token = await getToken();
      const genres = await getGenres(token);

      const list = document.getElementById('genres');

      genres.map(async ({name, icons: [icon], id}) => {
          const playlists = await getPlaylistByGenre(token, id);
          //console.log(playlists);
          if(playlists.length){
            Promise.all(playlists.map( async ({ name, external_urls: { spotify }, images: [image], tracks }) => {
            const tracksInPlaylist = await getTracks(token, tracks.href);
            //console.log(tracks); 
            let tracksListinPlaylist = '';
            if(tracksInPlaylist.length){
               tracksListinPlaylist = tracksInPlaylist.map(({track}) => {
                const artists = track.artists.map(({name}) => name).join(', ');
                return `<li>${track.name} - ${artists} <li>`
              }).join('');
            }
            //console.log(tracksInPlaylist);
            return `<li>
            <a href="${spotify}" alt="${name}" target="_blank">
              <img class="pimg" src="${image.url}" width="180" height="180"/>
            </a>
            <ol class="tracks"> ${tracksListinPlaylist}</ol>
          </li>`
          }))
          .then(playlistsItem => playlistsItem.join(""))
          .then(playlistsItem => {
            const html = `
              <article class="genre-card">
                  <img src="${icon.url}" width="${icon.width}" height="${icon.height}" />                
                  <h2>${name}</h2>
                  <div>
                  <ol>
                  ${playlistsItem}
                  </ol>
                  </div>
              </article>`;
              list.insertAdjacentHTML(`beforeend`, html);
          })  
          }
      });
  };

  loadGenres();