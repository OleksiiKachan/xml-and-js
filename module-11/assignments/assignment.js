const clientId = `8695c265a50f48b78741042b92b1db0a`;
const clientSecret = `de90a7ca149b4880b801634d65bcd71f`;

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
  const limit = 10;
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories?locale=en_US&limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  // const result = await fetch(
  //   `https://api.spotify.com/v1/browse/categories?locale=en_US`,
  //   {
  //     method: "GET",
  //     headers: { Authorization: "Bearer " + token },
  //   }
  // );

  const data = await result.json();
  // console.log(data);
  // console.log(data.categories.items);
  return data.categories ? data.categories.items : [];
  //   return data.categories.items;

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
  //   console.log(data.playlists.items);
  //   return data.playlists.items;
  return data.playlists ? data.playlists.items : [];
};

const getTracksByPlaylist = async (token, playlistUrl) => {
  const limit = 2;
  const result = await fetch(
    `${playlistUrl}?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  // console.log(data.items);
  // console.log(data.items[0].track);
  return data.items ? data.items : [];
};



const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);

  _data = await Promise.all(genres.map(async (genre) => {
    const playlists = await getPlaylistByGenre(token, genre.id);
    const playlistData = await Promise.all(playlists.map(async (playlist) => {
      // console.log(playlist);
      const tracks = await getTracksByPlaylist(token, playlist.tracks.href);
      return { ...playlist, tracks };
    }));

    // console.log(playlists);
    // console.log(playlistData);
    return { ...genre, playlists: { playlistData } };
  }));
  //   console.log(_data);
}


// loadGenres();
// console.log(_data);


const renderGenres = async (term, withPlaylist) => {

  let source = _data;
  // console.log(_data);

  // check term filter
  if (term) {
    source = source.filter(({ name }) => name.toLowerCase().includes(term));
  }

  // check with playlist / without playlist /  no filter
  if (withPlaylist === "with-playlist") {
    source = source.filter(({ playlists }) => playlists.playlistData.length > 0);
  }
  else if (withPlaylist === "without-playlist") {
    source = source.filter(({ playlists }) => playlists.playlistData.length === 0);
  }
  // console.log(source); // genres

  const html = source.reduce((acc, { name, id, icons: [icon], playlists: { playlistData } }) => {
    // console.log(playlistData);
    const playlistsList = playlistData.map(
      ({ name, external_urls: { spotify }, images: [image], tracks }) => {
        // console.log(tracks);
        // const tracksList = tracks.map(( { track: { name, artists: [artist] } }) => {
        const tracksList = tracks.map(({ track }) => {
          // console.log(track.name, track.artists);
          if (track) {
            return `<p>Track Name: ${track.name}, Artist: ${track.artists.map((artist) => artist.name).join(", ")}</p>`
          }
        }).join(``);
        // console.log(tracksList);

        return `
            <li>
              <a href="${spotify}" alt="${name}" target="_blank">
                <img src="${image.url}" width="180" height="180"/>
              </a>
               <div> 
                ${tracksList}
              </div>
            </li>`


      }).join(``);


    // const list = document.getElementById(`genres`);
    if (playlistData) {
      const html = `
        <article class="genre-card">
        <div>
          <h2>${name}</h2>
          <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
        </div>
        <div>        
          <ol>
            ${playlistsList}
          </ol>
        </div>
        </article>`;
      // list.insertAdjacentHTML("beforeend", html);
      // console.log(html);
      return acc + html;
    }


  }, ``);



  const list = document.getElementById(`genres`);
  list.innerHTML = html;

  console.log(`data rendered`)


}



const main = async () => {
  await loadGenres();
  console.log(`data loaded`);
  renderGenres();
}

main();


const onSubmit = async (event) => {
  event.preventDefault();
  // console.log(event);
  // const term = event.target.name.value;
  const term = document.getElementById("input-genre").value
  // console.log(term);
  renderGenres(term, null);
}

const onReset = () => {
  renderGenres();
}

const onSubmitRadio = (event) => {
  event.preventDefault();
  const withPlaylist = document.querySelector('input[name="radio-playlist"]:checked').value;
  // console.log(withPlaylist);
  renderGenres("", withPlaylist);
} 
