const clientId = `db179a5dd1254cc781f5ef9469f2017f`;
const clientSecret = `09d6d1509cbb4bc5969ed47659620cfa`;

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

const loadGenres = async () => {
    const token = await getToken();
    const genres = await getGenres(token);

    const list = document.getElementById("genres");

    genres.map(async ({ name, id, icons: [icon] }) => {
        const playlists = await getPlaylistByGenre(token, id);

        if (playlists.length) {
            const playlistsList = playlists
                .map(
                    ({ name, external_urls: { spotify }, images: [image] }) => `
                <li>
                    <a href="${spotify}" target="_blank">
                        <img src="${image.url}" width="180" height="180" alt="${name}"/>
                    </a>
                </li>`
                )
                .join("");

            const html = `
            <article>
                <div>
                    <h2>${name}</h2>
                    <img src="${icon.url}" width="${icon.width}" height="${icon.height}"/>
                </div>
                <ol>
                    ${playlistsList}
                </ol>
            </article>`;

            list.insertAdjacentHTML("beforeend", html);
        }
    });
};

loadGenres();
