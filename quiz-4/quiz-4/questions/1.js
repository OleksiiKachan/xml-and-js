/**
 * Function to get array of all states.
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of strings, e.g ["value1", "value2"]
 */
const getAllStates = (data) => {
    return new Promise((resolve, reject) => {
        const states = [];
    data.forEach((info) => {
      info.address.forEach((address) => {
        states.push(address.state);
      });
    });
    resolve(states);
       console(states);
    })
};

module.exports = getAllStates;
