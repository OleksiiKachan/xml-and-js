const clientId = '4356b32ff71e45b9850314c98bb85449';
const clientSecret = '86ea266d2c214468892eb74abb31a837';

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


//New function created to get the Playlists Items (tracks)
const getPlaylistItems = async (token, playlistId) => {
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    {
      method: "GET",
      headers: { 
        Authorization: "Bearer " + token },
    },
  );

  const data = await result.json();
  return data.items ? data.items.slice(0, 5) : [];
};

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);

  _data = await Promise.all(
    genres.map(async (genre) => {
      const playlists = await getPlaylistByGenre(token, genre.id);

      const playlistsWithTracks = await Promise.all(
        playlists.map(async (playlist) => {
          const items = await getPlaylistItems(token, playlist.id);
          return { ...playlist, tracks: items };
        })
      );

      return { ...genre, playlists: playlistsWithTracks };
    })
  );
};

document.getElementById('rb-true').addEventListener('change', applyFilter);
document.getElementById('rb-false').addEventListener('change', applyFilter);

let currentFilterTerm = "";
let showPlaylists = true;

function applyFilter() {
  showPlaylists = document.getElementById('rb-true').checked;
  renderGenres(currentFilterTerm, showPlaylists);
}

const renderGenres = (filterTerm, showPlaylists = true) => {
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
          <img src="${image.url}" width="${image.width}" height="${image.height}" alt="${name}" />
        </a>
        <a href="${spotify}" alt="${name}" target="_blank">${name}
        <svg width="12px" height="12px" viewBox="0 0 24 24" style="cursor:pointer"><g stroke-width="2.1" stroke="#666" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 13.5 17 19.5 5 19.5 5 7.5 11 7.5"></polyline><path d="M14,4.5 L20,4.5 L20,10.5 M20,4.5 L11,13.5"></path></g></svg>
        </a>
        ${tracks.map(({ track: { name: trackName, artists } }) => `
        <p>
          <strong>${trackName}</strong> <br>
          Artist: ${artists.map((artist) => artist.name).join('')}
        </p>`).join('')}
      </li>`
      )
      .join(``);

    if(playlists && showPlaylists){
      return (
        acc + `      
        <article class="genre-card">
        <div class="article-header">
          <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}" />
          <h2>${name} and the top 5 songs</h2>
        </div>
        <div article-items>
        <ol>${playlistsList}</ol>
      </div>
    </article>`
      );
    } else {
      return acc + `<article class="genre-card">
      <div class="article-header">
        <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}" />
        <h2>${name} and the top 5 songs</h2>
      </div>`;
    }
  }, ``);

  list.innerHTML = html;
};

loadGenres().then(() => renderGenres(currentFilterTerm, showPlaylists));

const onSubmit = (event) => {
  event.preventDefault();

  const currentFilterTerm = event.target.term.value;

  renderGenres(currentFilterTerm, showPlaylists);
};