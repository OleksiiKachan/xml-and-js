const clientID = `628469d1f3e74931bac25b8c21e06060`;
const clientSecret = `9ac57a2035a5472ab90125ae2310e84e`;

let _data = [];
const getToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(clientID + ":" + clientSecret),
        },
        body: "grant_type=client_credentials",

        
      });
const data = await result.json();
      //console.log(data);
      return data.access_token;
    };



const getGenres = async (token) => {
    const result = await fetch(
      `https://api.spotify.com/v1/browse/categories`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
  
    const data = await result.json();

    //console.log(data);
    return data.categories.items;
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
    return data.playlists.items;
  };

  
const getTracksFromPlaylist = async (token, tracksUrl) => {
  const limit = 3;

  const result = await fetch(tracksUrl + `?limit=${limit}`, {
    method: "GET",
    headers: { Authorization: "Bearer " + token },
  });

  const data = await result.json();
  //console.log(data);
  return data.items;
};




const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);

  _data = await Promise.all(
      genres.map(async (genre) => {
          let playlists = await getPlaylistByGenre(token, genre.id);
          playlists = await Promise.all(playlists.map(async (playlist) => {
              const playlistTracks = await getTracksFromPlaylist(token, playlist.tracks.href);
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
        .map( ({ name, external_urls: { spotify }, images: [image], playlistTracks }) => {
          
          let tracksList = '';
          if (playlistTracks) {
            tracksList = playlistTracks
              .map(({ track }) => {
                const artists = track.artists
                  .map(({ name }) => name)
                  .join(', ');
                return `<dl><dt>${artists}   </dt>  <dd>${track.name}</dd></dl>`})
              .join('');
          }
          return `
            <li class="playlist">
                <a href="${spotify}" target="_blank">
                    <img src="${image.url}" width="180" height="180" alt="${name}"/>
                </a>
                <ol>
                  ${tracksList}
                </ol>
            </li>`;
        })
        .join("");
       
          const html = `
            <article>
                <div>
                    <h2>${name}</h2>
                    <img src="${icon.url}" width="${icon.width}" height="${icon.height}"/>
                </div>
                <ol class="playlists">
                    ${playlistsList}
                </ol>
            </article>`;

         list.insertAdjacentHTML("beforeend", html);
        
    }
  });
};

loadGenres().then(renderGenres);

const onSubmit = (event) => {
  event.preventDefault();
  const term = event.target.term.value;
  renderGenres(term);
};