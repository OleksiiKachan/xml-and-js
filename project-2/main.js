const API_URL = "https://api.thedogapi.com/v1";
const apiKey = "live_AEYCAHHRGqj5fi9awLbLNgwjCRx5iWSTTcma0NhHKhxhC8AgzQBZEfgR7CVE0ATs";
const limit = 15;

const dogData = async () => {
  const data = await fetch(API_URL + `/breeds?limit=${limit}`);
  const dogBreeds = await data.json().catch((e) => console.log(e));

  console.log(dogBreeds);

  populateDog(dogBreeds);
};

const populateDog = (dogBreeds) => {
  //console.log(dogBreeds);
  const selectDog = document.querySelector(".breed-select");
  const breedOptions = dogBreeds.map((dogBreed) => {
    // console.log("Name : ", dogBreed.name);
    // console.log("ID : ", dogBreed.id);

    const options = document.createElement("option");
    options.text = dogBreed.name;
    options.value = dogBreed.id;

    return options;
  });

  breedOptions.map((breed) => selectDog.appendChild(breed));
};

const dogImage = (imageUrl) => {
  document.querySelector("#dog-image").setAttribute("src", imageUrl);
};

const dogDetails = (breeds) => {
  //console.log("breeds_arr : ", breeds);

  const breedName = breeds[0]?.name || "Information not available";
  const origin = breeds[0]?.origin || "Information not available";
  const breedTemperament =
    breeds[0]?.temperament || "Information not available";
  const breedLifeSpan = breeds[0]?.life_span || "Information not available";
  const breedFor = breeds[0]?.bred_for || "Information not available";
  const breedGroup = breeds[0]?.breed_group || "Information not available";

  const height = breeds.map(({ height }) => {
    // console.log(height);
    return `<p class="doghw"><span>Height:</span> Imperial: ${height.imperial} | Metric: ${height.metric}</p>`;
  });

  const weight = breeds.map(({ weight }) => {
    return `<p class="doghw"><span>weight:</span> Imperial: ${weight.imperial} | Metric: ${weight.metric}</p>`;
  });

  const dogInfo = document.querySelector(".dog-info");

  const dogInfoHtml = `
        <div class="dog-info">
            <p><span>Breed Name:</span> ${breedName}</p>
            <p><span>Breed For:</span> ${breedFor}</p>
            <p><span>Breed Group:</span> ${breedGroup}</p>
            <p><span>Origin:</span> ${origin}</p>
            <p><span>Temperament:</span> ${breedTemperament}</p>
            <p><span>Life Span:</span> ${breedLifeSpan}</p>
            <p>${height}</p>
            <p>${weight}</p>
        </div>
    `;

  dogInfo.innerHTML = dogInfoHtml;
};

const getDogByBreed = async (breedId) => {

  const loadingElement = document.querySelector(".loading");
  loadingElement.classList.add("show-loading");

  const [data] = await fetch(
    API_URL + `/images/search?api_key=${apiKey}&breed_id=${breedId}`
  )
    .then((data) => data.json())
    .catch((e) => console.error(e));

  //console.log(data);

  const { url, breeds } = data;

  //console.log("Image : ", url);
  dogImage(url);
  //console.log("breeds : ", breeds);
  dogDetails(breeds);

  loadingElement.classList.remove("show-loading");
};

const breedChange = () => {
  //console.log(event.target.value);
  const dogBreedId = event.target.value;

  getDogByBreed(dogBreedId);
};

dogData();
