const clientId = `1ecf4bfead8442ef9ae05640177797c0`;
const clientSecret = `fe87bdd22ca24ada920404473856abdc`;
let _data = [];

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
  getGenres(data.access_token);
  return data.access_token;
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

const getTracks = async (token, playlistId) => {
  const limit = 4;
  const result = await fetch(`${playlistId}?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );
  const data = await result.json();
  return data.items;
};

const loadGenres = async() => {
    const token = await getToken();
    const genres = await getGenres(token);
  
    _data = await Promise.all(genres.map(async (genre) =>{
        const playlists = await getPlaylistByGenre(token,genre.id);
  
        const loadedPlaylists = await Promise.all(playlists.map(async (playlist) => {
            const tracks = await getTracks(token,playlist.tracks.href);
            return {...playlist,tracks};
        })
        );
        return {...genre, playlists: loadedPlaylists};
    }));
  }
  
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
        return(
            acc +
            `
        <article class="genre-card">
        <img class="genre_image" src="${icon.url}" style="position: absolute; z-index: -1" width="100%" height="400px" alt="${name}"/>
          <h2>${name}</h2>
        </div>
          <ol>
            ${playlistsList}
          </ol>
      </article>`
        );
    }
    }, ``);
    const list = document.getElementById(`genres`);
    list.innerHTML = html;
    console.log("Data rendered!");
};
loadGenres();

loadGenres().then(() => {
    console.log("Data loaded!");
    renderGenres();
  });
  
  const onSubmit = event =>{
    event.preventDefault();
    const term = event.target.term.value;
    renderGenres(term);
    }