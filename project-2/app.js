const _ApiKey = "pyaseITWbCkB7Eny9zy4cA";
const _IsProd = true; //Controls what data to retrieve - actual API or mock

let _data = [];
let _current_term = '';


const getVehicleMakes = async () => {
    const result = await fetch(`https://www.carboninterface.com/api/v1/vehicle_makes`,{
        method: 'GET',
        headers: {
            Authorization: "Bearer " + _ApiKey
        }
    });

    const data = await result.json();
    return data;
}


const getVehicleModelsByMake = async(makeId) => {
    const result = await fetch(`https://www.carboninterface.com/api/v1/vehicle_makes/${makeId}/vehicle_models`,{
        method: 'GET',
        headers: {
            Authorization: "Bearer " + _ApiKey
        }
    });

    const data = await result.json();
    return data;
}

const getVehicleEstimate = async(modelId) => {

    let data;

    //API has a monthly limit of 200 requests, so we are mocking test data while in dev
    if (_IsProd) {
        //Fetch actual data
        const result = await fetch(`https://www.carboninterface.com/api/v1/estimates`, {
            method: "POST",
            headers: {
                Authorization: "Bearer " + _ApiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: "vehicle",
                distance_unit: "km",
                distance_value: 100,
                vehicle_model_id: modelId
            })
        });

        data = await result.json();
    } else {
        //Mock data
        data = {
            "data": {
                "id": "6108d711-be04-4dc4-93f9-43d969fd5273",
                "type": "estimate",
                "attributes": {
                    "distance_value": 100.0,
                    "vehicle_make": "Toyota",
                    "vehicle_model": "Corolla",
                    "vehicle_year": 1993,
                    "vehicle_model_id": "7268a9b7-17e8-4c8d-acca-57059252afe9",
                    "distance_unit": "km",
                    "estimated_at": "2021-01-10T15:24:32.568Z",
                    "carbon_g": 37029,
                    "carbon_lb": 81.64,
                    "carbon_kg": 37.03,
                    "carbon_mt": 0.04
                }
            }
        };
    }

    return data;
}


const loadEstimates = async()=> {
    let vehicleMakes = await getVehicleMakes();
    //API has a monthly limit of 200 requests, so we are limiting data to 4 manufacturers and 5 models per manufacturer
    const manufacturers = ['Alfa Romeo', 'Toyota', 'BMW', 'Chevrolet'];
    vehicleMakes = vehicleMakes.filter(v => manufacturers.includes(v.data.attributes.name));

    _data = await Promise.all(
        
        vehicleMakes.map(async(vehicleMake) => {
            
            let vehicleModels = await getVehicleModelsByMake(vehicleMake.data.id);
            //Get only unique models
            vehicleModels = vehicleModels.filter((item, i, ar) => ar.find(v => v.data.attributes.name === item.data.attributes.name) === item);
            vehicleModels.splice(5);

            vehicleModels = await Promise.all(
                
                vehicleModels.map(async(vehicleModel) => {
                    const estimate = await getVehicleEstimate(vehicleModel.data.id);

                    return {...vehicleModel, estimate};
                })

            )

            return {...vehicleMake, vehicleModels};
        })
    );
}

const renderEstimates = () => {
    let source = _data;

    if (_current_term) {
        const term = _current_term.toLowerCase();
        source = source.filter(({data}) => {
            return data.attributes.name.toLowerCase().includes(term);
        });
    }

    const selected_unit = document.getElementById("opt_kg").checked ? 'kg' :
            document.getElementById("opt_g").checked ? 'g' :
            document.getElementById("opt_lb").checked ? 'lb' :
            'mt';

    const list = document.getElementById("manufacturers");
    list.innerHTML = "";
    source.map(({ data, vehicleModels }) => {
        const man_name = data.attributes.name

        let models = '';

        models = vehicleModels
            .map((vehicleModel) =>
                buildModelEmissionList(vehicleModel, selected_unit))
            .join("");
        models = `<ol class="models">${models}</ol>`;
        

        const html = `
        <article class="manufacturer">
            <img src="./img/${man_name}.png" width="600" height="600" alt="${man_name}"/>
            ${models}
        </article>`;

        list.insertAdjacentHTML("beforeend", html);

        
    });
}

const buildModelEmissionList = (model, selected_unit) => {
    const model_name = model.data.attributes.name
    const model_year = model.data.attributes.year

    let emmistionHttp = '';
    if (model.estimate.data) {
        const carbon = selected_unit == 'kg' ? model.estimate.data.attributes.carbon_kg :
            selected_unit == 'g' ? model.estimate.data.attributes.carbon_g :
                selected_unit == 'lb' ? model.estimate.data.attributes.carbon_lb :
                    model.estimate.data.attributes.carbon_mt;
        const distance_value = model.estimate.data.attributes.distance_value;
        const distance_unit = model.estimate.data.attributes.distance_unit;
        emmistionHttp = `Estimated emissions: ${carbon} ${selected_unit} of carbon per ${distance_value} ${distance_unit}`;
    } else {
        emmistionHttp = 'Could not retrieve emission information';
    }
    
    const modelsListHTML = `<li class="model">
        <div>
            <p class="model_descr">${model_name} (${model_year})</p>
            <p class="emission">${emmistionHttp}</p>
        </div>
    </li>`;

    return modelsListHTML;
}

loadEstimates().then(renderEstimates);

const onSubmit = (event) => {
    event.preventDefault();
    _current_term = event.target.term.value;
    renderEstimates();
};

const onReset = (event) => {
    event.preventDefault();
    event.target.term.value = '';
    _current_term = ''
    renderEstimates();
};

const onChange = () => {
    renderEstimates();
}