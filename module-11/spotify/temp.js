const clientId = `0c64de82e6674784bd60a39457e22852`;
const clientSecret = `5ef0627159e6477198f09d04dc35018b`;
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

const getTracks = async (token, href) => {
    const limit = 10;

    const result = await fetch(href + `?limit=${limit}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });

    const data = await result.json();
    return data.items;
};

const loadGenres = async () => {
    const token = await getToken();
    const genres = await getGenres(token);

    _data = await Promise.all(
        genres.map(async (genre) => {
            let playlists = await getPlaylistByGenre(token, genre.id);
            playlists = await Promise.all(playlists.map(async (playlist) => {
                const playlistTracks = await getTracks(token, playlist.tracks.href);
                return { ...playlist, playlistTracks };
            }));

            return { ...genre, playlists };
        })
    );
};

const renderGenres = (filterTerm) => {
    let source = _data;

    if (filterTerm) {
        const term = filterTerm.toLowerCase();
        source = source.filter(({ name }) => {
            return name.toLowerCase().includes(term);
        });
    }

    const list = document.getElementById("genres");
    list.innerHTML = "";

    source.map(({ name, icons: [icon], playlists }) => {

        if (playlists.length) {
            const playlistsList = playlists
                .map(
                    ({ name, external_urls: { spotify }, images: [image], playlistTracks }) => {
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
          return`
          <li class="playlist">
                <a href="${spotify}" alt="${name}" target="_blank">
                    <img src="${image.url}" width="180" height="180" alt="${name}"/>
                </a>
                <ol class="tracks">
                  ${tracksList}
                </ol>
            </li>`;
      })  
      .join("");
      
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
    }
      });
    }
  


loadGenres().then(renderGenres);

const onSubmit = (event) => {
    event.preventDefault();
    const term = event.target.term.value;
    renderGenres(term);
};

const onReset = () => {
    renderGenres();
};