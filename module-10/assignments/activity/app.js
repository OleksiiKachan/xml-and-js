const clientId = `bfcb28ab686c4f79afb417f2227ddf13`;
const clientSecret = `7c0b0df9a3c04990b4a70bfb7c33161b`;


const getToken = async () => {
    const result = await fetch ("https://accounts.spotify.com/api/token", {
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
    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
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


const loadGenres = async () =>{
    const token = await getToken();
    const genres = await getGenres(token);

    const list = document.getElementById(`genres`);

    genres.map(async({name , icons: [icon], id}) => {
        const playlists = await getPlaylistByGenre(token, id);
        console.log(playlists);

        if(playlists.length){
            const playlistsList = playlists.map(({name, external_urls: { spotify }, images: [image]}) =>`
            <li><a href="${spotify}"><img src="${image.url}" width="180" height="180" alt="${name}"/></li>`
        )
        .join(``);

        const html = `
        <article>
            <img src = "${icon.url}" width="${icon.width}" height="${icon.height}"/>
            <div>
                <h2>${name}</h2>
                <ol>
                ${playlistsList}
                </ol>
            </div>
        </article>`;

        list.insertAdjacentHTML("beforeend", html);
        }
    });
};

loadGenres();