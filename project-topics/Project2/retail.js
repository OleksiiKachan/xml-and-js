var token = 'cmV0YWlsLTMzMzhiOTM2MTEwMDBjMTJiZWE0MWJjZDdlOWFkOGMxNTYyMjA5ODUyMjgxMDgwNzg1Mw==';let _data = [];

let locationId = 01400376;

const _getData = async (token, brand, term, locationId) => {
  const response = await fetch(
    `https://api.kroger.com/v1/products?filter.brand=${brand}&filter.term=${term}&filter.locationId=${locationId}`,
    {
      async: true,
      crossDomain: true,
      method: "GET",
      headers: { 
        Accept: "application/json",
        Authorization: "Bearer " + token 
      },
    }

  );
   _data = await response.json();
  return _data.images ;
}; 

document.addEventListener('DOMContentLoaded', function () {
    let products = document.querySelector('.products');
    async function fetchProducts(url) {
        try {
            let data = await fetch(url);
            let response = await data.json();

            for (let i = 0; i < response.length; i++) {
                let brand = response[i].filter.brand;
                products.innerHTML += `
                <div class="product">
                    <img src="${response[i].images[1]}" alt="" class="product-img" />
                    <div class="product-content">
                        <h3 class="product-brand">${brand.length > 20 ? brand.substring(0, 20).concat(' ...') : brand}</h3>
                        <h4 class="product-term">(${response[i].filter.term})</h4>
                    </div>
                </div>
                `;
            }
        }
        catch (e) {
            console.log(e)
        }
    };
    fetchProducts('https://api.escuelajs.co/api/v1/products');
});