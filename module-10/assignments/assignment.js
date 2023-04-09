const clientId = `8a18e251504f49e2a64cf56ab7711eb6`;
const clientSecret = `a1ae20f2eed345ea847fc5d43de21e5f`;

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
  const limit = 5;

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
  const list = document.getElementById("genres");

  await Promise.all(
    genres.map(async ({ id, name, icons: [icon], href }) => {
      const playlists = await getPlaylistByGenre(token, id);
      const playlistsList = await Promise.all(
        playlists.map(
          async ({ name, external_urls: { spotify }, images: [image], id }) => {
            const tracks = await getTracksByPlaylist(token, id);
            const trackSongs = tracks.map(
                ({
                  track: {
                    name: track_name,
                    artists,
                    external_urls: { spotify },
                  },
                }) =>
                  `<div class="tracks">
                  <a href="${spotify}" target="_blank" class="trackname">${ track_name }</a></div>
                   <div class="artist">${artists.map((artist) => artist.name).join(" | ")} </div>
                  <br>`
              ).join("");

            return `<li>
              <a href="${spotify}" alt="${name}" target="_blank">
                <img class="playlists" src="${image.url}" width="180" height="180"/>
              </a>${trackSongs}
            </li>`;
          }
        )
      );

      if (playlists) {
        const html = `
        <article class="genre-card">
        <img class="heading" src="${ icon.url }" width="150" height="150" alt="${ name }"/>
            <div>
                <ol>${ playlistsList }</ol>
                <div class="container">
                  <h2 class="title_playlist">${ name }</h2>
                </div>
            </div>
        </article>`;

        list.insertAdjacentHTML("beforeend", html);
      }
    })
  );
};

loadGenres();