const clientId = `ea4179d6392e43ad8540f296c6680e8c`;
const clientSecret = `c1388226971a4353b2eebf67444d3461`;

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
  const limit = 14;

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

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);

  _data = await Promise.all(
    genres.map(async (genre) => {
      const playlists = await getPlaylistByGenre(token, genre.id);
      return { ...genre, playlists };
    })
  );
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
  const html = source.reduce((acc, { name, icons: [icons], playlists }) => {
    const playlistsList = playlists
      .map(
        ({ name, external_urls: { spotify }, images: [image] }) => `
      <li>
        <a href="${spotify}" alt="${name}" target="_blank">
          <img class="sub-img  " src="${image.url}" width="180" height="180"/>
        </a>
      </li>`
      )
      .join(``);
    if (playlists) {
      return (
        acc +
        `<article class="genre-card">
            <div class="main-image">
              <img class = "cat-img" src="${icons.url}" alt="${name}"/>
              </div>
              <div class="list">
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
const onReset = () => {
  renderGenres();
};
