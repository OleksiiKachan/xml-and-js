const clientId = `1a0e9c393c78494c9f91e16c6862c9d1`;
const clientSecret = `9b23ef493dde4f6a958b4986a54c722e`;

let isPlaylistWithTrack = 'true';
let _data=[];

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
  const limit = 5;

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

const getTracksByPlaylist = async (token, playlistId) => {
  const limit = 5;
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.items ? data.items : [];
};


const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  for (const { name, id, icons: [icon] } of genres) {
    const playlists = await getPlaylistByGenre(token, id, document.querySelector('input[name="playlist-filter"]:checked').value === 'with-playlists');
    const tracks = await Promise.all(
      (playlists ?? []).map(async ({ id, name, external_urls: { spotify }, images: [image] }) => {
        const tracks = await getTracksByPlaylist(token, id);
        return { name, external_urls: { spotify }, images: [image], tracks };
      })
    );
    _data.push({ name, icons: [icon], playlists: tracks });
  }
};


const renderGenres = (filterTerm, filterPlaylists) => {
  let source = _data;
  if (filterTerm) {
    source = source.filter(({ name }) => {
      return name.toLowerCase().includes(filterTerm.toLowerCase());
    });
  }
  if (filterPlaylists === 'without-playlists') {
    source = source.map(({ name, icons }) => ({ name, icons }));
  }
  const list = document.getElementById(`genres`);
  const html = source.reduce((acc, { name, icons: [icon], playlists }) => {
    if (playlists) {
      const tracksList = playlists
        .map(({ tracks }) =>
          tracks
            .map(({ track }) => `
              <li>
                <h4>${track.name}</h4>
                <p>${track.artists.map(artist => artist.name).join(', ')}</p>
              </li>
            `)
            .join('')
        )
        .join('');
      const playlistsList = `
        <article class="genre-card">
          <img class="card-icon" src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
          <div>
            <h2>${name}</h2>
            <ul>
              ${tracksList}
            </ul>
          </div>
        </article>`;
      acc += playlistsList;
    } else {
      const genreList = `
        <article class="genre-card">
          <img class="card-icon" src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
          <div>
            <h2>${name}</h2>
            <p>No playlists available.</p>
          </div>
        </article>`;
      acc += genreList;
    }
    return acc;
  }, '');
  list.innerHTML = html;
};

loadGenres().then(renderGenres);

const onSubmit = (event) => {
  event.preventDefault();
  const term = event.target.term.value;
  const playlistFilter = document.querySelector('input[name="playlist-filter"]:checked').value;
  renderGenres(term, playlistFilter);
};

const playlistFilter = document.querySelector('input[name="playlist-filter"]');
playlistFilter.addEventListener('change', () => {
  const term = document.getElementById('input-filter-term').value;
  const playlistFilter = document.querySelector('input[name="playlist-filter"]:checked').value;
  renderGenres(term, playlistFilter);
});
