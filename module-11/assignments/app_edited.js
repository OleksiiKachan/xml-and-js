const clientId = `fdb55f34129d49d3aa7a2c72ef7ba384`;
const clientSecret = `77b8c337ae1d46739b2678d624c73f37`;

let _data = [];


/*API Calls */

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


const getTracks = async (token, playlist_id) => {
  

  const result = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, 
  {
    method: 'GET',
    headers: { Authorization: "Bearer " + token},

  });

  const data = await result.json();
  return data.items;

}

/*
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
*/

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  

  _data = await Promise.all(
    genres.map(async (genre) => {
      const playlists = await getPlaylistByGenre(token, genre.id);

   
      playlists.map(async (playlist) => {
        const tracks = await getTracks(token, playlist.id);

        return {...playlist.items};
      })

  
      return { ...genre, playlists /*, items};*/
    };

    })

  );
};


/*Render Functions*/

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
      <h2>${name}</h2>
        <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
        <div>
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


/*Event Handler*/

const onSubmit = (event) => {
  event.preventDefault();

  const filterTerm = event.target.term.value;

  renderGenres(filterTerm);
};



loadGenres().then(renderGenres);


