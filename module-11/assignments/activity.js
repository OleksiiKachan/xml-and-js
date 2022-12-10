const clientId = `31592d5d4d434fce85868b661a53947a`;
const clientSecret = `a7686e20c1de408ab42ee9323b64c9f8`;

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
  return data.playlists ? data.playlists.items : [];
};

const getTracks = async (token, playlistId) => {
    const limit = 10;

    const result = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
        {
            method: "GET",
            headers: { Authorization: "Bearer " + token },
        }
    );

    const data = await result.json();

    let obj = {
        track_names:  await data.items.map((track_info) => track_info.track.name),
        track_artists:  await data.items.map((track_info) => (track_info.track.artists.map((artist) => artist.name)))
    }
    // console.log(data.items)
    return obj;
};

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  
  _data = await Promise.all(
    genres.map(async (genre) => {
      const playlists = await getPlaylistByGenre(token, genre.id);

      const all_tracks = await Promise.all(playlists.map(async (playlist) => {
        const tracks = await (getTracks(token, playlist.id))
        return display_tracks_info(tracks)
    }))
    // console.log("PLAYLISTS")
    // console.log( playlists)
    // console.log("ALL_TRACKS")
    // console.log(all_tracks)

    const obj = {
        ...genre, 
        playlists: playlists, 
        all_tracks: all_tracks
    }
    // console.log("OBJECT")
    // console.log(obj)
      return obj;
    })
  );

  console.log(_data)
  
};

const renderGenres = (filterTerm) => {
  let source = _data;
  console.log("SOURCE")
  console.log(source)
  if (filterTerm) {
    console.log(filterTerm);
    const term = filterTerm.toLowerCase();
    source = source.filter(({ name }) => {
      console.log(name.toLowerCase().includes(term));
      return name.toLowerCase().includes(term);
    });
  }

  const list = document.getElementById(`genres`);
  console.log("before html")
  const html = source.reduce((acc, { name, icons: [icon], playlists, all_tracks }) => {
    console.log("in html")
    const playlistsList = playlists
      .map(
        ({ name, external_urls: { spotify }, images: [image] }) => `
        <li>
          <a href="${spotify}" alt="${name}" target="_blank">
            <img src="${image.url}" width="180" height="180"/>
          </a>
          ${display(all_tracks)}
        </li>`
      )
      .join(``);

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

function display_tracks_info(tracks) {

    return `${track_name_artists(tracks.track_names, tracks.track_artists)}`


}
function track_name_artists(track_names, track_artists) {
    let name_artists = [];

    for (let i = 0; i < track_names.length; i++) {
        name_artists[i] = `Track name: ${track_names[i]}, Track artists: ${track_artists[i]}<br>`
    }

    return name_artists.join("");
}

function display(all_tracks) {
    let res = all_tracks[0]
    all_tracks.shift();
    return res;
}

loadGenres().then(renderGenres);


const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.term.value;

  renderGenres(term);
};

async function main(){
    const check = await loadGenres();
    console.log("main")
}

main()
