const clientId = "d333b69db5db43bc9782a89516c0aa86";
const clientSecret = "91ad3ed3f498403eb66d9d4f740a5ee5";

const _getToken = async () => {

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
        },
        body: "grant_type=client_credentials",
    })

    const data = await result.json();
    return data.access_token;
}

const _getGenres = async (token) => {
    const result = await fetch(`https://api.spotify.com/v1/browse/categories/`, {
        method: 'GET',
        headers: {
            Authorization: "Bearer " + token
        }
    })

    const data = await result.json();

    return data.categories.items;
}

const _getPlaylistByGenre = async (token, genreId) => {
    const limit = 6;

    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
        method: 'GET',
        headers: {
            Authorization: "Bearer " + token
        }
    })

    const data = await result.json();

    return data.playlists ? data.playlists.items : [];
}

const displayGenres = async () => {
    const token = await _getToken();
    const genres = await _getGenres(token);

    const list = document.getElementById('genres');

    genres.map(async ({ name, icons: [icon], id }) => {
        const playlists = await _getPlaylistByGenre(token, id);

        if (playlists.length) {
            const playlistItem = playlists.map(
                ({ name, external_urls: { spotify }, images: [image] }) =>
                    `<li><a href="${spotify}"><img src="${image.url}" width="100" height="100" alt="${name}" /></a</li>`).join(``);

            const html = `
          <article>
            <div class="genre">
            <img src="${icon.url}" width="${icon.width}" height="${icon.height} alt="${name}" />
            <h2>${name}</h2>
            </div>
            <ol>
              ${playlistItem}
            </ol>
            
          </article>`

            list.insertAdjacentHTML('beforeend', html);
        }
    })
}

displayGenres();