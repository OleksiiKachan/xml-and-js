var baseUrl = "https://api.fda.gov/drug/drugsfda.json?api_key=KPgTDFke6AcBsKDMJugLGfJjGn5VjkBJzP3WHY7C";

function searchBrand(url) {
    fetch(url)
        .then((response) => {
            return response.json();
        }).then((jsonData) => {
            let data = "";
            if (jsonData.results && jsonData.results != undefined) {
                jsonData.results.map((element) => {
                    for (let key in element.products) {
                        var product = element.products[key];
                        data += `<div class="drug">
                        <img class="images card-image" style="" src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJ1Z3N8ZW58MHx8MHx8&w=1000&q=80" alt="image"/>
                    <div class="row card-element"><label>Brand: </label> <span> ${product.brand_name}</span></div>
                    <div class="row card-element"><label>Dosage Form: </label> <span> ${product.dosage_form}</span></div>
                    <div class="row card-element"><label>Route: </label> <span> ${product.route}</span></div>
                    <div class="row card-element"><label>Status: </label> <span> ${product.marketing_status}</span></div>
                    </div>`
                    }
                });
                if (document.getElementById("drugs")) {
                    document.getElementById("drugs").innerHTML = data;
                    document.getElementById("errorMessage")
                        .innerHTML = "";
                }
            } else {
                document.getElementById("errorMessage")
                    .innerHTML = "No record found.";
                document.getElementById("drugs").innerHTML = data;
            }

        })
        .catch((error) => {
            console.log(error);
        });
}

searchBrand(`${baseUrl}&limit=99`);

let searchTimeoutToken = 0;
window.onload = () => {
    const searchFieldElement = document.getElementById("searchField");
    searchFieldElement.onkeyup = (event) => {
        clearTimeout(searchTimeoutToken);
        searchTimeoutToken = setTimeout(() => {
            if (searchFieldElement.value && searchFieldElement.value.length > 0) {
                var url = `${baseUrl}&search=products.brand_name:"${searchFieldElement.value}"&limit=99`
            } else {
                var url = `${baseUrl}&limit=99`;
            }
            searchBrand(url);
        }, 250);
    };
}

function search() {
    const searchFieldElement = document.getElementById("searchField");
    if (searchFieldElement.value && searchFieldElement.value.length > 0) {
        var url = `${baseUrl}&search=products.brand_name:"${searchFieldElement.value}"&limit=99`
    } else {
        var url = `${baseUrl}&limit=99`;
    }
    searchBrand(url);
}


function filterRoute() {
    var value = jQuery('input[name="route_type"]:checked').val();
    if (value && value.length > 0) {
        const searchFieldElement = document.getElementById("searchField");
        if (searchFieldElement.value && searchFieldElement.value.length > 0) {
            var url = `${baseUrl}&search=products.route:"${value}"&search=products.brand_name:"${searchFieldElement.value}"&limit=99`
        } else {
            var url = `${baseUrl}&search=products.route:"${value}"&limit=99`
        }
    } if (value && value.length > 0) {
        var url = `${baseUrl}&search=products.route:"${value}"&limit=99`
    } else {
        var url = `${baseUrl}&limit=99`;
    }
    searchBrand(url);
}

function resetRoute() {
    $('input[name="route_type"]').prop('checked', false);
    var url = `${baseUrl}&limit=99`;
    searchBrand(url);
}