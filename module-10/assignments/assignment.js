const clientId = `7b9414905af941b79d8500a6883813bb`;
const clientSecret = `df92b95367bb4dad8117e85f74113ce4`;

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
  const limit = 12;

  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  //console.log(data.playlists.items)
  return data.playlists.items;
};
const getTrackByPlaylist = async (token, tracks) => {
    const limit = 5;

    const result = await fetch(
      `${tracks.href}/?limit=${limit}`,
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
  const list = document.getElementById(`genres`);
  genres.map(async ({ name, id, icons: [icon], href }) => {
    const playlists = await getPlaylistByGenre(token, id);
    const playlistsList = playlists
      .map(
        async ({ name, external_urls: { spotify }, images: [image],tracks}) => {
            const getTracks = await getTrackByPlaylist(token,tracks);
            const tracksList = getTracks.map(async({track:{name,artists:[artist]}})=>{
                `<h3>Track Name: ${name}</h3>
                 <h3>Artist: ${artist.name}</h3><br>`
            }).join(``);
            return `
            <li>
              <a href="${spotify}" alt="${name}" target="_blank">
                <img src="${image.url}" width="180" height="180"/>
              </a>
              <div>${tracksList}</div>
            </li>`;
        }
    );
    if (playlists) {
      const html = `
      <article class="genre-card">
        <div>
          <h2>${name}</h2>
          <ol>
            ${await (await Promise.all(playlistsList)).join(``)}
          </ol>
        </div>
      </article>`;

      list.insertAdjacentHTML("beforeend", html);
    }
  });
};

loadGenres();