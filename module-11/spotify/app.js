const clientId = `7070cb2b2d1f4d86a854f1cc7e533cc3`;
const clientSecret = `3b733a6a9fff47579657dade48a52ad3`;

let isPlaylistWithTrack = 'true';

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


const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);

  _data = await Promise.all(
    genres.map(async (genre) => {
      const playlists = await getPlaylistByGenre(token, genre.id);
      const playlistsList = await Promise.all(
        playlists.map(async (playlist) => {
          const tracks = await getTrack(token, playlist.id);
            return { ...playlist, tracks };
        })
      );
      return { ...genre, playlists: playlistsList};
    })
  );
};


const getTrack = async (token, playlist_id) => {
  const limit = 5;
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.items;
};


const renderGenres = async (filterTerm) => {
  const token = await getToken();
  const genres = await getGenres(token);
  let source = _data;

  if (filterTerm) {
    const term = filterTerm.toLowerCase();
    source = source.filter(({ name }) => {
      return name.toLowerCase().includes(term);
    });
  }

  const list = document.getElementById(`genres`);

  const html = source.reduce((acc, { name, icons: [icon], playlists }) => {
    const playlistsList = playlists
      .map(({ name, external_urls: { spotify }, images: [image], tracks }) => {

        const tracksInPlaylistsList = tracks.map(
            ({
              track: {
                name: track_name,
                artists,
                external_urls: { spotify },
              },
            }) =>
            `<div>
            <a href="${spotify}" target="_blank">${ track_name }</a></div>
             <div class="artist">${artists.map((artist) => artist.name).join(" , ")} </div>
            <br>`
          ).join("");

        return `<li><a href="${spotify}"><img src="${image.url}" width="180" height="180" alt="${name}"/><ol class="tracks">${tracksInPlaylistsList}</ol></li>`;
      }
      );


    if (playlists) {
      return (
        acc +`
        <article class="genre-card">
        <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
        <div>
          <h2>${name}</h2>
        <ol>
          ${isPlaylistWithTrack != undefined && isPlaylistWithTrack === 'true' ? 
          `${playlistsList}` : `<p>Playlist is not avaialbale</p>`
        }
          </ol>
          </div>
      </article>`
      );
    }
  }, ``);

  list.innerHTML = html;
}



loadGenres().then(renderGenres);


const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.term.value;
  isPlaylistWithTrack = event.target.playlist_tracks.value;
  console.log(isPlaylistWithTrack);
  renderGenres(term);
};