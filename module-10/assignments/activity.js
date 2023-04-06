const clientId = "910e59ec1184482d8932ab9e1bc3ff8d";
const clientSecret = "02f3d3633013444f86f33305092dcfb5";
const urlToken = "https://accounts.spotify.com/api/token";
const urlGenreUS = "https://api.spotify.com/v1/browse/categories?locale=sv_US";

const getTotken = async () => {
  const response = await fetch(urlToken, {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa(clientId + ":" + clientSecret)}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
};

const getGenreList = async (token) => {
  const reponse = await fetch(urlGenreUS, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await reponse.json();
  return data.categories.items;
};

const getPlaylistByGenre = async (token, category_ID) => {
  const limit = 10;

  const response = await fetch(
    `https://api.spotify.com/v1/browse/categories/${category_ID}/playlists?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );
  const data = await response.json();
  return data.playlists.items;
};

// getTotken()
//   .then((data) => console.log(data))
//   .catch((data) => console.log(data));

const loadData = async () => {
  const token = await getTotken();
  const genres = await getGenreList(token);
  const display_div = document.getElementById(`display`);

  genres.map(async ({ name, id, icons: [icon], href }) => {
    const playlist = await getPlaylistByGenre(token, id);
    const playlist_html = playlist
      .map(
        ({ name, external_urls: { spotify }, images: [image] }) => `
        <li class="item">
          <a href="${spotify}" alt="${name}" target="_blank">
            <img src="${image.url}" width="180" height="180"/>
          </a>
        </li>`
      )
      .join(``);

    if (playlist_html) {
      const html = `
      <article class="genre-card">
      <div class="card-header">
        <img src="${icon.url}" width=80 height=80 alt="${name}"/>
        <div class="card-title">${name}</div>
      </div>
        <ol class="item-list">
          ${playlist_html}
        </ol>
      </article>`;

      display_div.insertAdjacentHTML("beforeend", html);
    }
  });
};

loadData();
