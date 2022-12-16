const API_KEY = `0Vqsmhnm7A3DovSlWZ1gQ`;

const getVehicleMakes = async () => {
    const result = await fetch("https://www.carboninterface.com/api/v1/vehicle_makes", {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        method: "GET"
    })

    const data = await result.json();
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

    return data;

};

const displayData = async () => {
  const htmlBody = document.getElementById("main");

  const vehicle_general_info = await getVehicleMakes();
  
  vehicle_general_info.map(async (element) => {
      const detail_info = await getDataForEachVehicleModel(element.data.id)
      console.log("something")
      console.log(detail_info)
      let html = `
              <div class="card">
                  <ul>
                      <li>Name: ${element.data.attributes.name}</li>
                      <li>Number of Models: ${element.data.attributes.number_of_models}</li>
                      
                      <ol>
                      Unique entities: <br>
                      ${removeDuplicatesInSortedArray(detail_info).map((el) => {

                          return `Model Name: ${el.data.attributes.name}, Model Year: ${el.data.attributes.year} <br>` 
                      }).join(' ')}
                      </ol>
                  </ul>
              </div>
              `;
      htmlBody.insertAdjacentHTML("beforeend", html);
  })
      
}
displayData()

function removeDuplicatesInSortedArray(array){
  const uniqueElements = [];

  for(let i=1; i<array.length; i++){
      if(array[i].data.attributes.name != array[i-1].data.attributes.name &&
          array[i].data.attributes.year != array[i-1].data.attributes.year){
          uniqueElements.push(array[i])
      }
  }

  return uniqueElements;
}
