const clientId = "d333b69db5db43bc9782a89516c0aa86";
const clientSecret = "91ad3ed3f498403eb66d9d4f740a5ee5";

let _data = [];

const _getToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
        },
        body: "grant_type=client_credentials",
    });

    const data = await result.json()
    return data.access_token;
};

const _getGenres = async (token) => {
    const result = await fetch(`https://api.spotify.com/v1/browse/categories/`, {
        method: 'GET',
        headers: {
            Authorization: "Bearer " + token
        }
    });

    const data = await result.json();
    return data.categories.items;
};

const _getPlaylistByGenre = async (token, genreId) => {
    const limit = 10;

    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
        method: 'GET',
        headers: {
            Authorization: "Bearer " + token
        }
    });

    const data = await result.json();
    return data.playlists ? data.playlists.items : [];
};

const _getTracks = async (token, tracksEndPoint) => {
    const limit = 5;

    const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
        method: 'GET',
        headers: {
            Authorization: "Bearer " + token
        }
    });

    const data = await result.json();
    return data.items;
}

const displayGenres = async () => {
    const token = await _getToken();
    const genres = await _getGenres(token);

    _data = await Promise.all(
        genres.map(async (genre) => {
            let playlists = await _getPlaylistByGenre(token, genre.id);
            playlists = await Promise.all(playlists.map(async (playlist) => {
                const playlistTracks = await _getTracks(token, playlist.tracks.href);
                return { ...playlist, playlistTracks };
            }));
            return { ...genre, playlists };
        })
    );
};

const filterGenres = (filterTerm) => {
    let source = _data;

    if (filterTerm) {
        const term = filterTerm.toLowerCase();
        source = source.filter(({ name }) => {
            return name.toLowerCase().includes(term);
        });
    }

    const list = document.getElementById(`genres`);
    list.innerHTML = "";

    const show_playlists = document.getElementById("show_playlists").checked;
    const hide_playlists = document.getElementById("hide_playlists").checked;
    const show_all = document.getElementById("show_all").checked;

    source.map(({ name, icons: [icon], playlists }) => {
        if (playlists.length) {
            let playlistsList = "";
            if (show_playlists || show_all) {
                if (show_all) {
                    playlists = playlists.slice(0, 9);
                }
                playlistsList = playlists.map(({ name, external_urls: { spotify }, images: [image], playlistTracks }) =>
                    getPlaylist(name, spotify, image.url, playlistTracks, show_all)
                ).join(``);
                playlistsList = `<ol>${playlistsList}</ol>`;
            }

            const html = `
            <article>
            <div class="container">
            <div class="genre">
            <img src="${icon.url}" width="${icon.width}" height="${icon.height}" />
            <h2>${name}</h2>
            </div>
            <ol>
                ${playlistsList}
            </ol>
            </div>
            </article>`;

            list.insertAdjacentHTML("beforeend", html);
        }
    });
};

const getPlaylist = (playlist_name, playlist_url, playlist_image_url, playlistTracks, show_all) => {
    let tracksList = '';
    const tracksListHtml = show_all ? `<li class="show_tracks">` : `<li class="hide_tracks">`;
    if (playlistTracks && show_all) {
        tracksList = playlistTracks
            .map(({ track }) => {
                const artists = track.artists
                    .map(({ name }) => name)
                    .join(', ');
                return `<li class="track">${track.name} - ${artists}</li>`
            })
            .join('');
        tracksList = `<ol class="tracks">${tracksList}</ol>`;
    }
    return tracksListHtml + `
        <a href="${playlist_url}" target="_blank">
            <img src="${playlist_image_url}" width="180" height="180" alt="${playlist_name}"/>
        </a>
        ${tracksList}
    </li>`;
}

displayGenres().then(filterGenres);

const onSubmit = (e) => {
    e.preventDefault();
    const term = e.target.term.value;
    filterGenres(term);
};

const onReset = () => {
    document.getElementById("show_all").checked = true;
    filterGenres();
};