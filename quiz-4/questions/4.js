/**
 * Function to get vehicle object by VIN
 * - should return a promise
 * - should reject if no VIN passed
 *   error message: "No VIN provided"
 * - should reject if no matches found
 *   error message: "No items matching ${vin}"
 * @param {*} data - see shape in ../../data.example.json
 * @returns vehicle object
 */
// const getByVIN = (data, vin) => {};

// module.exports = getByVIN;


const getByVIN = (data, vin) => {
    return new Promise((resolve, reject) => {
      if (!vin) {
        reject("No VIN provided");
      } else {
        const result = data.reduce((acc, curr) => {
          const vehicles = curr.vehicle.filter((vehicle) => vehicle.vin === vin);
          if (vehicles.length > 0) {
            acc = vehicles[0];
          }
          return acc;
        }, null);
        if (result) {
          resolve(result);
        } else {
          reject(`No items matching ${vin}`);
        }
      }
    });
  };
  
  module.exports = getByVIN;
  