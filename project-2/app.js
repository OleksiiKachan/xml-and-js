const API_KEY = "FeWGJ9F4dLA5kEBCazyAA";
console.log("hi js file working ");

let vehicleEstimate;
let carbon;

const makesDropdown = document.querySelector('select[name="make"]');
const modelsDropdown = document.querySelector('select[name="models"]');
const makexSpan = document.getElementById("makex");
const modelxSpan = document.getElementById("modelx");

async function getMakes() {
  const url = "https://www.carboninterface.com/api/v1/vehicle_makes";
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

async function getModels(makeId) {
  const url = `https://www.carboninterface.com/api/v1/vehicle_makes/${makeId}/vehicle_models`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

async function updateMakesDropdown() {
  const makes = await getMakes();
  makesDropdown.innerHTML = "<option value=''>Choose a Make</option>";
  for (const make of makes) {
    const option = document.createElement("option");
    option.value = make.data.id;
    option.text = make.data.attributes.name;
    makesDropdown.appendChild(option);
  }
}

async function updateModelsDropdown(makeId) {
  const models = await getModels(makeId);
  modelsDropdown.disabled = false;
  modelsDropdown.innerHTML = "<option value=''>Choose a Model</option>";
  for (const model of models) {
    const option = document.createElement("option");
    option.value = model.data.id;
    option.text = model.data.attributes.name;
    modelsDropdown.appendChild(option);
  }
}

makesDropdown.addEventListener("change", async (event) => {
  const makeId = event.target.value;
  if (makeId) {
    updateModelsDropdown(makeId);
    makexSpan.innerText =
      makesDropdown.options[makesDropdown.selectedIndex].text;
    modelxSpan.innerText = "";
  } else {
    modelsDropdown.disabled = true;
    modelxSpan.innerText = "";
  }
});

async function getEstimate(ESTIMATE_ID) {
  const result = await fetch(
    `https://www.carboninterface.com/api/v1/estimates`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "vehicle",
        distance_unit: "km",
        distance_value: 100,
        vehicle_model_id: ESTIMATE_ID,
      }),
    }
  );

  data = await result.json();
  return data;
}
modelsDropdown.addEventListener("change", async (event) => {
  modelxSpan.innerText =
    modelsDropdown.options[modelsDropdown.selectedIndex].text;
  const ESTIMATE_ID =
    modelsDropdown.options[modelsDropdown.selectedIndex].value;
  console.log(ESTIMATE_ID);
  vehicleEstimate = await getEstimate(ESTIMATE_ID);
  console.log(vehicleEstimate);
  return vehicleEstimate;
});
window.onload = updateMakesDropdown;
function Estimate() {
  carbon = 0;
  var dist = document.getElementById("distance").value;
  var unit = document.querySelector(
    'input[name="measurementUnit"]:checked'
  ).value;

  const distance_unit = document.getElementById("unitx");
  distance_unit.textContent= unit;
  
  if (unit === "grams") {
    carbon = vehicleEstimate.data.attributes.carbon_g;
  } else if (unit === "kgs") {
    carbon = vehicleEstimate.data.attributes.carbon_kg;
  } else if (unit === "mts") {
    carbon = vehicleEstimate.data.attributes.carbon_mt;
  } else if (unit === "lbs") {
    carbon = vehicleEstimate.data.attributes.carbon_lb;
  }
  const distance = vehicleEstimate.data.attributes.distance_value / dist;
  const make = vehicleEstimate.data.attributes.vehicle_make / dist;
  const model = vehicleEstimate.data.attributes.vehicle_model / dist;
  const year = vehicleEstimate.data.attributes.vehicle_year / dist;

  carbonx.innerHTML = (carbon * dist) / 100;

  yearx.innerHTML = vehicleEstimate.data.attributes.vehicle_year;
  distancex.innerHTML = dist;
  console.log(`Vehicle: ${year} ${make} ${model}`);
  console.log(
    `Distance: ${distance} ${vehicleEstimate.data.attributes.distance_unit}`
  );
  const selected_unit = document.getElementById("kgs").checked
    ? "kg"
    : document.getElementById("grs").checked
    ? "g"
    : document.getElementById("lbs").checked
    ? "lb"
    : "mt";

  
  console.log(`Carbon emissions: ${carbon} kg`);
}
