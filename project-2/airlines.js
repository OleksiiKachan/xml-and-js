const key=`627f8427-75a0-4a94-aa2d-db8344a6e99b`; // key is used to authenticate and authorize access to the API


const getCountries = async () => {

  //fetch function to make a get request to the API endpoint for fetching countries data by passing key as query parameter
    const result = await fetch(`http://api.airvisual.com/v2/countries?key=${key}`)//await wait for the response from the API
    const data = await result.json(); // data parsed to JSON
    if(data.status == 'success'){ //if data is avaialable
      console.log(data); //// return data
    
    const countries = data.data; //extract data property from the response data containing array of countries
    // console.log(countries);
    const countryArr = []; //empty arry to store countries names extracted from the response
    countries.forEach(country => { //iterates over the array of countries
      countryArr.push(country.country); //each country as fetched is pushed to countryArr
    });
    // console.log(countryArr);
    var select = document.getElementById("country"); //refering html id assumed to be select dropdown element
    for(var i = 0; i < countryArr.length; i++) { //creating option for the dropdownlist using for loop
      var opt = countryArr[i]; //assigns value of the current element representing country name
      var el = document.createElement("option");//creates option element
      el.textContent = opt;//sets the text content of the option element to the value of the opt variable which is country name
      el.value = opt; // sets value of the option element to the value of the opt variable 
                      //which will be used as selected value when the form is submitted
      select.appendChild(el);//apends created option element as a child of the select element adding an option to the dropdown
    }
    }
    
    
    }

    //async function parameter is country i.e for the selected country which state data is to be fetched
    const getStatesByCountry = async (country) => { 
    
    document.getElementById("city").innerHTML = "";//sets html element with an id of city to empty string to clear previously populated data in the city element
    document.getElementById("state").innerHTML = "";//clears state lement as it is intended to select new states
    const result = await fetch(`http://api.airvisual.com/v2/states?country=${country}&key=${key}`) //get req to api endpt for fetching states data for the selectedcountry
    const data = await result.json();//data to be parsed as JSON
    if(data.status == 'success'){ //if data available
      const states = data.data; //extracts array of states for the selectedcountry
      // console.log(states);
      const stateArr = []; //creates empty array
      states.forEach(state => { //iterates over the array
        stateArr.push(state.state); //pushes the data to statArr
      });
      // console.log(stateArr);
      var select = document.getElementById("state");  //assumed to be select dropdown in html
      var el = document.createElement("option"); //default option with below text and value
      el.textContent = "---select state---";
      el.value = "---select state---";
      select.appendChild(el);//appends as the child of the select element adding it to the dropdown
      for(var i = 0; i < stateArr.length; i++) {
        var opt = stateArr[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        el.id = country;
        select.appendChild(el);
      }
      // return data;
    }
    
    
    }
    
    const getCitiesByState = async (state,country) => {
    
      document.getElementById("city").innerHTML = "";
      const result = await fetch(`http://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${key}`)
    const data = await result.json();
    if(data.status == 'success'){
      // return data;
    const cities = data.data;
    // console.log(cities);
    const cityArr = [];
    cities.forEach(city => {
      cityArr.push(city.city);
    });
    // console.log(cityArr);
    var select = document.getElementById("city");
    var el = document.createElement("option");
    el.textContent = "---select city---";
    el.value = "---select city---";
    select.appendChild(el);
    for(var i = 0; i < cityArr.length; i++) {
      var opt = cityArr[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      el.id = country;
      select.appendChild(el);
    }
    }
    
    // return data;
    // console.log(data);
    
    }
    
    const getNearestCity = async () => {
    
      const result = await fetch(`http://api.airvisual.com/v2/nearest_city?key=${key}`)
    const data = await result.json();
    const data2 = data.data;
    console.log(data2);
    generateHtml(data2);

    
    }
    
    const getNearestCityCordinates = async () => {
    
      const result = await fetch(`http://api.airvisual.com/v2/nearest_city?key=${key}`)
    const data = await result.json();
    // return data;
    console.log(data);
    }
    
    const getInputedCityData = async (city,state,country) => {
    
      const result = await fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${key}`)
    const data = await result.json();
    const data2 = data.data;
    
    console.log(data2);
    
    generateHtml(data2);
    
    
    }
    
    const formData = document.querySelector("#formData"); //form element in html
    formData.addEventListener("submit",(e)=>{
      e.preventDefault();//prevents the page from refreshing
      const opt = document.querySelector('input[name="aiqselect"]:checked').value;
      if(opt == 'custom'){
        const countryData = document.getElementById("country").value;
        const stateData = document.getElementById("state").value;
        const cityData = document.getElementById("city").value;
      
        getInputedCityData(cityData,stateData,countryData);
      }else{
        document.getElementById('result').innerHTML = '';
    getNearestCity();

      }

    })
    
    
    
    // function getSate(state){
    // console.log(state);
    // }
    // getStatesByCountry();
    // getCitiesByState();
    // getNearestCity();
    // getInputedCityData();
    
    document.addEventListener("DOMContentLoaded", async () => {
      getCountries();
    
    });

    const generateHtml = (obj) =>{
      let html = `<article>            <div class="location">
      <div><span class="location-city">${obj.city}</span>, <span class="location-state">${obj.state}</span></div>
      </div>
      <div class="aqi">
      <div class="aqi-left">
          <div class="aqi-heading">Air Quality Index</div>
          <div class="aqi-value">${obj.current.pollution.aqius}</div>
      </div>
      <div class="aqi-right">
          <div class="aqi-temp">${obj.current.weather.tp} C</div>
          <div class="aqi-wind">Wind speed: ${obj.current.weather.ws}mph</div> 
          <div class="aqi-humid">Humidity: ${obj.current.weather.hu}</div>
          <div class="aqi-pressure">Atm pressure: ${obj.current.weather.pr}</div>
      </div>
      </div>
      </article>`;
      document.getElementById('result').innerHTML += html ;
    }

    