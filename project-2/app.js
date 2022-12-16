// const clientId = `a5f261df31334b54bbdaf6a8cf18327d`;
// const clientSecret = `72dce1229f33421988f780a020f146cb`;

const clientId = `UZ5PlChLW20Qab1RbzIHreg3gmscH65QXC5KZPSbERweU8iRQi`;
const clientSecret = `PrN1MCTZrVTc0PUgbNkENRD6d6gCnU61Jp812kyC`;


const getToken = async () => {
  const result = await fetch("https://api.petfinder.com/v2/oauth2/token", {
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

const getTypes = async (token) => {
  const result = await fetch(
    `https://api.petfinder.com/v2/types`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.types
  ;
};

const getBreedByType = async (token, href) => {
  const limit = 10;

  const result = await fetch(
    `https://api.petfinder.com${href}?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.breeds;
};

const loadGenres = async () => {
  const token = await getToken();
  const types = await getTypes(token);
  const list = document.getElementById(`genres`);
  types.map(async ({ name, type}) => {
    const breeds = await getBreedByType(token, type);
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

//loadGenres();
const main = async () => {
    const token = await getToken();
    const types = await getTypes(token);
    const list = document.getElementById(`genres`);
    types.map(async ({ name, _links, genders}) => {
      const breed = await getBreedByType(token, _links.breeds.href);
      //console.log(breed);
      const BreedList = breed.map(({ name }) => `<ul>
           <li>
             ${name}
           </li>
           </ul>`
         )
         .join(``);
      if (BreedList) {
      const html = `
      <article class="genre-card">
        <div>
          <h2>${name}</h2>
          <h3>Genders:</h3>
          <ul>${genders}</ul>
          <h3>Breeds:</h3>
          <ol>
          
            ${BreedList}
          </ol>
        </div>
      </article>`;

      list.insertAdjacentHTML("beforeend", html);
     }
    });

}

main();
