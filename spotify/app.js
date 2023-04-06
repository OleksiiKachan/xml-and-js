const clientID = "910e59ec1184482d8932ab9e1bc3ff8d";
const clientSecret = "02f3d3633013444f86f33305092dcfb5";

const getToken = async () => {
  const result = await fetch(`https://accounts.spotify.com/api/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      //btoa(): creates a Base64-encoded ASCII string from a binary string
      Authorization: `Basic ${btoa(clientID + ":" + clientSecret)}`,
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  //   return data;
  return data.access_token; //只提取token
};

const getGenres = async (token) => {
  const result = await fetch(
    "https://api.spotify.com/v1/browse/categories?local=sv_SE",
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const data = await result.json();
  return data.categories.items;
};

const getPlaylistByCategoryId = async (token, categoryId) => {
  const limit = 10;
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories/${category_id}/playlists?${limit}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

// getToken().then((data) => console.log(data));

getToken()
  .then((data) => getGenres(data))
  .then((data) => console.log(data))
  .catch((data) => console.log(data));

// const load = async () => {
//   // 用于存储token
//   const token = await getToken();
//   const genres = await getGenres(token);

//   const list = document.getElementById("genre");

//   genres.map(({ name, href, icons: [icon] }) => {
//     console.log()
//     // const html = `<li>
//     //  <a href="${href}">

//     //     </a>
//     // </li>`;

//     // <img src="${icons}" alt=""></img>

//     // 有用的方法, 插入html
//     list.insertAdjacentElement("beforeend", html);
//   });
// };

// load();
