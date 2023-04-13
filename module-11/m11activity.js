const clientId = `8d3afcaa96ea4828b7f1dc0a3aaddf1d`;
const clientSecret = `4b669d3a4f39453d8e60e538d46f03c1`;

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
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.playlists.items;
};

const getTracksForPlaylist = async (token, playlistId) => {
  const limit = 10;

  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.items.map(({ track }) => track);
};

const loadGenres = async (searchTerm = "") => {
    const token = await getToken();
    const genres = await getGenres(token);
    const list = document.getElementById("genres");
  
    for (const { name, id, icons: [icon] } of genres) {
      // Filter the genres by name
      if (name.toLowerCase().includes(searchTerm.toLowerCase())) {
        const playlists = await getPlaylistByGenre(token, id);
  
        const playlistItems = await Promise.all(
          playlists.map(async ({ name, external_urls: { spotify }, images: [image], id }) => {
            const tracks = await getTracksForPlaylist(token, id);
            const trackList = tracks
              .map(({ name, artists }) => `<li>${name} - ${artists.map(a => a.name).join(", ")}</li>`)
              .join("");
  
            return `
              <li>
                <a href="${spotify}" alt="${name}" target="_blank">
                  <img src="${image.url}" width="180" height="180" />
                </a>
                <h3>${name}</h3>
                <ul>
                  ${trackList}
                </ul>
              </li>`;
          })
        );
  
        if (playlists) {
          const playlistsList = playlistItems.join("");
  
          const html = `
                <article class="genre-card">
                  <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}" />
                  <div>
                     <h2>${name}</h2>
                     <ol>
                       ${playlistsList}
                     </ol>
                   </div>
                </article>`;
  
          list.insertAdjacentHTML("beforeend", html);
        }
      }
    }
  }; 
  
  const handleGenreSearch = (event) => {
    event.preventDefault();
    const searchTerm = document.getElementById("genre-search-input").value;
    const list = document.getElementById("genres");
    list.innerHTML = "";
    loadGenres(searchTerm);
  };
  
  const init = () => {
    const genreSearchForm = document.getElementById("genre-search-form");
    genreSearchForm.addEventListener("submit", handleGenreSearch);
    loadGenres();
  };
  
  init();
  
  
  
  
  
  
