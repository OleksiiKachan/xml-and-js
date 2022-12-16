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
const getByVIN = (data, vin) => {

 getByVIN(sampleData, 'VSSZZZ6JZ3P056309').then((data) => {


   console.log(data);
}).catch(console.error);

 getByVIN(sampleData, 'invalid').then((data) => {
    console.log(data);

}).catch(console.error);
 getByVIN(sampleData).then((data) => {

console.log(data);

 

 }).catch(console.error);

module.exports = getByVIN;
module.exports = getByVIN;
