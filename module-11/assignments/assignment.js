const clientId = `a894d1a1531b4a199502ed20c6ac39eb`;
const clientSecret = `81156a75ab9c45b9b706826aa21f2d66`;

let data = []; 

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
    const token = await getToken();   
    const genres = await getGenres(token);
    const list = document.getElementById(`genres`);

    data = await Promise.all(   
      genres.map(async (genre) => {
        const playlists = await getPlaylistByGenre(token, genre.id);

        return { ...genre, playlists };    
      })
    );
  };

  const renderGenres = async (filterTerm) => {
    let source = data;  

    if (filterTerm) {
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

      const tracks = await displayTracksArtists(token, genrePlaylists);

      if (typeof choose === 'undefined') {
        choose = 'with-playlists'; 
      }

      if (playlists && choose === "with-playlists") {   
        return (
          acc +
          `<article class="genre-card">
          <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
                  <ol>
                    ${playlistList}
                  </ol>
                <div style="margin-left: 40px;">
                  ${tracks}
                </div>
          </article>
          `
        );
      }

      else if (playlists && choose === "without-playlists") {    
        return (
          acc +
          `<article class="genre-card">
                  <h3>${name}</h3>
                  <img src="${icon.url}" width="${icon.width}" height="${icon.width}" alt="${name}" style="margin-left: 40px;"/>
                  <h3>Track names and artists</h3>
                <div  style="margin-left: 40px;">
                  ${tracks}
                </div>
          </article>
          `
        );
      }

      else{
        return (acc +``);
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

  const selectPlaylist = (button) => {
    choose = button.id;
    renderGenres();
  };