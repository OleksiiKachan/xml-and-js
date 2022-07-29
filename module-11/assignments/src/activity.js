const clientId = `7b9414905af941b79d8500a6883813bb`;
const clientSecret = `df92b95367bb4dad8117e85f74113ce4`;

let _data = []

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
  //console.log(data.playlists.items)
  return data.playlists ? data.playlists.items : [];
};
const getTrackByPlaylist = async (token, tracks) => {
    const limit =2;
  
    const result = await fetch(
      `${tracks.href}?limit=${limit}`,
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
  
    _data = await Promise.all(
      genres.map(async (genre) => {
        const playlists = await getPlaylistByGenre(token, genre.id);
        
        const loadedplaylists = await Promise.all(
            playlists.map(async (playlist) => {
                const tracks = await getTrackByPlaylist(token,playlist.tracks);
                return {...playlist, tracks};
            })
        );

        return { ...genre, playlists:loadedplaylists };
      })
    );
};

const renderGenres = (filterTerm) =>{
    let source = _data;

    if (filterTerm) {
        const term = filterTerm.toLowerCase();
        source = source.filter(({ name }) => 
          name.toLowerCase().includes(term)
        );
    };

    const html = source.reduce((acc, { name, playlists:loadedplaylists }) => {
        const playlistsList = loadedplaylists
          .map(
            ({ name, external_urls: { spotify }, images: [image],tracks }) => {
                const tracksList = tracks.map(({track})=>{
                    if(track){
                        return`
                        <p>Track Name: ${track.name}</p>
                        <p>Artist: ${track.artists.map(artist => artist.name)}</p><br>`
                    }
                }).join(``);

                return `
                <li>
                  <a href="${spotify}" alt="${name}" target="_blank">
                    <img src="${image.url}" width="180" height="180"/>
                  </a>
                  <div>${tracksList}</div>
                </li>`
            }
          )
          .join(``);
    
        if (loadedplaylists) {
          return (
            acc +
            `
          <article class="genre-card">
            <div>
              <h2>${name}</h2>
              <ol>
                ${playlistsList}
              </ol>
            </div>
          </article>`
          );
        }
    }, ``);

    const list = document.getElementById(`genres`);

    list.innerHTML = html;
};

loadGenres().then(()=>{
    renderGenres();
});

const onSubmit = (event) =>{
    event.preventDefault();

    const term = event.target.term.value;

    renderGenres(term);
};


