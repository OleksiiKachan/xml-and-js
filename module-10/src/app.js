// const clientId = `1c8207eef1e34c4a800ab67ab48a92c7`;
// const clientSecret = `ad92f2460db64eb0856fe519771d9e99`;

// const getToken = async () => {
//   const result = await fetch("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
//     },
//     body: "grant_type=client_credentials",
//   });

//   const data = await result.json();
//   //console.log(data);
//   return data.access_token;
// };

// const getGenres = async (token) => {
//     const result = await fetch(
//       `https://api.spotify.com/v1/browse/categories?locale=sv_US`,
//       {
//         method: "GET",
//         headers: { 
//             Authorization: "Bearer " + token 
//         },
//       }
//     );
  
//     const data = await result.json();
//     return data.categories.items;
//   };
//   const getPlaylistByGenres = async (token,genreId) => {
//     const limit =10;
//     const result = await fetch(
//       `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
//       {
//         method: "GET",
//         headers: { 
//             Authorization: "Bearer " + token 
//         },
//       }
//     );
  
//     const data = await result.json();
//     return data.playlists.items;
//   };

// const loadGenres = async() => {
//     const token = await getToken();
//     const genres = await getGenres(token);

//     const list = document.getElementById(`genres`);

//     genres.map(async ({name , icons: [icon] , id  }) => {
//         const playlists = await getPlaylistByGenres(token,id);
//         console.log(playlists);
//         if(playlists.length) {
//         const html = `
//         <article>
//         <img src="${icon.url}" width="${icon.width} height="${icon.height} />
//         <h2>${name}</h2>
//         </article>`;

//         list.insertAdjacentHTML(`beforeend`,html);
//         }
//     });
// };

// loadGenres();

// // getToken().then((token)=>{
// //     getGenres(token);
// // });

const clientId = `1c8207eef1e34c4a800ab67ab48a92c7`;
const clientSecret = `ad92f2460db64eb0856fe519771d9e99`;

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

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  const list = document.getElementById(`genres`);
  genres.map(async ({ name, id, icons: [icon], href }) => {
    const playlists = await getPlaylistByGenre(token, id);
    const playlistsList = playlists
      .map(
        ({ name, external_urls: { spotify }, images: [image] }) => `
        <li>
          <a href="${spotify}" alt="${name}" target="_blank">
            <img src="${image.url}" width="180" height="180"/>
          </a>
        </li>`
      )
      .join(``);

    if (playlists) {
      const html = `
      <article class="genre-card">
        <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
        <div>
          <h2>${name}</h2>
          <ol>
            ${playlistsList}
          </ol>
        </div>
      </article>`;

      list.insertAdjacentHTML("beforeend", html);
    }
  });
};

loadGenres();
