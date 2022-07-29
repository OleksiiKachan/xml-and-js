const clientId = `8695c265a50f48b78741042b92b1db0a`;
const clientSecret = `de90a7ca149b4880b801634d65bcd71f`;

let _data = [];

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
  const limit = 10;
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories?locale=en_US&limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  // const result = await fetch(
  //   `https://api.spotify.com/v1/browse/categories?locale=en_US`,
  //   {
  //     method: "GET",
  //     headers: { Authorization: "Bearer " + token },
  //   }
  // );

  const data = await result.json();
  // console.log(data);
  // console.log(data.categories.items);
  return data.categories.items;
};

const getPlaylistByGenre = async (token, genreId) => {
  const limit = 8;

  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  // console.log(data.playlists.items);
  return data.playlists.items ? data.playlists.items : [];
};


const getTracksByPlaylist = async (token, playlistUrl) => {
  const limit = 2;
  const result = await fetch(
    `${playlistUrl}?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  // console.log(data);
  // console.log(data.items[0].track);
  return data.items;
};

// const loadGenres = async () => {
//   const token = await getToken();
//   const genres = await getGenres(token);

//   let data = await Promise.all(genres.map(async (genre) => {
//     const playlists = await getPlaylistByGenre(token, genre.id);

//     // console.log(playlists);
//     return { ...genre, playlists };
//   }));

//   console.log(data);
//   _data = data;
  
  
// }



// const renderGenres = () => {

//   let source = _data;
//   console.log(source);
//   const html = source.reduce(async (acc, { name, id, icons: [icon], playlists }) => {

//     console.log(`render test`);
//     const playlistsHTML = playlists.map(
//       async ({ name, external_urls: { spotify }, images: [image], tracks: { href } }) => {
//         console.log(name);
//         console.log(href);
//         const tracks = await getTracksByPlaylist(token, href);
//         const tracksList = tracks.map(({ track: { name, artists: [artist] } }) => {
//           return `<p>Track Name: ${name}, Artist: ${artist.name}</p>`
//         }).join(``);
//         // console.log(tracksList);

//         `
//         <li>
//           <a href="${spotify}" alt="${name}" target="_blank">
//             <img src="${image.url}" width="180" height="180"/>
//           </a>
//            <div> 
//             ${tracksList}
//           </div>
//         </li>`
//       });

//     // you have resolved promise only inside .then function 
//     // to get promise data on the same level you need to await
//     resolvedplaylistsList = await Promise.all(playlistsHTML);
//     resolvedplaylistsList = resolvedplaylistsList.join(``);
//     // console.log(resolvedplaylistsList);
//     return acc +
//       `
//       <article class="genre-card">
//       <div>
//         <h2>${name}</h2>
//         <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
//       </div>
//       <div>        
//         <ol>
//           ${resolvedplaylistsList}
//         </ol>
//       </div>
//       </article>`;



//   }
//     , ``);

//   const list = document.getElementById(`genres`);
//   list.innerHTML = html;
//   console.log(`data rendered`)

// }



const loadGenres = async (term) => {
  const token = await getToken();
  let genres = await getGenres(token);
  const list = document.getElementById(`genres`);
  if (term) {
    genres = genres.filter(({ name }) => name.toLowerCase().includes(term));
  } 
  console.log(genres);
  
  genres.map(async ({ name, id, icons: [icon], href }) => {
    const playlists = await getPlaylistByGenre(token, id);
    const playlistsList = playlists.map(
      async ({ name, external_urls: { spotify }, images: [image], tracks: { href } }) => {
        const tracks = await getTracksByPlaylist(token, href);
        const tracksList = tracks.map(({ track: { name, artists: [artist] } }) => {
          return `<p>Track Name: ${name}, Artist: ${artist.name}</p>`
        }).join(``);
        // console.log(tracksList);

        return `
        <li>
          <a href="${spotify}" alt="${name}" target="_blank">
            <img src="${image.url}" width="180" height="180"/>
          </a>
           <div> 
            ${tracksList}
          </div>
        </li>`
      });

    // you have resolved promise only inside .then function 
    // to get promise data on the same level you need to await
    resolvedplaylistsList = await Promise.all(playlistsList);
    resolvedplaylistsList = resolvedplaylistsList.join(``);
    // console.log(resolvedplaylistsList);

    if (playlists) {
      const html = `
      <article class="genre-card">
      <div>
        <h2>${name}</h2>
        <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
      </div>
      <div>        
        <ol>
          ${resolvedplaylistsList}
        </ol>
      </div>
      </article>`;

      list.insertAdjacentHTML("beforeend", html);
    }
  }
  );
};

// loadGenres();
// loadGenres().then(() => {console.log(`loaded2`)}).then(renderGenres).then(() => { console.log(`data rendered2`); });

// console.log(_data);

const onSubmit = (event) => {
  event.preventDefault();
  // console.log(event);
  // const term = event.target.name.value;
  const term = document.getElementById("input-genre").value
  // console.log(term);
  loadGenres(term);
}
