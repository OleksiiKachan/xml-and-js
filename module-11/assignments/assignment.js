const clientId = `c297a76403df46d79cf3cab2ee8fc9e5`;
const clientSecret = `f701a6522ac949439b1a81e525321748`;

let _data = [];

window.choice = '';

const getToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
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
    const result = await fetch(
      `https://api.spotify.com/v1/browse/categories`,
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

const getTracksForPlaylists = async (token, playlistId) => {
    const limit = 5;
    const result = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
        {
            method: "GET",
            headers: { Authorization: "Bearer " + token },
        }
        
    );
    
    const data = await result.json();
    //console.log(data.items.name);
    return data.items.map(({track}) => ({
        name: track.name,
        artists: track.artists.map(artist => artist.name),
      })); 
};

const displayTracks = async (token, playlists) =>{

    // for (const { name, id: playlistId } of playlists)
    // playlists.map(async ({name , id: playlistId}) =>{

    //     const tracks  = await getTracksForPlaylists(token, playlistId);

    //     const tracksList = tracks.map(
    //         ({ name, artists }) => 
    //         `
    //         <li>
    //           ${name} - ${artists}
    //         </li>
    //         `
    //     ).join(``);

    //     return tracksList.join(``);
    // });  

    for (const { name, id: playlistId } of playlists) {
        const tracks = await getTracksForPlaylists(token, playlistId);
        const tracksList=`
          <ul>
            ${tracks
              .map(
                ({ name, artists }) => `
                <li>
                  ${name} - ${artists}
                </li>
                `)
              .join('')}
          </ul>
        `;
        return tracksList;
    }
}

// const load = async () => {
//     const token = await getToken();
//     const genres = await getGenres(token);

//     const list = document.getElementById(`genres`);

//     genres.map(async({ name, id, icons: [icon]}) =>{

//         const playlists = await getPlaylistByGenre(token, id);
//         const playlistsList = playlists.map(
//             ({name, external_urls: {spotify}, images:[image]}) =>
//             `
//                 <li>
//                     <a href="${spotify}" alt="${name}" target="_blank">
//                         <img src="${image.url}" width="180" height="180"/>
//                     </a>
//                 </li>
//             `
//         ).join(``);

//         const tracksList = await displayTracks(token, playlists);


//         // playlists.map(async ({name, id : playlistId}) => {
//         //     const tracks = await getTracksForPlaylists(token, playlistId);
//         //     const tracksList = tracks.map(
//         //         ({name, artist}) =>
//         //         `
//         //             <li>
//         //                 <p src="${name.url}"></p>
//         //                 <p src="${artist.url}"></p>
//         //             </li>
//         //         `
//         //     ).join(``);
//         // }
//         // ).join(``);

//         const html = `<article class= "design">
//             <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
//             <div>
//                 <h2>
//                     ${name}
//                 </h2>
//             </div>
//             <div>
//                 <ol>
//                     ${playlistsList}
//                 </ol>
//             </div>
//             <div>
//                 <p>${name} Songs</p>
//                 <ol>
//                     ${tracksList}
//                 </ol>
//             </div>
//         </article>`;
//         list.insertAdjacentHTML("beforeend", html);
//     });
// };

const load = async () => {
    const token = await getToken();
    const genres = await getGenres(token);

    const list = document.getElementById(`genres`); 

    _data = await Promise.all(   // after map and save to local
        genres.map(async (genre) => {
            const playlists = await getPlaylistByGenre(token, genre.id);

            return { ...genre, playlists };    //... spread objects
        })
    );
};

const renderGenres = async (filterTerm) => {
    let source = _data;  // local data
  
    if (filterTerm) {
      console.log(filterTerm);
      const term = filterTerm.toLowerCase();
      source = source.filter(({ name }) => {
        console.log(name.toLowerCase().includes(term));
        return name.toLowerCase().includes(term);
      });
    }
  
    const list = document.getElementById(`genres`);
  
    const html = await source.reduce(async (_acc, { id, name, icons: [icon], playlists }) => {
      const acc = await _acc;
      const token = await getToken();
      const genrePlaylists = await getPlaylistByGenre(token, id);
      const playlistList = genrePlaylists   // render figure
        .map(
          ({ name, external_urls: { spotify }, images: [image] }) =>`
          <li>
            <a href="${spotify}" alt="${name}" target="_blank">
              <img src="${image.url}" width="180" height="180"/>
            </a>
          </li>`
        )
        .join(``);
  
      const tracksList = await displayTracks(token, genrePlaylists);

      if (typeof choice === 'undefined') {
        choice = 'visible_playlists'; 
      }

      if (playlists && choice === "visible_playlists") {
        return (
          acc +
          `<article class= "design">
            <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
            <div>
                <h2>
                    ${name}
                </h2>
            </div>
            <div>
                <ol>
                    ${playlistList}
                </ol>
            </div>
            <div>
                <p>${name} Songs</p>
                <ol>
                    ${tracksList}
                </ol>
            </div>
        </article>`
        );
        
      }
      else if (playlists && choice === "invisible_playlists")
      {
        return (
            acc +
            `<article class= "design">
              <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
              <div>
                  <h2>
                      ${name}
                  </h2>
              </div>
          </article>`
          );
      }   
    else{
        return (acc +``);
    }
    }, Promise.resolve(''));
    list.innerHTML = html;
  };
  
  
  load().then(renderGenres);  
  
  const onSubmit = (event) => {
    event.preventDefault();
  
    const term = event.target.term.value;
  
    renderGenres(term);
  };

  const displayChoice = (button) => {
    console.log(button.id);
    choice = button.id;
  };