$("form").on('submit', function (e) {
  e.preventDefault();
  var unit = $('#dunit').val();
  var distance = $('#distance').val();
  var modal = $('#vehicle_modal').val();

  if (unit.length > 0 && distance.length > 0 && modal.length > 0) {
    fetch("https://www.carboninterface.com/api/v1/estimates", {
      method: "POST",
      body: JSON.stringify({
        "type": "vehicle",
        "distance_unit": unit,
        "distance_value": distance,
        "vehicle_model_id": modal,
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 3eNiE1BMZLAtM3uj3rLmdg"
      }
    }).then((response) => {
      return response.json();
    }).then((jsonData) => {
      if (jsonData.data && jsonData.data.attributes) {
        var data = jsonData.data.attributes;
        html = `<div class="automotive">
                        <h2>Result</h2>
                        <div class="row card-element"><label class="result-label">Brand: </label> <span> ${data.vehicle_make}</span></div>
                        <div class="row card-element"><label class="result-label">Modal: </label> <span> ${data.vehicle_model}</span></div>
                        <div class="row card-element"><label class="result-label">Year: </label> <span> ${data.vehicle_year}</span></div>
                        <div class="row card-element"><label class="result-label">Modal Id: </label> <span> ${data.vehicle_model_id}</span></div>
                        <div class="row card-element"><label class="result-label">Distance Unit: </label> <span> ${data.distance_unit}</span></div>
                        <div class="row card-element"><label class="result-label">Toat Distance: </label> <span> ${data.distance_value}</span></div>
                        <div class="row card-element"><label class="result-label">Carbon Emission: </label> <span> ${data.carbon_kg} KG</span></div>
  
                        </div>`;

        if (document.getElementById("automotive")) {
          document.getElementById("automotive").innerHTML = html;
          document.getElementById("errorMessage")
            .innerHTML = "";
        }

      } else {
        document.getElementById("errorMessage")
            .innerHTML = "Data not found.";
            document.getElementById("automotive").innerHTML = '';
      }
    })
  }
});