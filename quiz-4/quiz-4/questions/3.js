/**
 * Function to get username and total age of user's vehicles
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of objects:
 * [{
 *  userName - string,
 *  totalAgent - number
 * }]
 */
const getUserVehicleAgeInfo = (data) => new Promise((resolve) => {
    const userNameAge = data.map(e => {  //return new array with the same length as the original 
                                        //but each element transformed by the callback function passed to the map
        const totalAge = e.vehicle.reduce((prev, crr) => prev += crr.age, 0)//takes callbackfuntion and intital value
        return { userName: e.userName, totalAge }
    });
    resolve(userNameAge)
});

module.exports = getUserVehicleAgeInfo;;
