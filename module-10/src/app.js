const clientId = `111524b3028646caaaa5acfd748f7a5e`;
const clientSecret = `229a581847734e57b89e20775f954403`;

const getToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": `application/x-www-form-urlencoded`,
        Authorization: `Basic ${btoa(clientId + ":"+clientSecret)}`,
      },
      body: `grant_type=client_credentials`,
    });
  
    const data = await result.json();
    return data.access_token;
  };

const getGenres = async(token) =>{
    const result = await fetch(
        `https://api.spotify.com/v1/browse/categories?locale=sv_US`,
        {
            method: `GET`,
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }
    )
    const data = await result.json();
    return data.categories.items;
}

const getPlaylistsByCategory = async(toekn,categoryId) =>{
    const limit = 10;

    const result = await fetch (
    `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
    {
        method:`GET`,
        method:{
            Authorization: `Bearer ${token}`,
        }
    }
    );

    const data = await result.json();
    return data.playlists.items;
}

const laod = async()=>{
    const token = await getToken();
    const genres = await getGenres(token);

    const list = document.getElementById(`genre`);

    genres.map(async({name,icons:[icon],id})=>{

        const playlists = await getPlaylistByCategory(toekn, id).then((list) => 
            list.map(
                ({name,external_urls: {spotifyf}, images:[image]}) => `<li>
                <a href="${spotify}" target="_blank"
                <img alt="${name}" src=${iamge.url}" width = "180" height="180"/>
                </a>
                </li>`)
                .join(``));
        console.log(playlists);

        const html = `<article>
            <img src=${icon.url}" width="${icon.width}" height="${icon.height}" alt=${name}"/>
        </a>
        </li>`;

        list.insertAdjacentHTML(`beforeend`,html);
    });
};

load();