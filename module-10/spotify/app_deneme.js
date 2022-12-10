const clientId = `ee16a4609beb48a297c451f707020470`;
const clientSecret = `601d610f90914ab2bd25f467c6b17dce`;


// We should get a Token from spotify, then we use that token as we call Future API endpoints.
//This will be POST request. We will be given a client ID and a client secret during the registration of our Aplication.
// https://www.youtube.com/watch?v=0dmS0He_czs
//once we call that API, Spotify will give us back a bearer token  that we will   continue to use as we call their various 
//API endpoints

//Private module
const getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", //buradaki link endpoint, buna fetch API method deniyor. 
  { 
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",    //we need to specifiy the required content including clientId and clientSecret
      "Authorization": "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json(); //We store that Json result into a variable called data and precisely return the access token properly
  return data.access_token;   //from the Json data. We will be able to use that Bearer token to call a Spotify endpoints giving us actual playlist.
};

//Get a list of categories   https://accounts.spotify.com/v1/browse/categories
//Get a category's of playlist  https://api.spotify/v1/browse/categories/{category_id}/playlist
//Get a playlist's items https://api.spotify/v1/playlist/{playlist_id}/tracks
//Get a track https://api.spotify/v1/tracks/{id}

const getGenres = async (token) => {    //Bu metotla categorileri çağırıyoruz
  const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.categories.items;
};

const getPlaylistByGenre = async (token, genreId) => {  //Bu metotle playlist elde ediyoruz ve json olarak dönüyor galiba
  const limit = 10;
  const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
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
    const playlistsList = playlists.map(({ name, external_urls: { spotify }, images: [image] }) => `
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
