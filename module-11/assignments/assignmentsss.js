const clientId = `72c1a6adf6a249698cbb9d8fd94197cc`;
const clientSecret = `c897bb5466734620a7ea87ebd7a537cd`;
let val = true;
const getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {      //authenticate using headers
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
  return data.playlists.items;
};

const getPlaylistByTracks = async (token, playlistId) => {
  const limit = 3;
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

  data = await Promise.all(
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
const renderGenres = async (filterTerm) => {
  const token = await getToken();
  const genres = await getGenres(token);
  let source = data;

  if (filterTerm) {
    const term = filterTerm.toLowerCase();
    source = source.filter(({ name }) => {
      return name.toLowerCase().includes(term);
    });
  }
  const list = document.getElementById(`genres`);
  const html = source.reduce((acc, { name, icons: [icon], playlists }) => {
    if (document.querySelector(`input[value="with_playlists"]`).checked && playlists.length === 0) {

        val = false; 
      } else if (document.querySelector(`input[value="without_playlists"]`).checked && playlists.length > 0) {
        val = false; 
      }
      else{val = true;}
    const playlistsList = playlists
      .map(({  name, id, images: [image], external_urls: { spotify } , tracks }) => {


        const listItems = tracks
              .map(
                ({ track: { name: trackName, artists } }) =>
                  `<div class="all-name">
                <b class="track-name">${trackName}</b> </br>
                  <div class="artist-name">${artists
                    .map((artist) => artist.name)
                    .join("")} </div>
              </div>`
              )
              .join("");

        return `<li class="main-list">
        <a href="${spotify}" alt="${name}" target="_blank">
            <img src="${image.url}" width="150" height="150"/>
        </a>
        <div class="play-name" > 
            <a href="${spotify}" alt="${name}" target="_blank">${name}</a>
        </div>
          ${listItems}
        </li>`;
          }
      );
    if (playlists) {
      return (
        acc +
        `
        <article class="card">
            <img class="main-img" src="${icon.url}" width="${icon.width}" height="${
      icon.height
    } alt="${name}"/>
          <div>
             <h2>${name}</h2>
             <ol class="list">
              ${!val ? `<p> </p>` : playlistsList }
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
