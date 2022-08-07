const apiKey =
  "d056665fef812ec1b111a89b22e015cb020f8c18e360e057fab5b4053a48f5f8";

const cities = ["Toronto", "Kitchener", "Barrie", "Markham", "Ottawa"];
const imagesUrls = [
  "assets/toronto.jpg",
  "assets/kitchener.jpg",
  "assets/barrie.jpg",
  "assets/markham.jpg",
  "assets/ottawa.avif",
];

getDataByCity = async (city) => {
  const response = await fetch(
    `https://api.ambeedata.com/latest/by-city?city=${city}`,
    {
      method: "GET",
      headers: {
        "x-api-key": apiKey,
        "Content-type": "application/json",
      },
    }
  );

  return await response.json();
};

loadData = async () => {
  const list = document.getElementById("cities");

  const airQualityList = cities.map(async (city, index) => {
    const data = await getDataByCity(city);

    return `
    <li><article id="city-info">
    <section>
    <h3>${data["stations"][0].division} - ${data["stations"][0].postalCode}</h3>
    <h4>Air Quality Information</h4>
    <ul id="quality-info">
    <li>CO: ${data["stations"][0].CO}</li>
    <li>N02: ${data["stations"][0].NO2}</li>
    <li>N02: ${data["stations"][0].SO2}</li>
    <li>Pollutant: ${data["stations"][0]["aqiInfo"].pollutant}</li>
    <li>Category: ${data["stations"][0]["aqiInfo"].category}</li>
    <li>Concentration: ${data["stations"][0]["aqiInfo"].concentration}</li>
    <ul>
    </section>
    <img src=${imagesUrls[index]}></img>
    </article>
    </li>`;
  });

  list.innerHTML = (await Promise.all(airQualityList)).join(``);
};

loadData();