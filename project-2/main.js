const CLIENT_ID = `7a17387382119386950a9e364f0d23eb1023687931584143237`;
const CLIENT_SECRET = `IpEieTW0bVcQXGBHguwoKzMv6ilMrlanQMYZbZ9O`;

let _data = [];
let word = '';

let token = `eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJyZXRhaWxtYW5hZ2VtZW50LTdhMTczODczODIxMTkzODY5NTBhOWUzNjRmMGQyM2ViMTAyMzY4NzkzMTU4NDE0MzIzNyIsImV4cCI6MTY4MTg3MDc0NCwiaWF0IjoxNjgxODY4OTM5LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6ImVjNjg4OTU5LTRjZmYtNTBhYi1iOWQ3LTRiOTEwMzIxZDJhNSIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjgxODY4OTQ0Mjk4ODE1MzA4LCJhenAiOiJyZXRhaWxtYW5hZ2VtZW50LTdhMTczODczODIxMTkzODY5NTBhOWUzNjRmMGQyM2ViMTAyMzY4NzkzMTU4NDE0MzIzNyJ9.N92dqsmQlC6CFxy4K03hcIMcwJP1MY5v_rVn9ttT8NrLylnOhQ-NUYw_v8FkBt9CC3ToXluvHMvpddQpEJcldGj3iB9IxGQM2-mw8xRjlJTjwRM-4eg1f-EuX0KoBWbv0o57VnNGrU97j9QCFOg6bFq81gT-ZePrUJqsZ4D3d5XuGAVG9VCbpcSIpK5phlpzBcBrKYIffnYee5lli5wt2qILBmex0YbqNm4q2oijYq4H4gS96rmW3K-r0AX5sBiHLpkpgh4g2Zf5W1a4ZWUUni-xfMJlilsglG9FMUAssgLzSsY3u5em45rXYc5Wilc0-ewKxZ6Cn8WlSjJ62qqB5Q`;

// Get token
const getToken = async () => {
  const result = await fetch("https://api.kroger.com/v1/connect/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    },
    body: "grant_type=client_credentials,scope:product.compact",
  });

  const data = await result.json();
  return data.access_token;
};

// Get products
const getProducts = async (token, prod) => {
  const result = await fetch(
    `https://api.kroger.com/v1/products?filter.term=${prod}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const res = await result.json();
  return res.data;
};

// load products
const loadProd = async(prod) => {
  _data = await getProducts(token, prod);
};

// Render products
const renderProd = async (filterTerm) => {
  
  let resultData = _data;
  const list = document.getElementById(`prod_lst`);

  if (filterTerm) {
    const term = filterTerm.toLowerCase();
    resultData = resultData.filter(({ description }) => {
      return description.toLowerCase().includes(term);
    });
  }

  const html = resultData.reduce((acc, { description, brand, countryOrigin, soldBy, items: [item], categories: [category] }) => {
      return (
        acc + `
        ${_data != undefined  && _data != '' ? 
          `<div class="product-info">
          <div class="all-products-details">
            <h3 class="product-desc">${description}</h3>
            <p class="product-brand">Brand: ${brand}</p>
            <p class="product-size">Size: ${item.size}</p>
            <p class="product-country">Origin: ${countryOrigin}</p> 
            <p class="product-country">Category: ${category}</p>
          </div>` : `<p>Product is not in stock.</p>`
        }
    </div>`);
    },"");
  
  list.innerHTML = html;
};

loadProd('milk').then(renderProd);

const onSubmit = (event) => {
  event.preventDefault();

  word = event.target.term.value;
  loadProd(token, word)
  renderProd(word);  
};