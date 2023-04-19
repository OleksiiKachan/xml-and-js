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
const getVINdetails = (data, vin) => new Promise((resolve, reject) => {
    if (!vin) reject("No VIN provided");
    data.forEach(element => {
        const vehicle = element.vehicle.find(v => v.vin === vin);
        if (vehicle) {
            resolve(vehicle)
        }
    });
    reject(`No items matching ${vin}`);
});

module.exports = getVINdetails;

