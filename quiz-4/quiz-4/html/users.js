const loadData = async () => { //async function
  const result = await fetch(`https://6253799f90266e3d0e0373e6.mockapi.io/ok/user` //fetch data from this api and store it in result
);

const data = await result.json(); //parse into json

return data;
/**
 * load data from https://6253799f90266e3d0e0373e6.mockapi.io/ok/user
 */
};

loadData()
.then((data) => { //handles the response data
  let out = ""; //empty string variable decalred will store the html content that will be rendered in the web page

  let _address = ""; //will store the address data

  let _vehicle = ""; // will store the vehicle data

  data.map((item) => { //map is used here to iterate over each user in the JSON data and extract vehicle and add data
    item.vehicle.map((data) => { 
      _vehicle += ` <ul>
      <li>
      vin: ${data.vin}
        <ul>
          <li>manufacturer: ${data.manufacturer}</li>
          <li>model: ${data.model}</li>
          <li>type: ${data.type}</li>
        </ul>
      </li>
    </ul>
    <br>`;
    });

    item.address.map((data) => { // iterate over data.address and formatted in html
      _address += `<ul><li>${
        data.city +
        "," +
        data.state +
        ", " +
        data.country +
        " - " +
        String(data.zipCode)
      }</li></ul>`;
    });

    out += `<li>
  Id: ${item.id}
  <ul>
    <li>Username: ${item.userName}</li>
    <li>Email: ${item.email}</li>
    <li>Address: ${_address}</li>
    <li>
      Vehicle:
      ${_vehicle}
    </li>
  </ul>
</li><br>`;
  });

  document.getElementById("list").innerHTML = out;
  /**
   * render data in html table
   */
})
.catch((err) => console.error(err));