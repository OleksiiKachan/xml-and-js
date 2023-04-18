const clientId = `retailgarima-1a8c9c8398c491d281f7216b5ff9e6931093433083829095985`;
const clientSecret = `3dFq01jpm9kfcydwEKyqo7aYMYHC3ypC1fMihEqg`;

const params = new URLSearchParams(window.location.search);

// Get the value of a specific parameter
const locationId = params.get("locationId");
let products = [];
let productName = `Milk`;

//Method to get access token
const getToken = async () => {
  const result = await fetch("https://api.kroger.com/v1/connect/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials,scope:product.compact",
  });

  const data = await result.json();
  return data.access_token;
};

//Method to get the products
const getProducts = async (token) => {
  const result = await fetch(
    `https://api.kroger.com/v1/products?filter.term=${productName}&filter.locationId=${locationId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const response = await result.json();
  return response.data;
};

//Method to load the products
const loadProducts = async () => {
  let token = `eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJyZXRhaWxnYXJpbWEtMWE4YzljODM5OGM0OTFkMjgxZjcyMTZiNWZmOWU2OTMxMDkzNDMzMDgzODI5MDk1OTg1IiwiZXhwIjoxNjgxODUzNjg1LCJpYXQiOjE2ODE4NTE4ODAsImlzcyI6ImFwaS5rcm9nZXIuY29tIiwic3ViIjoiZDE0ODM0MWEtMDIyYS01MTFkLTljMDMtMWEzODg5Mzc0YWZiIiwic2NvcGUiOiJwcm9kdWN0LmNvbXBhY3QiLCJhdXRoQXQiOjE2ODE4NTE4ODU4MTA3MTI2MzYsImF6cCI6InJldGFpbGdhcmltYS0xYThjOWM4Mzk4YzQ5MWQyODFmNzIxNmI1ZmY5ZTY5MzEwOTM0MzMwODM4MjkwOTU5ODUifQ.EnQaGwAcWSfybAm9vnHB9B1JMTyb43e8DZf8-xF6aKVM3jKYmmzcNIhvMrFgv76H7BTu5oafdU5lwssT3On-Tu-z7j48XRcXGwXUo_dUSW2a8aR4HQXemFiNCgPGTC2ZV6Eualelt5h8OKan0p8gCSoQsNLnSuDg-tqNWxQOlOO1Bg-j7V1DFQlk09SQN3Q7PH877ah2h9t9SCMNqk1TwVQ9ozSuYueNJwkqav5aRT1DhwLKqZOynugiOuk3aDN6LMJtuWWhU316Uh-giI6_7pWF8g9ULP5HJXgVsF42a_w8jMqpjnhdYXvW8vJt4AVLhQR3r7T6ppN-lAtvU_LiFg`; // await getToken();
  products = await getProducts(token);
};

//Method to generate html dynamic html
const renderProducts = (filterTerm) => {
  let source = products;

  if (filterTerm) {
    const term = filterTerm.toLowerCase();
    source = source.filter(({ description }) => {
      return description.toLowerCase().includes(term);
    });
  }
  const list = document.getElementById(`products-list`);
  const html = source.reduce(
    (
      acc,
      { description, brand, images, items: [item], soldBy, countryOrigin }
    ) => {
      const productImage = images
        .filter((x) => x.perspective === `front`)[0]
        .sizes.filter((x) => x.size === `small`)[0].url;
      return (
        acc +
        `
    <div class="product-card">
      <div class="product-image">
        <img src="${productImage}" alt="Product Image">
      </div>
     <div class="product-details">
    <h3 class="product-name">${description}</h3>
    <p class="product-brand">Brand: ${brand}</p>
    <p class="product-size">Size: ${item.size}</p>
    <p class="product-place">Origin: ${countryOrigin}</p>
    <p class="product-price">$${item.price.regular}</p>
    </div>
   </div>
     `
      );
    },
    ""
  );
  list.innerHTML = html;
};

loadProducts().then(renderProducts);

const onSubmit = async (event) => {
  event.preventDefault();

  const term = event.target.term.value;
  if (productName != event.target.category.value) {
    productName = event.target.category.value;
    await loadProducts();
  }
  renderProducts(term);
};

const onReset = () => {
  renderProducts();
};

const redirectStores = () => {
  window.location.assign(`/stores.html`);
};
