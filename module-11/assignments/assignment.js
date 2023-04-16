const clientId = `3f1df29bbf24473abca2894516807d9f`;
const clientSecret = `5148a3bdbd614a61949c0fd009cc7393`;

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
  const limit = 5;
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories?locale=sv_US&limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.categories.items;
};

const getPlaylistsByGenre = async (token, genreId) => {
  const limit = 5;
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

const getPlaylistTracks = async (token, playlistId) => {
  const limit = 5;
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  const data = await result.json();
  return data;
};

const load = async (filterValue = "", showPlaylists = "true") => {
  const token = await getToken();
  const genres = await getGenres(token);

  const list = document.getElementById("genres");
  list.innerHTML = "";
  const filteredGenres = genres.filter((g) =>
    g.name.toLowerCase().includes(filterValue)
  );

  filteredGenres.map(async ({ id, name, icons: [genreIcon] }) => {
    const playlists = await getPlaylistsByGenre(token, id);

    const html = `
          <article class="genre-card">      
            <img src="${genreIcon.url}" width="${genreIcon.width}" height="${
      genreIcon.height
    }" class="rounded-img" alt="${name}"/>
            <div>
              <h2>${name}</h2>
              ${
                showPlaylists == "true"
                  ? `<ol>
                ${await Promise.all(
                  playlists.map(
                    async ({
                      name,
                      images: [playlistImage],
                      external_urls: { playlistUrl },
                      id,
                    }) => {
                      const tracks = await getPlaylistTracks(token, id);
                      return `
                    <li>
                      <a href="${playlistUrl}" target="_blank">
                        <img src="${
                          playlistImage.url
                        }" width="180" height="180" class="rounded-img" alt="${name}"/>
                      </a>
                      <ul>
                        ${tracks.items
                          .map(
                            ({
                              track: {
                                name,
                                external_urls: { trackUrl },
                              },
                            }) => `
                          <li class="track-name"><a href="${trackUrl}" target="_blank">${name}</a></li>
                        `
                          )
                          .join("")}
                      </ul>
                    </li>
                  `;
                    }
                  )
                )}
              </ol>`
                  : ""
              }
            </div>
          </article>
        `;
    const div = document.createElement("div");
    div.innerHTML = html;
    list.appendChild(div.firstElementChild);
  });
};

load();

const onSubmit = (event) => {
  event.preventDefault();

  const filterValue = event.target.filter.value;
  showPlaylists = event.target.option.value;
  load(filterValue, showPlaylists);
};
