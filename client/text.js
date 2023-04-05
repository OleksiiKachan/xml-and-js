const clientID = "1cd4b8919a804e35af673e40b29986e6";
const clientSecret = "a5bea6c96ef945ad813e33fb59919bb7";

const getToken = async () => {
    const result = await fetch(`https://accounts.spotify.com/api/token`,{
        method: `POST`,
        body: `grant_type=client_credentials`,
        headers:{
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${(btoa(`${clientID}:${clientSecret}`))}`
        }
    });


    const data = await result.json();
    return data.access_token;
};

const getGenres = async (token) => {
    const result = await fetch(`https://api.spotify.com/v1/browse/categories`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await result.json();
    return data.categories.items;
};

const getPlaylistsByGenre = async(token, genreID) =>{
    const limit= 10;
    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreID}/playlists?limit=${limit}`,
    {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    );
    const data = await result.json();
    return data.playlists.items;
};

const loadGenres = async () => {
    const token = await getToken();
    const genres = await getGenres(token);
    const list = document.getElementById(`genres`);
    genres.map(async ({ name, id, icons: [icon], href }) => {
      const playlists = await getPlaylistsByGenre(token, id);
      const playlistsList = playlists
        .map(
          ({ name, external_urls: { spotify }, images: [image] }) => `
          <li>
            <a href="${spotify}" alt="${name}" target="_blank">
              <img src="${image.url}" width="180" height="180"/>
            </a>
          </li>`
        )
        .join(``);
  
      if (playlists) {
        const html = `
        
        <article class="genre-card">
          <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
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

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

// getToken()
// .then((data) => console.log(data));