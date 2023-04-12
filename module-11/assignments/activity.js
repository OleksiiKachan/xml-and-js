const clientId = `a518195f50154510b2352b8af93f7d5f`;
const clientSecret = `4bd88fea96984cf38abb6aa2ef907a14`;

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
  //return data.playlists.items;
  return data.playlists ? data.playlists.items : [];
};

const getTracksArtists = async (token, href) => {
  const limit = 5;
  const result = await fetch(
    `${href}?limit=${limit}`,
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
        let playlists = await getPlaylistByGenre(token, genre.id);
        playlists = await Promise.all(playlists.map(async (playlist) => {
            let playlistTracks = await getTracksArtists(token, playlist.tracks.href);
            return { ...playlist, playlistTracks };
        }));
  
        return { ...genre, playlists};
      })
    );
  };

const renderGenres = (filterTerm) => {
    let source = _data;
  
    if (filterTerm) {
      console.log(filterTerm);
      const term = filterTerm.toLowerCase();
      source = source.filter(({ name }) => {
        return name.toLowerCase().includes(term);
      });
    }
  
    const list = document.getElementById(`genres`);
    
    const html = source.reduce((acc, { name, icons: [icon], playlists }) => {
        const playlistsList = playlists
          .map(({ name, external_urls: { spotify }, images: [image], playlistTracks }) => {

                if (playlistTracks) {
                    const tracksList = playlistTracks.map(({ track: { name, artists: [artist] } }) => {
                        return `
                        <p><b>Track Name: </b>${name}, 
                        <b>Artist</b>: ${artist.name}</p>
                        `
                        }).join(``);
                return `
                <li>
                   <a href="${spotify}" alt="${name}" target="_blank">
                     <img src="${image.url}" width="150" height="150"/>
                   </a>
                    <div> 
                     ${tracksList}
                   </div>
                 </li>`
            }
        }
        );
    
        if (playlists) {
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
};

loadGenres().then(renderGenres);

const onSubmit = (event) => {
  event.preventDefault();
  const term = event.target.term.value;
  renderGenres(term);
};

const onReset = () => {
    renderGenres();
  };
  