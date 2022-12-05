const clientId = `b4621a5afc324db68d001d2b1bcb638b`;
const clientSecret = `ea4eec3c3b4c4be4823ebc6606e15c59`;

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
const loadGenres = async () => {
    const token = await getToken();
    const genres = await getGenres(token);
    const list = document.getElementById(`genres`);

    genres.map(async ({ name, icons: [icon], href }) => {
      const html=
         `<artical>
         <img src="${image.url}" width="${100}" height="${icon.height} alt="${icon.alt}"/>
         <h2>${name}</h2>
           
          </artical>`
        list.insertAdjacentHTML("beforeend", html);
      });
  };
  getToken();
  loadGenres();



