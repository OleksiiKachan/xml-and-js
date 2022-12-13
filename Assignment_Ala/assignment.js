const clientId = `ee16a4609beb48a297c451f707020470`;
const clientSecret = `601d610f90914ab2bd25f467c6b17dce`;

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
    //console.log(data);
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
    //console.log(data);
    return data.playlists.items;
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
    console.log(data);    
    let obj = {
        track_names: await data.items.map((track_info) => track_info.track.name),
        track_artists: await data.items.map((track_info) => (track_info.track.artists.map((artist) => artist.name)))
    }
    return obj;
   
};


const loadGenres = async () => {
    const token = await getToken();
    const genres = await getGenres(token);
    

    genres.map(async ({ name, id, icons: [icon], href }) => {
        
        const playlists = await getPlaylistByGenre(token, id);
        const all_tracks = await Promise.all(playlists.map(async (playlist) => { 
            const tracks = await (getTracks(token, playlist.id))
            return display_tracks_info(tracks)
        }))

        const playlistsList = playlists.map(({ name, external_urls: { spotify }, images: [image] }) => 
        `<li>
          <a href="${spotify}" alt="${name}" target="_blank">
            <img src="${image.url}" width="180" height="180"/>
          </a>

          <div class="tracks">${display(all_tracks)}</div>
        </li>`
            ).join(``);

        
        if (playlists) {
            const html = `
      <article class="genre-card">
        <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
        <div>
          <h2>${name}</h2>
          <ol>
            ${playlistsList}
          </ol>
        </div>
      </article>`;
            const list = document.getElementById(`genres`);
            list.insertAdjacentHTML("beforeend", html);
        }
    });







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





loadGenres();
