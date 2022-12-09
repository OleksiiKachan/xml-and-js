// const clientId = `1c8207eef1e34c4a800ab67ab48a92c7`;
// const clientSecret = `ad92f2460db64eb0856fe519771d9e99`;

// let _data = [];

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
//   return data.access_token;
// };

// const getGenres = async (token) => {
//   const result = await fetch(
//     `https://api.spotify.com/v1/browse/categories?locale=sv_US`,
//     {
//       method: "GET",
//       headers: { Authorization: "Bearer " + token },
//     }
//   );

//   const data = await result.json();
//   return data.categories.items;
// };

// const getPlaylistByGenre = async (token, genreId) => {
//   const limit = 10;

//   const result = await fetch(
//     `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
//     {
//       method: "GET",
//       headers: { Authorization: "Bearer " + token },
//     }
//   );

//   const data = await result.json();
//   return data.playlists.items;
// };

// const getTracks = async(token, href) => {
//   const limit = 3;
//   const result = await fetch(href + `?limit=${limit}`, {
//     method: "GET",
//     headers: { Authorization: "Bearer " + token },
//   });

//   const data = await result.json();
//   return data.items;
// }

// const loadGenres = async () => {
//   const token = await getToken();
//   const genres = await getGenres(token);

//   _data = await Promise.all(
//     genres.map(async (genre) => {
//       const playlists = await getPlaylistByGenre(token, genre.id);

//       return { ...genre, playlists };
//     })
//   );
// };

// const renderGenres = (filterTerm) => {
//   let source = _data;

//   if (filterTerm) {
//     console.log(filterTerm);
//     const term = filterTerm.toLowerCase();
//     source = source.filter(({ name }) => {
//       console.log(name.toLowerCase().includes(term));
//       return name.toLowerCase().includes(term);
//     });
//   }

//   const list = document.getElementById(`genres`);

//   const html = source.reduce((acc, { name, icons: [icon], playlists }) => {
//     const playlistsList = playlists
//       .map(
//         ({ name, external_urls: { spotify }, images: [image] }) => `
//         <li>
//           <a href="${spotify}">
//             <img src="${image.url}" width="180" height="180" alt="${name}"/>
//           </a>
//         </li>
//         `
//       )
//       .join(``);

//     if (playlists) {
//       return (
//         acc +
//         `
//         <article>
//         <img src = "${icon.url}" width="${icon.width}" height="${icon.height}"/>
//         </article>
//         <div>
//             <h2>${name}</h2>
//             <ol id=playlist>
//                 ${playlistsList}
//             </ol>
//         </div>
//       `
//       );
//     }
//   }, ``);

//   list.innerHTML = html;
// };

// loadGenres().then(renderGenres);

// const onSubmit = (event) => {
//   event.preventDefault();

//   const term = event.target.term.value;

//   renderGenres(term);
// };
// const onReset = () =>{
//   renderGenres();
// }

const clientId = `1c8207eef1e34c4a800ab67ab48a92c7`;
const clientSecret = `ad92f2460db64eb0856fe519771d9e99`;

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
  return data.playlists ? data.playlists.items : [];
};

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);

  _data = await Promise.all(
    genres.map(async (genre) => {
      const playlists = await getPlaylistByGenre(token, genre.id);

      return { ...genre, playlists };
    })
  );
};

const renderGenres = (filterTerm) => {
  let source = _data;

  if (filterTerm) {
    console.log(filterTerm);
    const term = filterTerm.toLowerCase();
    source = source.filter(({ name }) => {
      console.log(name.toLowerCase().includes(term));
      return name.toLowerCase().includes(term);
    });
  }

  const list = document.getElementById(`genres`);

  const html = source.reduce((acc, { name, icons: [icon], playlists }) => {
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
      return (
        acc +
        `
      <article class="genre-card">
        <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
        <div>
          <h2>${name}</h2>
          <ol>
            ${playlistsList}
          </ol>
        </div>
      </article>`
      );
    }
  }, ``);

  list.innerHTML = html;
};

loadGenres().then(renderGenres);

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.term.value;

  renderGenres(term);
};

const onReset = () =>{
    renderGenres();
  };
