const clientId = `990f9c3288394fb7a95aa29f4e2b5acc`;
const clientSecret = `8879412691d54b6ca99759f1c62f9cfb`;
let _data = [];
let showPlaylist = true;

const getGenres = async (token) => {
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories?country=IN`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.categories.items;
};

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


const getPlaylistByTracks = async (token, playlistId) => {
  const limit = 5;
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  const data = await result.json();
  return data.items || [];
};
const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);

  _data = await Promise.all(
    genres.map(async (genre) => {
      const playlists = await getPlaylistByGenre(token, genre.id);

      const playlistsList = await Promise.all(
        playlists.map(async (playlist) => {
          const tracks = await getPlaylistByTracks(token, playlist.id);

          return { ...playlist, tracks };
        })
      );
      return { ...genre, playlists: playlistsList };
    })
  );
};
const getPlaylistByGenre = async (token, genreId) => {
    const limit = 10;
  
    const result = await fetch(
      `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?country=IN&limit=${limit}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
  
    const data = await result.json();
    return data.playlists.items;
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
    if (
      document.querySelector(`input[value="with-playlists"]`).checked &&
      playlists.length === 0
    ) {
      showPlaylist = false;
    } else if (
      document.querySelector(`input[value="without-playlists"]`).checked &&
      playlists.length > 0
    ) {
      showPlaylist = false;
    } else {
      showPlaylist = true;
    }

    const playlists_html = playlists
      .map(
        ({ name, id, images: [image], external_urls: { spotify }, tracks }) => `
        <li>
        <a href="${spotify}" alt="${name}" target="_blank">
          <img src="${image.url}" width="180" height="180"/>
        </a>
            ${tracks
              .map(
                ({
                  track: {
                    name: trackName,
                    artists,
                    external_urls: { spotify },
                  },
                }) =>
                  `<div class="tracks">
              <a href="${spotify}" target="_blank" class="trackname">${trackName}</a></div>
               <div class="artist">${artists
                 .map((artist) => artist.name)
                 .join(" | ")} </div>
              <br>
        `
              )
              .join("")}
          </li>`
      )
      .join(``);

    if (playlists) {
      return (
        acc +
        `
        <article class="genre-card">
            <img class="heading" src="${
              icon.url
            }" width="150" height="150" alt="${name}"/>
            <div>
                <ol>
                    ${showPlaylist ? playlists_html : "<p>!playlists</p>"}
                </ol>
                <h2 class="heading">${name}</h2>
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