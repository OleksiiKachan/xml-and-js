const clientId =  `45beaf9182f24b589ac8cf6931159315`;
const clientSecret = `7f1ee0643b7d46aeae55cddb160b4f9d`;

const getToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token",
                               {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded",
                                    Authorization: `Basic ${btoa(clientId + ":" + clientSecret)}`,
                                },
                                body: "grant_type=client_credentials"
                               });
    
    const data = await result.json();
    return data.access_token;
};

const getGenres = async(token) => {
    const result = await fetch(
        `https://api.spotify.com/v1/browse/categories?locale=sv_SE`,
        {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
        }
    );

    const data = await result.json();
    console.log(data.categories);
    return data.categories.items;
};

const getPlaylistByGenre = async(token, genreID) => {
    const limit = 10;
    const result = await fetch(
        `https://api.spotify.com/v1/browse/categories/${genreID}/playlists?limit=${limit}`, 
        {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
        }
    );

    const data = await result.json();
    
    return data.playlists.items;  
};

const getPlaylistTracks = async(token, playlistID) => {
    const limit = 1;
    const result = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistID}/tracks?limit=${limit}`,
        {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
        }
    );

    const data = await result.json();

    return data.items;
};

const loadGenres = async() => {
    const token = await getToken();
    const genres = await getGenres(token);
    const list = document.getElementById(`genres`);
    genres.map(async ({name,id,icons:[icon], href}) => {
        const playlists = await getPlaylistByGenre(token, id);
        const playlistsList = await Promise.all(playlists.map(async ({name, external_urls: {spotify}, images:[image], tracks: {href: tracksHref}}) => {
            const tracksResult = await fetch(tracksHref, {
                method: "GET",
                headers: {Authorization: `Bearer ${token}`},
            });

            const tracksData = await tracksResult.json();
            const tracksList = tracksData.items.map(({track: {name, artists}}) => `
                <p><b>
                    ${name} - ${artists.map(artist => artist.name).join(", ")}
                </p></b>
            `).join("");

            return `
                <li>
                    <a href="${spotify}" alt="${name}" target="_blank">
                        <img src="${image.url}" width="180" height="180"/>
                    </a>
                    <ul id="track_list">
                        ${tracksList}
                    </ul>
                </li>
            `;
        }));

        if(playlists) {
            const html = `
                <article class="genre-card">
                    <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
                    <div>
                        <h2>${name}</h2>
                        <ul>
                            ${playlistsList.join("")}
                        </ul>
                    </div>
                </article>
            `;
            list.insertAdjacentHTML("beforeend", html);
        }
    });
}

loadGenres();
