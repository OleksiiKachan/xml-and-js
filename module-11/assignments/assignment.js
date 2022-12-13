const clientId = `64cee1a4e6af4ac1928fdc101a255fd7`
const clientSecret = `0431afb4ce78483c9a6930e080718905`

let _data = [];

const getApiToken = async () => {
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
    const result = await fetch("https://api.spotify.com/v1/browse/categories", {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    const data = await result.json();
    return data.categories.items;
};

const getPlaylistByGenre = async (token, genreId) => {
    const limit = 9;

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
    const limit = 5;

    const result = await fetch(tracksUrl + `?limit=${limit}`, {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
    });

    const data = await result.json();
    return data.items;
};

const loadGenres = async () => {
    const token = await getApiToken();
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
    console.log(source);
    if (filterTerm) {
        const term = filterTerm.toLowerCase();
        source = source.filter(({ name }) => {
            return name.toLowerCase().includes(term);
        });
    }

    const list = document.getElementById("genres");
    list.innerHTML = "";


    const opt_genres = document.getElementById("select_genres").checked;
    const opt_tracklists = document.getElementById("select_tracklists").checked;
    const opt_all = document.getElementById("select_all").checked;
    source.map(({ name, icons: [icon], playlists }) => {
        if (playlists.length) {
            let playlistsList = '';
            if (opt_tracklists || opt_all) {
                if (opt_all){
                    playlists = playlists.slice(0, 9);
                }
                playlistsList = playlists
                    .map(({ name, external_urls: { spotify }, images: [image], playlistTracks }) => 
                            getPlaylist(name, spotify, image.url, playlistTracks, opt_all))
                    .join("");
                playlistsList = `<ol>${playlistsList}</ol>`;
            }
            const article_class = opt_genres ? 'genre_no_playlists' : 'genre_with_playlists';
            const html = `
            <article>
                <div>
                    <h2>${name}</h2>
                    <img id="mainImage" src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
                </div>
                <ol>
                    ${playlistsList}
                </ol>
            </article>`;

            list.insertAdjacentHTML("beforeend", html);
        }
    });
}

const getPlaylist = (playlist_name, playlist_url, playlist_image_url, playlistTracks, opt_all) => {
    let tracksList = '';
    const tracksListHtml = opt_all ? `<li class="playlist_with_tracks">` : `<li class="playlist_no_tracks">`;
    if (playlistTracks && opt_all) {
        tracksList = playlistTracks
            .map(({ track }) => {
                const artists = track.artists
                    .map(({ name }) => name)
                return `<div class="track">${track.name} - ${artists}</div>`
            })
            .join('');
        tracksList = `<div class="tracks">${tracksList}</div>`;
    }
    return tracksListHtml + `
        <a href="${playlist_url}" target="_blank">
            <img class="track__img" src="${playlist_image_url}" width="180" height="180" alt="${playlist_name}"/>
        </a>
        ${tracksList}
    </li>`;
}

loadGenres().then(renderGenres);

const onSubmit = (event) => {
    event.preventDefault();
    const term = event.target.term.value;
    renderGenres(term);
};

const onReset = () => {
    renderGenres();
};