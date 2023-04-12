const clientId = `c1c0c189d0f5491c8857eed6431af4d1`;
const clientSecret = `167b0e3f3587465c85d49012408539f7`;

let _data = [];

const getToken = async () => {
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    },
  });

  const data = await result.json();
  return data.access_token;
};

const getGenres = async (token) => {
  const result = await fetch(
    'https://api.spotify.com/v1/browse/categories?locale=sv_US', 
    {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + token },
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
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    },
  );

  const data = await result.json();
  return data.playlists ? data.playlists.items : [];
};


const getPlaylistTracks = async (token, playlistId) => {
  const limit = 4;
  await new Promise(resolve => setTimeout(resolve, 1000));
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
    {
      method: "GET",
      headers: { 
        Authorization: "Bearer " + token },
    },
  );

  const data = await result.json();
  return data.items ? data.items : [];
};

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);

  _data = await Promise.all(
    genres.map(async (genre) => {
      const playlists = await getPlaylistByGenre(token, genre.id);

      const loadedPlaylist = await Promise.all(
        playlists.map(async (playlist) => {
          const items = await getPlaylistTracks(token, playlist.id);
          return { ...playlist, tracks: items };
        })
      );

      return { ...genre, playlists: loadedPlaylist };
    })
  );
};


const renderGenres = (filterTerm) => {
  let source = _data;

  if(filterTerm) {
    const term = filterTerm.toLowerCase();
    source = source.filter (({name}) => {
      console.log(name.toLowerCase().includes(term));
      return name.toLowerCase().includes(term);
    });
  }

  const list = document.getElementById(`genres`);

  const html = source.reduce((acc, {name, icons: [icon], playlists}) => {
    const playlistsList = playlists
    .map (
      ({name, external_urls: {spotify}, images: [image], tracks}) =>
      `<li>
        <a href="${spotify}" alt="${name}" target="_blank">
          <img src="${image.url}" width="180" height="180"/>
        </a>
        ${tracks.map(({ track: { name: trackName, artists } }) => `
        <p>
          ${trackName} by ${artists.map((artist) => artist.name).join('')}
        </p>`).join('')}
      </li>`
      )
      .join(``);

    if(playlists){
      return (
        acc + `      
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