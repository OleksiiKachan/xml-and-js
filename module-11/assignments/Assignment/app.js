const clientId = `fde99dac8c2d4d83af482c672522e735`;
const clientSecret = `a9bf16b5ec4b4f67af6acef1e20bc8a3`;
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
    `https://api.spotify.com/v1/browse/categories?locale=sv_CA`,
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

// const limit = 10;
//  const data = await result.json();
//return data.categories.items;


const getTracksByPlaylist = async (token, tracksEndpoint) => {
  const limit = 2;
  const result = await fetch(`${tracksEndpoint}?limit=${limit}`, {
    method: "GET",
    headers: { Authorization: "Bearer " + token },
  });
  const data = await result.json();
  return data.items;
};

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  _data = await Promise.all(
    genres.map(async (genre) => {
      const playlists = await getPlaylistByGenre(token, genre.id);
      const playlistWithTracks = await loadTracks(token, playlists);
      return { ...genre, playlistWithTracks };
    })
  );
};

const loadTracks = async (token, playlists) =>
  Promise.all(
    playlists.map(async (playlist) => {
      const tracks = await getTracksByPlaylist(token, playlist.tracks.href);
      return { ...playlist, tracks };
    })
  );

const rGenres = (filterTerm, with_Playlist) => {
  let source = _data;
  if (filterTerm) {
    const term = filterTerm.toLowerCase();
    source = source.filter(({ name }) => name.toLowerCase().includes(term));
  }
  if(typeof with_Playlist !== 'undefined')
    source = with_Playlist? source.filter(({ playlistWithTracks }) => playlistWithTracks.length > 0) : 
    source.filter(({ playlistWithTracks }) => playlistWithTracks.length === 0) ;

  const lst = document.getElementById(`genres`);
  const html = source.reduce(
    (acc, { name, icons: [icon], playlistWithTracks }) => {
      const playlistsListHTML = playlistWithTracks
        .map(
          ({ name, external_urls: { spotify }, images: [image], tracks }) => {
           let tracksListHTML = tracks.length ? tracks
            .map(({ track }) => track ? 
            `<li>                       
                <a href="${track.external_urls.spotify}" alt="${track.name}" target="_blank">
                    <h3>${track.name} - ${track.artists.map((artist) => artist.name).join(", ")}</h3>
                </a>
            </li>`: ``)
                  .join(``)
              : ``;
            return `<li>
                      <a href="${spotify}" alt="${name}" target="_blank">
                        <img src="${image.url}" width="180" height="180"/>
                        <h3>${name}</h3>
                        <div id="tracks"><ol>${tracksListHTML}</ol></div>
                      </a>
                    </li>`;
          }
        )
        .join(``);
      if (playlistWithTracks) {
        return (
          acc +
          `<div class="genre-card">
              <h2>${name}</h2>
              <img class="genre-icon" src="${icon.url}" width="${icon.width}" 
                height="${icon.height}" alt="${name}"/>
              <div>
                <ol>
                  ${playlistsListHTML}
                </ol>
              </div>
            </div>`
        );
      }
    },
    ``
  );
  lst.innerHTML = html;
};
loadGenres().then(rGenres);

const onSubmit = (event) => {
  event.preventDefault();
  const term = event.target.term.value;
  const with_Playlist = event.target.withPlaylist.value;
  rGenres(term,with_Playlist ===`true`);
};