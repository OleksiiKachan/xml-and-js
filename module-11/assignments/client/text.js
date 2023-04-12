const clientID = "1cd4b8919a804e35af673e40b29986e6";
const clientSecret = "a5bea6c96ef945ad813e33fb59919bb7";

let _data = [];

const getToken = async () => {
  const result = await fetch(`https://accounts.spotify.com/api/token`, {
    method: `POST`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${clientID}:${clientSecret}`)}`,
    },
    body: `grant_type=client_credentials`,
  });

  const data = await result.json();
  return data.access_token;
};

const getGenres = async (token) => {
  const result = await fetch(`https://api.spotify.com/v1/browse/categories`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await result.json();
  return data.categories.items;
};

const getPlaylistsByGenre = async (token, genreId) => {
  const limit = 10;
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await result.json();
  return data.playlists ? data.playlists.items : [];
};

const getTracksByPlaylist = async (token, playlistId) => {
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await result.json();
  return data.items ? data.items.slice(0, 5) : [];
};

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);

  _data = await Promise.all(
    genres.map(async (genre) => {
      const playlists = await getPlaylistsByGenre(token, genre.id);
      const tracks = await Promise.all(
        playlists.map(async (playlist) => {
          const items = await getTracksByPlaylist(token, playlist.id);
          return { ...playlist, tracks: items };
        })
      );
      return { ...genre, playlists: tracks };
    })
  );
};

const renderGenres = (filterTerm) => {
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
      .map(
        ({ name, external_urls: { spotify }, images: [image], tracks }) => `
        <li>
          <a href="${spotify}" alt="${name}" target="_blank">
            <img src="${image.url}" width="180" height="180"/>
          </a>
          ${tracks
            .map(
              ({ track: { name: trackName, artists } }) =>
                `<p>
            <strong>${trackName}</strong> <br>
            Artist: ${artists.map((artist) => artist.name).join(``)}
          </p>`
            )
            .join(``)}
        </li>`
      )
      .join("");

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
