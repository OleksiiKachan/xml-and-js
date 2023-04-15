const clientId = `e8f7a40db244452496dce721c4b3d784`;
const clientSecret = `f6565ea2636b40deb9f436afb1c29134`;

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

  const getPlaylistsByGenre = async(token,genreId)=>{
    const limit = 10;
    const result = await fetch(
      `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token }
      }
    );

    const data = await result.json();
    return data.playlists.items;

  };

  const load = async()=>{
    const token = await getToken();
    const genres = await getGenres(token);

    const list = document.getElementById('genres');
    genres.map( async ({id,name,icons:[genreIcon]})=>{
      const playlists = await getPlaylistsByGenre(token,id).then((data)=>
      data.map(({name,images:[image],external_urls:{spotify}})=>
        `<li>
          <a href="${spotify}" target="_blank" >
              <img src="${image.url}"  width="100" height="100" alt="${name}"/>
          </a>
        </li>`

      ).join('')
      );

        const html = `
          <article class="genre-card">      
            <img src="${genreIcon.url}" width="${genreIcon.width}" height="${genreIcon.height}" class="rounded-img" alt="${name}"/>
            <div>
              <h2>${name}</h2>
              <ol>
               ${playlists}
              </ol>
            </div>
          </article>
        `;
        const div = document.createElement('div');
        div.innerHTML = html;
        list.appendChild(div.firstElementChild);
    })
  };

  load();