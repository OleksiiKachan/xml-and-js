const clientId = `yogesh-34fb382763a18c3674530a8b110abde38451936862141289308`;
const clientSecret = `37sh-RARf2-fpdmvTQpGk7vDhiJ-pUIhx4_SMVJy`;

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
  let token = `eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJndXJsYWxwcm9kdWN0YXBwLTM3NWM3ZDQ5OGYyOWFlMzMwMGIzOTYzMWI3NzI5YTA3NDM3MDM0MTc4MjIxNzU1OTUzMiIsImV4cCI6MTY4MTg1NTczNywiaWF0IjoxNjgxODUzOTMyLCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjBiYjhlNDRjLWJjZjktNTgwMy04ZTUzLTc2YjQ1MzZlMTUzNSIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjgxODUzOTM3NzgyMDI4NTg0LCJhenAiOiJndXJsYWxwcm9kdWN0YXBwLTM3NWM3ZDQ5OGYyOWFlMzMwMGIzOTYzMWI3NzI5YTA3NDM3MDM0MTc4MjIxNzU1OTUzMiJ9.frfQ0SxERfoLu3KeBNd0sbanGorJDVewxPn0EOAYESWq9LBuRq4dJb4B3hNOuZh2pKu2bdeJfCVGbpXDumnqtHtpE5oh3hDDNUOxaAz-eVroyiZ-5t85RPJhCSJLq4AN9K2dp_9x6SW8O4ezLh6KNnOIy0bJaADvmcRENXqgvQH1PCfIDOGCeP9p7a6zRWM1XoWaMBgJsu4Y8rMs1LbBBK8t-zVYJ95n3frxGG2Jl4XZlOD4wgMwo_u1bqMFYKp5xOUdxneUOjxMioXpFuL5cJBeVNkrkhvtT3RxxHawgfH0GpMopBmPsqn-LR7es6ZYQvNgX050b7zHf9HrmpeZKQ`; // await getToken();
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
