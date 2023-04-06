const clientId = `c1c0c189d0f5491c8857eed6431af4d1`;
const clientSecret = `167b0e3f3587465c85d49012408539f7`;

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
  const limit = 10;

  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token }
    }
  );

  const data = await result.json();
  return data.playlists.items;
};


const getTracksArtists = async (token, playlistUrl) => {
  const limit = 4;
  const result = await fetch(
    `${playlistUrl}?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.items;
};

const load = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  const list = document.getElementById(`genres`);
  for (const { name, id, icons: [icon], href } of genres) {
    const playlists = await getPlaylistByGenre(token, id);
    const playlistsList = await Promise.all(playlists.map(async ({ name, external_urls: { spotify }, images: [image], tracks: { href } }) => {
      const tracks = await getTracksArtists(token, href);
      const tracksList = tracks.map(({ track: { name, artists: [artist] } }) => {
        return `<p>Track Name: ${name}, Artist: ${artist.name}</p>`
      }).join(``);
      return `
          <li>
            <a href="${spotify}" alt="${name}" target="_blank">
              <img src="${image.url}" width="180" height="180"/>
            </a>
            <div> 
            ${tracksList}
          </div>
          </li>`
    }));
    const resolvedplaylistsList = playlistsList.join(``);

    if (playlists) {
      const html = `
        <article class="genre-card">
          <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
          <div>
            <h2>${name}</h2>
            <ol>
              ${resolvedplaylistsList}
            </ol>
          </div>
        </article>`;

      list.insertAdjacentHTML("beforeend", html);
    }
  }
};

load();
