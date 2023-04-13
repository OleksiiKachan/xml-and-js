const clientId = `d567ad34518240018fdb7d096e59223c`;
const clientSecret = `0475bd76bd5d4444871e0ce11369e177`;

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
  return data.playlists ? data.playlists.items : [];
};

const getTracksByPlaylist = async (token, playlistId) => {
  const limit = 5;
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.items ? data.items : [];
};

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  for (const { name, id, icons: [icon], playlists } of genres) {
    const playlists = await getPlaylistByGenre(token, id);
    const tracks = await Promise.all(
      (playlists ?? []).map(async ({ id, name, external_urls: { spotify }, images: [image] }) => {
        const tracks = await getTracksByPlaylist(token, id);
        return { name, external_urls: { spotify }, image, tracks };
      })
    );
    _data.push({ name, icon, playlists: tracks });
  }
};

const returnGenres = (filterTerm) => {
  let source = _data;
  if (filterTerm) {
    console.log(filterTerm);
    source = source.filter(({ name }) => {
      console.log(name.toLowerCase().includes(filterTerm.toLowerCase()));
      return name.toLowerCase().includes(filterTerm.toLowerCase());
    });
  }

  const list = document.getElementById(`genres`);
  const html = source.reduce((acc, { name, icon, playlists }) => {
    const playlistsList = playlists
      .map(({ name, external_urls: { spotify }, image, tracks }) => `
        <li class="playlist-card">
          <a href="${spotify}" target="_blank">
            <img src="${image.url}" alt="${name}" width="${image.width}" height="${image.height}"/>
            <h3>${name}</h3>
          </a>
          <ul class="track-list">
            ${tracks.map(({ track }) => `
              <li class="track-card">
                <h4>${track.name}</h4>
                <p>${track.artists.map(artist => artist.name).join(", ")}</p>
                </li>
                `).join("")}
                </ul>
              </li>
            `).join("");
          
          const genreHtml = `
            <article class="genre-card">
              <img src="${icon.url}" alt="${name}" width="100" height="100"/>
              <h2>${name}</h2>
              <ul class="playlist-list">
                ${playlistsList}
              </ul>
            </article>
          `;
          
          return acc + genreHtml;
        }, "");

        list.innerHTML = html;
        };        
      

        loadGenres().then(returnGenres);

        const onSubmit = (event) => {
          event.preventDefault();
        
          const term = event.target.term.value;
          console.log(term);
        
          returnGenres(term);
        };