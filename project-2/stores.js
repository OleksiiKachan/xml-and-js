const clientId = `yogesh-34fb382763a18c3674530a8b110abde38451936862141289308`;
const clientSecret = `37sh-RARf2-fpdmvTQpGk7vDhiJ-pUIhx4_SMVJy`;

let _stores = [];
let token = ``;
const getToken = async () => {
  const result = await fetch("https://api.kroger.com/v1/connect/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    mode: "no-cors",
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  return data.access_token;
};

const getStores = async (token) => {
  const result = await fetch(
    "https://api.kroger.com/v1/locations?filter.limit=99",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    }
  );

  const response = await result.json();
  return response.data;
};

const loadStores = async () => {
  token = `eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJndXJsYWxwcm9kdWN0YXBwLTM3NWM3ZDQ5OGYyOWFlMzMwMGIzOTYzMWI3NzI5YTA3NDM3MDM0MTc4MjIxNzU1OTUzMiIsImV4cCI6MTY4MTg1NTY1MiwiaWF0IjoxNjgxODUzODQ3LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjBiYjhlNDRjLWJjZjktNTgwMy04ZTUzLTc2YjQ1MzZlMTUzNSIsInNjb3BlIjoiIiwiYXV0aEF0IjoxNjgxODUzODUyODgwMTUzMDc1LCJhenAiOiJndXJsYWxwcm9kdWN0YXBwLTM3NWM3ZDQ5OGYyOWFlMzMwMGIzOTYzMWI3NzI5YTA3NDM3MDM0MTc4MjIxNzU1OTUzMiJ9.sn0JWfnuzNvnLd5hOE1-icZp8quCPvqXoxW4_VAiPzUkTkgo3JHZRgyjdvO7hAWKZ4I0vI8vRJ-4rF1LIRj2VHCRUf6zcYJ5Fu-Fhva8DaAtP1wMqWFRVsLX9NjVpCLxE8LZnhIxKJoHl9wZYheX-dJsyIWTOLbDH0h1uGLwD6EzLIlYo6Rhv1SUpfBHaPasYZ4hVC4567B3iBH_YJSS6SvE9h1wgdYQ_xH9TlL30MLbgpIr89jdxlhZwqdcDY_gAGnpCdKDkiprnxZnhRWJknE13j7HrDNjsstD2HUmiwk2YLZH7F5V-IKnj_UtbJWYyrrRC9sf-RWUYckN4zuSjg`; // await getToken();
  _stores = await getStores(token);
};

const renderStores = (filterTerm) => {
  let source = _stores;

  if (filterTerm) {
    const term = filterTerm.toLowerCase();
    source = source.filter(({ name }) => {
      return name.toLowerCase().includes(term);
    });
  }

  const list = document.getElementById(`stores`);
  const html = source.reduce(
    (
      acc,
      {
        locationId,
        name,
        phone,
        address: { addressLine1, city, state, zipCode, county },
        hours: {
          sunday,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
        },
      }
    ) => {
      return (
        acc +
        `   
   <div class="card" onclick="getStoreProducts(\'${locationId}\')">
		<div class="store-info">
			<h2>${name}</h2>
      <p>${addressLine1}, ${city}, ${state} ${county} ${zipCode}</p>
			<p>Phone: ${phone}</p>
			<p>Opening Hours:</p>
			<ul>
      <li>Monday: ${monday.open} AM - ${monday.close} PM</li>
      <li>Tuesday: ${tuesday.open} AM - ${tuesday.close} PM</li>
      <li>Wednesday: ${wednesday.open} AM - ${wednesday.close} PM</li>
      <li>Thursday: ${thursday.open} AM - ${thursday.close} PM</li>
      <li>Friday: ${friday.open} AM - ${friday.close} PM</li>
      <li>Saturday: ${saturday.open} AM - ${saturday.close} PM</li>
      <li>Sunday: ${sunday.open} AM - ${sunday.close} PM</li>
			</ul>
		</div>
	</div>
   `
      );
    },
    ""
  );
  list.innerHTML = html;
};

loadStores().then(renderStores);

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.term.value;
  renderStores(term);
};

const onReset = () => {
  renderStores();
};

const getStoreProducts = (locationId) => {
  window.location.assign(`/products.html?locationId=${locationId}`);
};
