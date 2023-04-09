const clientId = `a518195f50154510b2352b8af93f7d5f`;
const clientSecret = `4bd88fea96984cf38abb6aa2ef907a14`;

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
  const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.categories.items;
};

const getPlaylistByCategory = async (token, categoryId) => {
  const limit = 10;
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.playlists.items;
};

const getTracksArtists = async (token, playlistURL) => {
  const limit = 5;
  const result = await fetch(
    `${playlistURL}?limit=${limit}`,
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
    genres.map(async ({ name, id, icons: [icon], href }) => {
      const playlists = await getPlaylistByCategory(token, id);
      const playlistsList = playlists
        .map(
            async ({ name, external_urls: { spotify }, images: [image], tracks: { href } }) => {
                const tracks = await getTracksArtists(token, href);
                const tracksList = tracks.map(({ track: { name, artists: [artist] } }) => {
                  return `
                  <p><b>Track Name: </b>${name}, 
                  <b>Artist</b>: ${artist.name}</p>
                  `
                }).join(``);
                return `
                <li>
                  <a href="${spotify}" alt="${name}" target="_blank">
                    <img src="${image.url}" width="150" height="150"/>
                  </a>
                   <div> 
                    ${tracksList}
                  </div>
                </li>`
              });
        
              const playlistsLists = (await Promise.all(playlistsList)).join(``);
  
      if (playlists) {
        const html = `
        <article class="genre-card">
          <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
          <div>
            <h2>${name}</h2>
            <ol>
              ${playlistsLists}
            </ol>
          </div>
        </article>`;
  
        list.insertAdjacentHTML("beforeend", html);
      }
    });
  };
  
load();