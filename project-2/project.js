const API_KEY = `1ce3b729-5ec2-43b9-9884-497a927857e2`;

const countriesUrl = `http://api.airvisual.com/v2/countries?key=${API_KEY}`;

// getting the countries list from the API
const getCountriesData = async () => {
    // getting the response from the API
    const response = await fetch(countriesUrl);
    const data = await response.json(); // storing the response to JSON data

    // if the data is loaded successfully then countries list is populated
    if (data.status == "success") {
        const countries = data.data;
        var select = document.getElementById("country-select");
        countries.forEach(country => {
            // console.log(country.country);
// Creating the element option in the HTML page
// Creating the element option in the HTML page
            var elem = document.createElement("option");
// getting the text value from the countries data.
            elem.textContent = country.country;
            elem.value = country.country;
            select.appendChild(elem);
        });
        return countries;
    }
    else {
        // log status error
        console.log(data.status);
    }
};


// getting the states list from the selected country
const getStatesData = async (country) => {
    const statesUrl = `http://api.airvisual.com/v2/states?country=${country}&key=${API_KEY}`;
    const response = await fetch(statesUrl);
    const data = await response.json();
    console.log(document.getElementById('country-select').value);
    if (data.status == "success") {
        const states = data.data;
        var select = document.getElementById("state-select");
        states.forEach(state => {
            var stateElem = document.createElement("option");
            stateElem.textContent = state.state;
            stateElem.value = state.state;
            select.appendChild(stateElem);
        });
       
        return states;
    }
    else {
        console.log(data.status);
    }

};


const getCitiesData = async (state, country) => {
    const cityUrl = `http://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${API_KEY}`;
    const response = await fetch(cityUrl);
    const data = await response.json();
    if (data.status == "success") {
        const cities = data.data;
        // console.log(cities);
        var select = document.getElementById("city-select");
        cities.forEach(city => {
            var cityElem = document.createElement("option");
            cityElem.textContent = city.city;
            cityElem.value = city.city;
            cityElem.id = country;
            select.appendChild(cityElem);
        });
        return cities;
    }
    else {
        console.log(data.status);
    }
};

const getAirQualityData = async (city, state, country) => {
    const cityUrl = `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${API_KEY}`;

    const response = await fetch(cityUrl);
    const data = await response.json();
    if (data.status == 'success') {
        console.log(data.status);
    }
    const airData = data;
    console.log(airData);
    displayData(airData);
    return airData;
};


const getCityUsingIP = async () => {
    cityIPUrl = `http://api.airvisual.com/v2/nearest_city?key=${API_KEY}`;
    const result = await fetch(cityIPUrl);
    const data = await result.json();
    if (data.status == `success`) {
        console.log(data.status);
    }
    const cityData = data;
    console.log(cityData)
    displayData(cityData);
    return cityData;
};

const displayData = (data) => {
    document.getElementById('resultData').innerHTML = "";
    let html = `
    <article id="airQuality-content">
    <h2>${data.data.city}</h2>
    <p>State: ${data.data.state}</p>
    <p>Country: ${data.data.country}</p>
    <h3>Current Weather:</h3>
    <ul>
      <li>
        <p>AQI US: ${data.data.current.pollution.aqius}</p>
        <p>AQI CN: ${data.data.current.pollution.aqicn}</p>
        <p>Temperature: ${data.data.current.weather.tp}</p>
        <p>Pressure: ${data.data.current.weather.pr}</p>
        <p>Humidity: ${data.data.current.weather.hu}</p>
        <p>Wind Speed: ${data.data.current.weather.ws}</p>
        <p>Wind Direction: ${data.data.current.weather.wd}</p>
      </li>
    </ul>
    </article>
    `;
    document.getElementById('resultData').innerHTML += html;
};

document.addEventListener("DOMContentLoaded", async () => {
    getCountriesData();
});

