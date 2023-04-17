const clientId = `760135f344a149e0a9a304640ab1f90d`;
const clientSecret = `7658e1f3cb094acf9906b48b61a7a012`;

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

const getTracksByPlaylist = async (token, playlist_id) => {
  const limit = 5;
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?limit=${limit}`,
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


  await Promise.all(
    genres.map(async ({ id, name, icons: [icon], href }) => {
      const playlists = await getPlaylistByGenre(token, id);
      const playlistsList = await Promise.all(playlists
        .map(
          async ({ name, external_urls: { spotify }, images: [image], id }) => {
            const tracks = await getTracksByPlaylist(token, id);
            const trackSongs = tracks.map(
                ({
                  track: {
                    name: track_name,
                    artists,
                    external_urls: { spotify }
                  }
                }) =>
                  `<div class="tracks">
                  <a href="${spotify}" target="_blank" class="trackname">${ track_name }</a></div>
                   <div class="artist">${artists.map((artist) => artist.name).join(" | ")} </div>
                  <br>`
              ).join("");

            return `<li>
              <a href="${spotify}" alt="${name}" target="_blank">
                <img class="genreIcon" src="${image.url}" width="180" height="180"/>
              </a>${trackSongs}
            </li>`;
          }
        )
      );
      if (playlists) {
        const html = `
        <article class="genre-card">
          <img id="iconID" src="${icon.url}" width="140" height="140" alt="${name}"/>
          <div>
            <h2>${name}</h2>
            <ol>
              ${playlistsList}
            </ol>
          </div>
        </article>`;

        list.insertAdjacentHTML("beforeend", html);
      }
    })
  );
};
loadGenres();