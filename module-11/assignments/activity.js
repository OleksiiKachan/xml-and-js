const clientId = `b4621a5afc324db68d001d2b1bcb638b`;
const clientSecret = `ea4eec3c3b4c4be4823ebc6606e15c59`;

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
const getTracks = async (token, playlistId) => {
  const limit = 5;
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.items;
};

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  
  _data = await Promise.all(
    genres.map(async (genre) => {
      const playlists = await getPlaylistByGenre(token, genre.id);
      const playlistTracks = await Promise.all(playlists.map(async (playlist) => {
          const tracksAll= await getTracks(token, playlist.id);
          return {...playlist, tracksAll};
      }))
      
      return { ...genre, playlists: playlistTracks };
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
        ({ name, external_urls: { spotify }, images: [image] , tracksAll}) => {
          
          const track = tracksAll.map(({track}) => {
            const artists = track.artists
            .map(({ name }) => name)
            .join(', ');

          return  `<li>${track.name} - ${artists}</li>`
        }).join(``);

       return ` <li>
          <a href="${spotify}" alt="${name}" target="_blank">
            <img src="${image.url}" width="180" height="180"/>
          </a>
          <ol class="tracks">
          ${track}
        </ol>
        </li>`
          }
      )
    if (playlists) {
      return (
        acc +
        `
      <article class="genre-card">
        <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
        <div>
          <h2>${name}</h2>
          <div id='in'>
          <ol id='inol'> ${playlistsList} </ol>
        </div>
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

const onreset = () => {
    renderGenres();
}