const clientId = `081b1851ceb440ffbdd9397cf729c311`;
const clientSecret = `57e2f31fde9a40a1aec3d284ae2401f5`;

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
  const getPlaylistsByGenre = async(token,genreId)=>{
    const limit = 6;
    const result = await fetch(
      `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token }
      }
    );

    const data = await result.json();
    return data.playlists.items;

  };
const getPlaylistTracks= async (token, playlistId) => {
    const limit = 5;
    const result = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
      {
        method: "GET",
        headers: { 
          Authorization: "Bearer " + token },
      },
    );

    const data = await result.json();
    return data;
  };

  const loadGenres = async()=>{
    const token = await getToken();
    const genres = await getGenres(token);

    _data = await Promise.all(
      genres.map(async (genre) => {
        const playlists = await getPlaylistsByGenre(token, genre.id);
        if(playlists.length){
            await Promise.all(playlists.map(async (playlist)=>{
              playlist.tracks = await getPlaylistTracks(token, playlist.id);
            })
          );
        }

        return { ...genre, playlists };
      })
    );
  };

  let _playlist = 'true';

  const renderGenres = (filterTerm) => {
    let source = _data;

    if (filterTerm) {
      const term = filterTerm.toLowerCase();
      source = source.filter(({ name }) => {
        return name.toLowerCase().includes(term);
      });
    }


    const list = document.getElementById(`genres`);
    const html = source.reduce((acc,{id,name,href,icons:[icon],playlists})=>{
     return acc + `
     <article class="genre-card">      
     <img src="${icon.url}" width="${icon.width}" height="${icon.height}" class="rounded-img" alt="${name}"/>
     <div>
     <h2>${name}</h2>
     ${_playlist != undefined && _playlist ==='true' ? 
       `<ul>
         ${playlists.map(({name, images:[image], external_urls:{spotify}, id,tracks}) => {
           return `
             <li>
               <a href="${spotify}" target="_blank">
                 <img src="${image.url}" width="180" height="180" class="rounded-img" alt="${name}"/>
               </a>
               <ol>
                 ${tracks.items.map(({track:{name, external_urls:{spotify}}}) => `
                   <li class="track-name"><a href="${spotify}" target="_blank">${name}</a></li>
                 `).join('')}
               </ol>
             </li>
           `;
         })}
       </ul>` : 
       ''
     }
     </div>
   </article>
     `

    },'');

    list.innerHTML = html;
  }



  loadGenres().then(renderGenres);

  const onSubmit = (event) => {
    event.preventDefault();

    const term = event.target.term.value;
     _playlist = event.target._radio.value;
    renderGenres(term);
  };