const clientId = `b3020bc784724058aa5cf908b9ea35ce`;
const clientSecret = `e824daf196c648ce8f68338e20b4c2b6`;

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

const getTracksFromPlaylist = async (token, tracksUrl) => {
  const limit = 2;

  const result = await fetch(tracksUrl + `?limit=${limit}`, {
    method: "GET",
    headers: { Authorization: "Bearer " + token },
  });

  const data = await result.json();
  return data.items;
};

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  const list = document.getElementById(`genres`);
  genres.map(async ({ name, id, icons: [icon]}) => {
    const playlists = await getPlaylistByGenre(token, id);
   

    if (playlists.length) {
      Promise.all(playlists
        .map(async ({ name, external_urls: { spotify }, images: [image], tracks }) => {
          const playlistTracks = await getTracksFromPlaylist(token, tracks.href);
          let tracksList = '';
          if (playlistTracks) {
            tracksList = playlistTracks
              .map(({ track }) => {
                const artists = track.artists
                  .map(({ name }) => name)
                  .join(', ');
                return `<li class="track">${track.name} - ${artists}</li>`})
              .join('');
          }
          return `
            <li class>
            <a href="${spotify}" alt="${name}" target="_blank">
              <img src="${image.url}" width="180" height="180"/>
            </a>
            <p> Tracks: </p>
          <ol class="tracks">
                  ${tracksList}
                </ol>
            </li>`;
        }))
        .then(playlistsList => playlistsList.join(""))
        .then(playlistsList => {
      const html = `
      <article>
        <img id="mainImage" src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
        <div>
          <h2>${name}</h2>
          <ol>
            ${playlistsList}
          </ol>
        </div>
      </article>`;

      list.insertAdjacentHTML("beforeend", html);
        })
    }
  });
};

loadGenres();
getTrackByPlayList();