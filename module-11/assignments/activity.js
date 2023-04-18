const clientId = `279c5f3951c3412e8b8ea3ce4e02ba0e`;
const clientSecret = `e1e69d46b43744dcadf841599adf3201`;

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
  
  const getTracksOfPlaylist = async (token, playlistId, tracks) => {
    const result = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`, 
      {
        method: "GET",
        headers: {Authorization: "Bearer " + token},
      }
    );
  
    const data = await result.json();
    return data.items.map(({track}) => ({
      name: track.name,
      artists: track.artists.map(artist => artist.name),
    }))
    .slice(0, 3);
  };
  
  const displayTracksArtists = async (token, playlists) => {
    const tracksList = [];
    for (const { name, id: playlistId } of playlists) {
      const tracks = await getTracksOfPlaylist(token, playlistId);
      tracksList.push(`
        <h2><u>${name}</u></h2>
        <ul>
          ${tracks
            .map(({ name, artists }) => `
              <li>
                ${name} - ${artists}
              </li>
              `).join('')}
        </ul>
      `);playlists
    }
    return tracksList.join('');
  }

  const loadGenres = async () => {
    const token = await getToken();   // async function, need to save to a promise 
    const genres = await getGenres(token);
    const list = document.getElementById(`genres`);
  
    _data = await Promise.all(   // after map and save to local
      genres.map(async (genre) => {
        const playlists = await getPlaylistByGenre(token, genre.id);
        return { ...genre, playlists };    //... spread objects
      })
    );
  };

  const renderGenres = async (filterTerm) => {
    let source = _data;  
  
    if (filterTerm) {
      console.log(filterTerm);
      const term = filterTerm.toLowerCase();
      source = source.filter(({ name }) => {
        console.log(name.toLowerCase().includes(term));
        return name.toLowerCase().includes(term);
      });
    }
  
    const list = document.getElementById(`genres`);

    const html = await source.reduce(async (_acc, { id, name, icons: [icon], playlists }) => {
      const acc = await _acc;
      const token = await getToken();
      const genrePlaylists = await getPlaylistByGenre(token, id);
      const playlistList = genrePlaylists 
        .map(
          ({ name, external_urls: { spotify }, images: [image] }) => `
          <li>
            <a href="${spotify}" alt="${name}" target="_blank">
              <img src="${image.url}" width="180" height="180"/>
            </a>
          </li>`
        )
        .join(``);
  
      const tracksList = await displayTracksArtists(token, genrePlaylists);
  
      if (playlists) {  
        return (
          acc +
          `<article class="genre-card">
          <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>

                  <ol>
                    ${playlistList}
                  </ol>
                <div >
                  ${tracksList}
                </div>
          </article>
          `
        );
      }
    }, Promise.resolve(''));
    list.innerHTML = html;
  };  

  loadGenres().then(renderGenres);  

  const onSubmit = (event) => {
    event.preventDefault();
  
    const term = event.target.term.value;
  
    renderGenres(term);
  };
  