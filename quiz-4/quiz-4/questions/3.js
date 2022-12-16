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
const getUserNameAndVehicleAge = (data) => {
    return new Promise((resolve, reject) => {
        let getUserNameAndVehicleAge = data.filter((user) => user.isSuspended === false);
        if (getUserNameAndVehicleAge) {
        resolve(getUserNameAndVehicleAge);
        }
        })
};

module.exports = getUserNameAndVehicleAge;
