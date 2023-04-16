const clientId = `e42a2ffbbf9c41a18cbe878ab0e80756`;
const clientSecret = `9f40bdb007ec4a0a9d8b6c386c354c85`;

let isPlaylistWithTrack = 'true';
let filter_data = [];

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

const getTracksByPlaylist = async (token, playlist_id) => {
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

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);

  filter_data = await Promise.all(
    genres.map(async (genre) => {
      const playlists = await getPlaylistByGenre(token, genre.id);
      const playlistsList = await Promise.all(
        playlists.map(async (playlist) => {
          const tracks = await getTracksByPlaylist(token, playlist.id);
            return { ...playlist, tracks };
        })
      );
      return { ...genre, playlists: playlistsList };
    })
  );
};



const renderGenres = async (filterTerm) => {
  const token = await getToken();
  const genres = await getGenres(token);
  let source = filter_data;

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

        const trackSongs = tracks.map(
            ({
              track: {
                name: track_name,
                artists,
                external_urls: { spotify },
              },
            }) =>
              `<div class="tracks">
              <a class="tracks" href="${spotify}" target="_blank" class="trackname">${ track_name }</a></div>
               <div class="artist">${artists.map((artist) => artist.name).join(" | ")} </div>
              <br>`
          ).join("");

        return `<li>
          <a href="${spotify}" alt="${name}" target="_blank">
            <img class="playlists" src="${image.url}" width="180" height="180"/>
          </a>
          ${trackSongs}
        </li>`;
      }
      );

    if (playlists) {
      return (
        acc +`
        <article class="genre-card">
        <div class="genre-card-left">
          <img id="main-img" src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
          </div>
          <div class="genre-card-right">
            <h1>${name}</h1>
            <ol>
            ${isPlaylistWithTrack != undefined && isPlaylistWithTrack === 'true' ? 
            `${playlistsList}` : `<p>Playlist not avaialbale</p>`
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