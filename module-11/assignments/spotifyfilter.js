const clientId = `db44fa26acaa4e0a9af5f7cc2fda2e81`; 
const clientSecret = `0377351c96c84f97bd040d216e590fc2`;

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
  const limit = 5;
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories?locale=en_US&limit=${limit}`,
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


const getTracksArtists = async (token, playlistUrl) => {
  const limit = 4;
  const result = await fetch(
    `${playlistUrl}?limit=${limit}`,
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
          const tracks = await getTracksArtists(token,playlist.tracks.href);
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


  const list = document.getElementById(`genres`);
  list.innerHTML = html;
  console.log("Data rendered!");
};


loadGenres().then(() => {
  console.log("Data loaded!");
  renderGenres();
});

const onSubmit = event =>{
  event.preventDefault();
  const term = event.target.term.value;
  renderGenres(term);
}

