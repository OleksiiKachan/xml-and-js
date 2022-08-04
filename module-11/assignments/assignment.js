const clientId = `8695c265a50f48b78741042b92b1db0a`;
const clientSecret = `de90a7ca149b4880b801634d65bcd71f`;

const getGenres = async (token) => {
  const limit = 10;
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories?locale=en_US&limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );
  const data = await result.json();
  return data.categories ? data.categories.items : [];
};
let _data = [];
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
const getTracksByPlaylist = async (token, playlistUrl) => {
  const limit = 2;
  const result = await fetch(
    `${playlistUrl}?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );
  const data = await result.json();
  return data.items ? data.items : [];
};
const getPlaylistByGenre = async (token, genreId) => {
  const limit = 4;
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );
  const data = await result.json();
  return data.playlists ? data.playlists.items : [];
};
const onSubmit = async (event) => {
  event.preventDefault();
  const term = document.getElementById("input-genre").value
  renderGenres(term, null);
}
const onSubmitRadio = (event) => {
  event.preventDefault();
  const withPlaylist = document.querySelector('input[name="filterByRadioButton"]:checked').value;
  renderGenres("", withPlaylist);
} 
const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);

  _data = await Promise.all(genres.map(async (genre) => {
    const playlists = await getPlaylistByGenre(token, genre.id);
    const playlistData = await Promise.all(playlists.map(async (playlist) => {
      const tracks = await getTracksByPlaylist(token, playlist.tracks.href);
      return { ...playlist, tracks };
    }));
    return { ...genre, playlists: { playlistData } };
  }));
}
const renderGenres = async (term, withPlaylist) => {
  let source = _data;
  if (term) {
    source = source.filter(({ name }) => name.toLowerCase().includes(term));
  }
  if (withPlaylist === "inPlaylist") {
    source = source.filter(({ playlists }) => playlists.playlistData.length > 0);
  }
  else if (withPlaylist === "notInPlaylist") {
    source = source.filter(({ playlists }) => playlists.playlistData.length === 0);
  }
  const html = source.reduce((acc, { name, id, icons: [icon], playlists: { playlistData } }) => {
    const playlistsList = playlistData.map(
      ({ name, external_urls: { spotify }, images: [image], tracks }) => {
        const tracksList = tracks.map(({ track }) => {
          if (track) {
            return `<p>Track Name: ${track.name}, Artist: ${track.artists.map((artist) => artist.name).join(", ")}</p>`
          }
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
      }).join(``);
    if (playlistData) {
      const html = `
        <article class="genre-card">
        <div>
          <h2>${name}</h2>
          <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
        </div>
        <div>        
          <ol>
            ${playlistsList}
          </ol>
        </div>
        </article>`;
      return acc + html;
    }
  }, ``)
  const list = document.getElementById(`genres`);
  list.innerHTML = html;
  console.log(`data rendered`)
}
const main = async () => {
  await loadGenres();
  console.log(`data loaded`);
  renderGenres();
}
main();
