const clientId = `retailgarima-1a8c9c8398c491d281f7216b5ff9e6931093433083829095985`;
const clientSecret = `3dFq01jpm9kfcydwEKyqo7aYMYHC3ypC1fMihEqg`;

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
  token = `eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJyZXRhaWxnYXJpbWEtMWE4YzljODM5OGM0OTFkMjgxZjcyMTZiNWZmOWU2OTMxMDkzNDMzMDgzODI5MDk1OTg1IiwiZXhwIjoxNjgxODUzNzU2LCJpYXQiOjE2ODE4NTE5NTEsImlzcyI6ImFwaS5rcm9nZXIuY29tIiwic3ViIjoiZDE0ODM0MWEtMDIyYS01MTFkLTljMDMtMWEzODg5Mzc0YWZiIiwic2NvcGUiOiIiLCJhdXRoQXQiOjE2ODE4NTE5NTY0MTE2OTk0MjgsImF6cCI6InJldGFpbGdhcmltYS0xYThjOWM4Mzk4YzQ5MWQyODFmNzIxNmI1ZmY5ZTY5MzEwOTM0MzMwODM4MjkwOTU5ODUifQ.sdzXh67QxMjlKQkSDIeZa6UscOBAKMtNCjq0uVJn1URC0KaL4kQPaDjc8p4g0jteG6oI5IMKVbwiPW7c6KEoAUWungOs8-c9b7wXhVYIPnvrCzfHRThNAlq_8_tDv1-3fG7ARy0EFq3q2HyKkSp64kfvttpl-k0wV07gpcFgve2VI6sPhD6MjkA2f4Y11gG7nP74YtkWL0_PqJAwmsiL59NXgSZLQbl-0DKpacUXNaBJQh3Vclsf3KNKffuYCSKH86ZY4HsG4E4_itcy-u94e2EN0rRqlM2ink8bEbcKlsB9Irlm6DAbyxVoAm6w9qKBCkqTl60fF8CoACq10uEHuw`; // await getToken();
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
