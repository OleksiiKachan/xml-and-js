const clientId = `ee16a4609beb48a297c451f707020470`;
const clientSecret = `601d610f90914ab2bd25f467c6b17dce`;

const getToken = async () => { //In order to make successful Web API requests your app will need a valid access token.
  const result = await fetch("https://accounts.spotify.com/api/token", 
  {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });
  
  //result burada response tipinde dönüyor. bunu json() metodu ile objeye çeviriyoruz.

  const data = await result.json();//json() burada metot, resolves with the result of parsing the response body text as JSON.
 
console.log("getToken fonksiyonu ile valid access token alıyoruz.");
console.log(result);
console.log(data);
return data.access_token;

};

const getGenres = async (token) => { // to see the categories, it is the same Genres and categories.
  const result = await fetch( `https://api.spotify.com/v1/browse/categories?locale=sv_US`, //fetch string, we need to have object
     //after ?, eveyrthing is parameters, 
    //The base URI for all Web API requests is https://api.spotify.com/v1
    {
      method: "GET", //it is API documentations, get or post. GET, all your paremeters open parsely
      headers: { Authorization: "Bearer " + token },
    }
  );
    //bu satıra console.log(data) yazarak datanın ne oldğunu kontrol et.
  
 
 
  const data = await result.json(); // stringi object convert etmek için .json yazdık
  console.log("getGenres fonksiyonu ile kategorileri alıyoruz.")
  console.log(result);
  console.log(data);
  return data.categories.items; //specifly calling API, spotify documentation
};

const getPlaylistByGenre = async (token, genreId) => { // we have to specify which category? token is a part of authorization
  const limit = 10;                                     // token means a one time, temporarily password

  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );
      
  //bu satıra console.log(data) yazarak datanın ne oldğunu kontrol et. 
  const data = await result.json();

  console.log("getPlaylistByGenre her playlist içinde items arrayi var");
  console.log(data);

  return data.playlists.items; //specifly calling API, spotify documentation, 


};                              //we are saving in the data, it is normally string to change it json , to convert object

// convert from string to object
const loadGenres = async () => {
  const token = await getToken(); //atanticate
  const genres = await getGenres(token);  //call API
  const list = document.getElementById(`genres`); //Display data, we are calling div from html.
 
  //Promise all kullandığımız zaman 1 den fazla promise dönüyor ve biz her bir promise tek tek almak için promise all diyoruz.
  //promise all convert all promise to one pormise
  //console.log(genres);  
 
 
  genres.map(async ({ name, id, icons: [icon], href }) => { //we have many genres, categories, we need to have list.
  //icons are also array, but we take only first icon
    
    const playlists = await getPlaylistByGenre(token, id); //id belong to genres again., küçük resimler playlist
    
    const playlistsList = playlists //the list of playlist is a just list, playlistlis is a html list just a code
      .map(                         
        ({ name, external_urls: { spotify }, images: [image] }) => 
        `<li>
          <a href="${spotify}" alt="${name}" target="_blank">
            <img src="${image.url}" width="180" height="180"/>
          </a>
        </li>`  //what browser is showing us
      )
      .join(``);

      //console.log(playlists); //playlist ne olduğunu kontrol et.

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

      list.insertAdjacentHTML("beforeend", html); // bu satır diğer uygulamalarda farklı
    }
  });
};

loadGenres();
//common prompt, http-server buradan komutları çalıştır
