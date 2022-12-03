const clientId = `28f1761a2676429e856d912f636c904b`;
const clientSecret = `6099c3d622534c57ad9e700f9bc8dc2d`;

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
    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=en_CA&limit=5`, {
        method: `GET`,
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    const data = await result.json();
    return data.categories.items;
};

const getPlaylistByGenre = async (token, genreId) => {
    const limit = 10;
    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
        method: `GET`,
        headers: {
            Authorization: "Bearer " + token,
        },
    });
    const data = await result.json();
    return data.playlists.items;
}

const loadGenres = async() => {
    const token = await getToken();
    const genres = await getGenres(token);

    const list = document.getElementById('genres');

    genres.map(async ({name, icons: [icon], id}) => {
        const playlists = await getPlaylistByGenre(token, id);
        const playlistsItem = playlists.map(
            ({ name, external_urls: { spotify }, images: [image] }) => `
        <li>
          <a href="${spotify}" alt="${name}" target="_blank">
            <img src="${image.url}" width="180" height="180"/>
          </a>
        </li>`
        ).join('');
        if(playlists.length){
            const html = `
            <article class="genre_card">
                <img src="${icon.url}" width="${icon.width}" height="${icon.height}" />
                <div>
                <h2>${name}</h2>
                <ol>
                ${playlistsItem}
                </ol>
                </div>
            </article>`;
            list.insertAdjacentHTML(`beforeend`, html);

        }
        });
};

loadGenres();