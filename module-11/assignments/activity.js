const clientId = '7c7cce310ee345379888fc15e92f48c6';
const clientSecret = '7592b707b8744a2c943da52791808605';

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
          const tracks = await getTracksByPlaylist(token, playlist.id);
            return { ...playlist, tracks };
        })
      );
      return { ...genre, playlists: playlistsList };
    })
  );
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

        const trackSongs = tracks.map(
            ({
              track: {
                name: track_name,
                artists,
                external_urls: { spotify },
              },
            }) =>
              `<div class="tracks">
              <a href="${spotify}" target="_blank" class="trackname">${ track_name }</a></div>
               <div class="artist">${artists.map((artist) => artist.name).join(" | ")} </div>
              <br>`
          ).join("");

        return `<li>
          <a href="${spotify}" alt="${name}" target="_blank">
            <img class="playlists" src="${image.url}" width="180" height="180"/>
          </a>${trackSongs}
        </li>`;
      }
      );

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

  list.innerHTML = html;
};

loadGenres().then(renderGenres);

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.term.value;

  renderGenres(term);
};