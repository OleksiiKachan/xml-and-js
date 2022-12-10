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

const displayGenres = async () => {
    const token = await _getToken();
    const genres = await _getGenres(token);

    _data = await Promise.all(
        genres.map(async (genre) => {
            const playlists = await _getPlaylistByGenre(token, genre.id);
            return { ...genre, playlists };
        })
    );
};

const filterGenres = (filterTerm) => {
    const list = document.getElementById(`genres`);
    let source = _data;

    if (filterTerm) {
        const term = filterTerm.toLowerCase();
        source = source.filter(({ name }) => {
            return name.toLowerCase().includes(term);
        });
    }

    const html = source.reduce((acc, { name, icons: [icon], playlists }) => {
        const playlistsList = playlists.map(({ external_urls: { spotify }, images: [image] }) => `
        <a href="${spotify}"><li class="li"><img src="${image.url}" width="100" height="100" /></li></a>`
        ).join(``);

        if (playlists) {
            return (acc + `
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
            </article>`
            );
        }
    }, ``);
    list.innerHTML = html;
};

displayGenres().then(filterGenres);

const onSubmit = (e) => {
    e.preventDefault();
    const term = e.target.term.value;
    filterGenres(term);
};