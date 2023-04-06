const clientId = '4356b32ff71e45b9850314c98bb85449';
const clientSecret = '86ea266d2c214468892eb74abb31a837';

const getToken = async () => {
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    },
  });

  const data = await result.json();
  return data.access_token;
};

const getGenres = async (token) => {
  const result = await fetch('https://api.spotify.com/v1/browse/categories?country=BR&locale=br', {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + token },
  });

  const data = await result.json();
  return data.categories.items;
};

const getPlaylistByGenre = async (token, genreId, limit = 10) => {
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
    {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    },
  );

  const data = await result.json();
  return data.playlists.items;
};

const load = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  const list = document.getElementById('genres');

  genres.map(async ({ id, name, icons: [icon] }) => {
    const playlists = await getPlaylistByGenre(token, id);
    const playlistsList = playlists
        .map(
          ({ name, images: [image], external_urls: { spotify } }) =>
            `<li>
                <a href="${spotify}" alt="${name}" target="_blank">
                    <img src="${image.url}" width="180" height="180" alt="${name}" />
                </a>
                <a href="${spotify}" alt="${name}" target="_blank">${name}
                <svg width="12px" height="12px" viewBox="0 0 24 24" style="cursor:pointer"><g stroke-width="2.1" stroke="#666" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 13.5 17 19.5 5 19.5 5 7.5 11 7.5"></polyline><path d="M14,4.5 L20,4.5 L20,10.5 M20,4.5 L11,13.5"></path></g></svg>
                </a>
            </li>`,
        )
        .join('');

    const html = `<article class="genre-card">
        <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}" />
        <div>
            <h2>${name}</h2>
            <ol>${playlistsList}</ol>
        </div>
    </article>`;

    list.insertAdjacentHTML('beforeend', html);
  });
};

load();
