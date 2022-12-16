let _data = [];
  
const API_KEY = `0Vqsmhnm7A3DovSlWZ1gQ`;


const getVehicleMake = async () => {

    const result = await fetch("https://www.carboninterface.com/api/v1/vehicle_makes", {

        headers: {

            Authorization: `Bearer ${API_KEY}`,

            "Content-Type": "application/json"

        },

        method: "GET"

    })



    const data = await result.json();
    console.log(data);
    return data;

};



const getDataForEachVehicleModel = async (vehicle_id) => {

    const result = await fetch(`https://www.carboninterface.com/api/v1/vehicle_makes/${vehicle_id}/vehicle_models`, {

        headers: {

            Authorization: `Bearer ${API_KEY}`,

            "Content-Type": "application/json"

        },
        method: "GET"
    })

    const data = await result.json();
    console.log(data);
    return data;

};


  const loadCars = async () => {
    let makers = await getVehicleMake();
  
    _data = await Promise.all(
      makers.map(async (maker) => {
        console.log(maker.data.id);
        const cars = await getDataForEachVehicleModel(maker.data.id);
        return { ...maker, cars };
      })
    );
  };


  const renderCars = (filterTerm) => {
    let source = _data;
  
    if (filterTerm) {
      console.log(filterTerm);
      const term = filterTerm.toLowerCase();
      source = source.filter(({ attributes:{name} }) => {
        console.log({attributes:{name}}.toLowerCase().includes(term));
        return {attributes:{name}}.toLowerCase().includes(term);
      });
    }
  
    const list = document.getElementById(`cars`);
  
    const html = source.reduce((acc, { attributes:{name}, cars }) => {
      const carsList = cars
        .map(
          ({ name, year, vehicle_make }) => `<li>${year} + " " + ${vehicle_make} + ${name}</li>`
        )
        .join(``);
  
      if (cars) {
        return (
          acc +
          `<article class="card">
          <div>
            <h2>${name}</h2>
            <ol>
              ${carsList}
            </ol>
          </div>
        </article>`
        );
      }
    }, ``);
  
    list.innerHTML = html;
  };

  loadCars().then(renderCars);

  const onSubmit = (event) => {
    event.preventDefault();
  
    const term = event.target.term.value;
  
    renderCars(term);
  };
  


