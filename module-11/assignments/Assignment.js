const clientId = `eff0753e18e14898b43ebfe6646c1b7a`;
const clientSecret = `7a0eed57bab94293b0ee4d8051b04b06`;

let _data = [];   
window.choose = ""; 

const getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {    // curl -X
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",    // curl -H
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",    // curl -d
  });

  const data = await result.json();    // data is the json response
  return data.access_token;
};

// Response: (data)
// {
//   "access_token": "BQDBKJ5eo5jxbtpWjVOj7ryS84khybFpP_lTqzV7uV-T_m0cTfwvdn5BnBSKPxKgEb11",
//   "token_type": "Bearer",
//   "expires_in": 3600
// }


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

const getTracksToPlaylist = async (token, playlistId, tracks) => {
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

const displayTracks = async (token, playlists) => {
  const tracksList = [];
  for (const { name, id: playlistId } of playlists) {
    const tracks = await getTracksToPlaylist(token, playlistId);
    tracksList.push(`
      <h2><u>${name}</u></h2>
      <ul>
        ${tracks
          .map(
            ({ name, artists }) => `
            <li>
              ${name} - ${artists}
            </li>
            `)
          .join('')}
      </ul>
    `);playlists
  }
  return tracksList.join('');
}

const loadGenres = async () => {
  const token = await getToken();   // async function, need to save to a promise 
  const genres = await getGenres(token);
  const list = document.getElementById(`genres`);    // load document(html) and get div='genres'

  _data = await Promise.all(   // after map and save to local
    genres.map(async (genre) => {
      const playlists = await getPlaylistByGenre(token, genre.id);

      return { ...genre, playlists };    //... spread objects
    })
  );
};

const renderGenres = async (filterTerm) => {
  let source = _data;
  console.log(choose);

  if (filterTerm) {
    console.log(filterTerm);
    const term = filterTerm.toLowerCase();
    source = source.filter(({ name }) => {
      console.log(name.toLowerCase().includes(term));
      return name.toLowerCase().includes(term);
    });
  }

  const list = document.getElementById(`genres`);

  const html = await source.reduce(async (_acc, { id, name, icons: [icon], playlists}) => {
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

    const tracksList = await displayTracks(token, genrePlaylists);

    console.log(choose);

    if (typeof choose === 'undefined') {
      choose = 'with-playlists'; 
    }

    if (playlists && choose === "with-playlists") {   
      return (
        acc +
        `<article class="genre">
          <table>
            <tr>
              <td style="vertical-align: top;">
                <h3>${name}</h3>
              </td>
              <td>
                <img src="${icon.url}" width="160" height="160" alt="${name}" style="margin-left: 40px;"/>
              </td>
            </tr>
            <tr>
              <td style="vertical-align: top;">
                <h3>Most recent Top 10 </h3>
              </td>
              <td>
                <ol>
                  ${playlistList}
                </ol>
              </td>
            </tr>
            <tr>
              <td style="vertical-align: top;">
                <h3>Track names and artists</h3>
              </td>
              <td>
              <div style="margin-left: 40px;">
                ${tracksList}
              </div>
              </td>
            </tr>
          </table>
        </article>
        `
      );
    }


    else if (playlists && choose === "without-playlists") {    
      return (
        acc +
        `<article class="genre">
          <table>
            <tr>
              <td style="vertical-align: top;">
                <h3>${name}</h3>
              </td>
              <td>
                <img src="${icon.url}" width="160" height="160" alt="${name}" style="margin-left: 40px;"/>
              </td>
            </tr>
            <tr>
              <td style="vertical-align: top;">
                <h3>Track names and artists</h3>
              </td>
              <td>
              <div style="margin-left: 40px;">
                ${tracksList}nameTerm
              </div>
              </td>
            </tr>
          </table>
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


loadGenres().then(renderGenres);    // 2 part functions, filter want to render another dataset, split

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.term.value;

  renderGenres(term);
};

const choosePlaylist = (button) => {
  console.log(button.id);
  choose = button.id;
  renderGenres();
};

