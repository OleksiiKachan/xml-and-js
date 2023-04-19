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
    const required_data = data.map((user) => {
        const totalAge = user.vehicle.reduce((acc, cursr) => acc + cursr.age, 0);
        return { userName: user.userName, totalAge };
      });
      return Promise.resolve(required_data);
};

module.exports = getUserNameAndVehicleAge;
