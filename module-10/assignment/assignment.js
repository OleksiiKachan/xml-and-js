const clientId = `e8f7a40db244452496dce721c4b3d784`;
const clientSecret = `f6565ea2636b40deb9f436afb1c29134`;

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

const getPlaylistByTracks = async (token, playlistId) => {
    const limit = 5;
    const result = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

    const data = await result.json();
    return data.items;
  };

  const loadGenres = async () => {
    const token = await getToken();
    const genres = await getGenres(token);
    const list = document.getElementById("Genres");
    
    await Promise.all(genres.map(async ({ id, name, icons: [icon], href }) => {
      const playlists = await getPlaylistByGenre(token, id);
      const playlistsList = await Promise.all(playlists.map(async ({ name, id, images: [image], external_urls: { spotify } }) => {
        const items = await getPlaylistByTracks(token, id);
        const listItems = items.map(({ track: { name: trackName, artists, external_urls: { spotify } } }) => {
          return `<div class="tracks">
            <a href="${spotify}" target="_blank" class="trackname">${trackName}</a></div>
            <div class="artist">${artists.map((artist) => artist.name).join(" | ")} </div>
            <br>`;
        }).join("");
        
        return `
          <li>
            <a href="${spotify}" alt="${name}" target="_blank">
              <img src="${image.url}" width="180" height="180"/>
            </a>
            ${listItems}
          </li>
        `;
      }));
      
      if (playlists) {
        const html = `
          <article class="genre-card">
            <img class="heading" src="${icon.url}" width="150" height="150" alt="${name}"/>
            <div>
              <ol>
                ${playlistsList.join("")}
              </ol>
              <h2 class="heading">${name}</h2>
            </div>
          </article>
        `;
  
        list.insertAdjacentHTML("beforeend", html);
      }
    }));
  };
  
  loadGenres();
  