const clientId = `a518195f50154510b2352b8af93f7d5f`;
const clientSecret = `4bd88fea96984cf38abb6aa2ef907a14`;

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
  const limit = 15;
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories?locale=sv_US&limit=${limit}`,
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
  return data.playlists ? data.playlists.items : [];
};
const getTrackByPlaylist = async (token, tracks) => {
    const limit = 2;

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

        const playListWithTracks = await Promise.all(
            playlists.map(async (playlist) => {
                if(playlist){
                    const tracks = await getTrackByPlaylist(token,playlist.tracks);
                    return {...playlist, tracks};
                }
            })
        );

        return { ...genre, playlists: playListWithTracks };
      })
    );
};

const renderGenres = (filterTerm, radioButton) => {
    let source = _data;

    if (filterTerm) {
      console.log(filterTerm);
      const term = filterTerm.toLowerCase();
      source = source.filter(({ name }) => {
        return name.toLowerCase().includes(term);
      });
    }

    const list = document.getElementById(`genres`);

    if (radioButton=="show") {

    const html = source.reduce((acc, { name, icons: [icon], playlists: playListWithTracks }) => {
        const playlistsList = playListWithTracks
        .map(({ name, external_urls: { spotify }, images: [image],tracks }) => {
            
                if (tracks) {
                    const tracksList = tracks.map(({track})=> {
                        if(track){
                            return`
                            <p><b>Track Name:</b> ${track.name}</p>
                            <p><b>Artist:</b> ${track.artists.map(artist => artist.name)}</p><br>`
                        }}).join(``);

                    return `
                    <li>
                    <a href="${spotify}" alt="${name}" target="_blank">
                        <img src="${image.url}" width="180" height="180"/>
                    </a>
                    <div>
                      ${tracksList}
                    </div>
                    </li>`
                }
            }
        )
        .join(``);

        if (playListWithTracks) 
        {
            return (
                acc +
                `
            <article class="genre-card">
            <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
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
    list.innerHTML = html;
    } else {

        const html = source.reduce((acc, { name, icons: [icon]}) => {
            return (
                acc +
                `
            <article class="genre-card">
            <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
            <div>
                <h2>${name}</h2>
            </div>
            </article>`
            );

        }, ``);
        list.innerHTML = html;
    }
};

loadGenres().then(()=>{
    renderGenres(null,"show");
});

const onSubmit = (event) =>{
    event.preventDefault();
    const term = event.target.term.value;
    const radioButton = event.target.radioButton.value;
    renderGenres(term,radioButton);
};

const onReset = () => {
    renderGenres(null,"show");
};
