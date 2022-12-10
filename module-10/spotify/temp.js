const clientId = `0c64de82e6674784bd60a39457e22852`;
const clientSecret = `5ef0627159e6477198f09d04dc35018b`;

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

const getTracksByPlaylist =async(token, tracks)=>{
  const limit=5;

  const result=await fetch(tracks+ `?limit=${limit}`, 
  {
    method:"GET",
    headers: { Authorization: "Bearer " + token },

  }
  );
  const data = await result.json();
  return data.items;
}

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);

  const list = document.getElementById("genres");

  genres.map(async ({ name, id, icons: [icon] }) => {
    const playlists = await getPlaylistByGenre(token, id);

    if (playlists.length) {
      Promise.all(playlists
        .map(async ({ name, external_urls: { spotify }, images: [image], tracks }) => {
          const playlistTracks = await getTracksByPlaylist(token, tracks.href);
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
            <li class="playlist">
                <a href="${spotify}" alt="${name}" target="_blank">
                    <img src="${image.url}" width="180" height="180" alt="${name}"/>
                </a>
                <ol class="tracks">
                  ${tracksList}
                </ol>
            </li>`;
        }))
        .then(playlistsList => playlistsList.join(""))
        .then(playlistsList => {
          const html = `
            <article class="genre-card">
                <div>
                    <h2>${name}</h2>
                    <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
                </div>
                <ol class="playlists">
                    ${playlistsList}
                </ol>
            </article>`;

          list.insertAdjacentHTML("beforeend", html);
        })
    }
  });
};

loadGenres();
