const clientId = `ee16a4609beb48a297c451f707020470`;
const clientSecret = `601d610f90914ab2bd25f467c6b17dce`;

const getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json(); 
  return data.access_token; //specifly calling API, spotify documentation
};

const getGenres = async (token) => { // to see the categories, it is the same Genres and categories.
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories?locale=sv_US`, //after ?, eveyrthing is parameters
    {
      method: "GET", //it is API documentations, get or post. GET, all your paremeters open parsely
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  console.log(data);
  return data.categories.items; //specifly calling API, spotify documentation
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

const loadGenres = async () => {
  const token = await getToken(); //atanticate
  const genres = await getGenres(token);  //call API
  const list = document.getElementById(`genres`); //Display data
  genres.map(async ({ name, id, icons: [icon], href }) => {
    const playlists = await getPlaylistByGenre(token, id);
    const playlistsList = playlists
      .map(
        ({ name, external_urls: { spotify }, images: [image] }) => `
        <li>
          <a href="${spotify}" alt="${name}" target="_blank">
            <img src="${image.url}" width="180" height="180"/>
          </a>
        </li>`
      )
      .join(``);

    if (playlists) {
      const html = `
      <article class="genre-card">
        <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
        <div>
          <h2>${name}</h2>
          <ol>
            ${playlistsList}
          </ol>
        </div>
      </article>`;

      list.insertAdjacentHTML("beforeend", html); // bu satır diğer uygulamalarda farklı
    }
  });
};

loadGenres();
