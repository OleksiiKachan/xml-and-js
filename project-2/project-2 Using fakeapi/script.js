document.addEventListener('DOMContentLoaded', function () {
    let products = document.querySelector('.products');
    async function fetchProducts(url) {
        try {
            let data = await fetch(url);
            let response = await data.json();

            for (let i = 0; i < response.length; i++) {
                let description = response[i].description;
                let title = response[i].title;
                products.innerHTML += `
                <div class="product">
                    <img src="${response[i].images[1]}" alt="" class="product-img" />
                    <div class="product-content">
                        <h3 class="product-title">${title.length > 20 ? title.substring(0, 20).concat(' ...') : title}</h3>
                        <h4 class="product-category"><em>(${response[i].category.name})</em></h4>
                        <p class="product-description">${description.length > 80 ? description.substring(0, 80).concat(' ... <span class="more">more</span>') : description}</p>
                        <div class="product-price-container">
                            <h3 class="product-price">$${response[i].price}</h3>
                            <a href="#" data-productId="${response[i].id}" class="add-to-cart">Add To Cart</a>
                        </div>
                    </div>
                </div>
                `;
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    fetchProducts('https://api.escuelajs.co/api/v1/products');
});