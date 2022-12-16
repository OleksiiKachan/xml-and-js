const API_KEY = "c4ff106cddefc57e23bc8cfad298316f";

const ratesWrapper = document.querySelector(".rates-wrapper");
const searchInput = document.querySelector(".search-input");

//Fetching data from API

const fetchData = async () => {
    const res = await fetch(
        `http://api.coinlayer.com/api/list?access_key=${API_KEY}`
    );

    
    const data = await res.json();

    return data;
};

//Declaring a empty string variable to pass DOM Elements Later
let result = "";

//Displaying data | data Argument is that data we fetched from API and returned it in fetchData function - And we pass it to function later
const displayData = (data) => {
  
    const entries = Object.entries(data.crypto);
    
    entries.map(([key, value]) => {
     
        result += `
        <div class="rate">
            <img
                src="${value.icon_url}"
                alt="${key}"
                class="rate-icon"
            />
            <h2 class="info-wrapper">
                 Symbol: <span class="symbol">${value.symbol}</span>
            </h2>
            <p class="info-wrapper">
                Name: <span class="name">${value.name}</span>
            </p>
             <p class="info-wrapper">Max Supply: <span class="max-supply"> ${value.max_supply} </span></p>
        </div>`;

        //pass our element in ratesWrapper div (ParentElement)
        ratesWrapper.innerHTML = result;

      

        //console.log(value);
    });

    
   
    const symbols = ratesWrapper.querySelectorAll(".symbol");
    
    symbols.forEach((symbol) => {
        search(symbol);
    });
};

//Search Function
//In this function we pass symbol as an argument to search the name
const search = (symbol) => {
    
    searchInput.addEventListener("input", (e) => {
       
        if (
            symbol.innerHTML
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
        ) {
            symbol.parentElement.parentElement.style.display = "flex";
        } else {
            symbol.parentElement.parentElement.style.display = "none";
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
   
    fetchData().then((data) => displayData(data));

    
});
