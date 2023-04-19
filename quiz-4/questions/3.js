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
// const getUserNameAndVehicleAge = (data) => {};

// module.exports = getUserNameAndVehicleAge;
  
const getUserNameAndVehicleAge = (data) => {
    return Promise.resolve(
      data.map((user) => {
        const totalAge = user.vehicle.reduce((acc, curr) => acc + curr.age, 0);
        return { userName: user.userName, totalAge };
      })
    );
  };

  module.exports = getUserNameAndVehicleAge;
  