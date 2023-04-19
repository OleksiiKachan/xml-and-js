/**
 * Function to get array of all states.
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of strings, e.g ["value1", "value2"]
 */
// const getAllStates = (data) => {};

// module.exports = getAllStates;
  
  const getAllStates = (data) => {
    return new Promise((resolve, reject) => {
      try {
        const states = new Set();
        for (const user of data) {
          for (const address of user.address) {
            states.add(address.state);
          }
        }
        resolve(Array.from(states));
      } catch (error) {
        reject(error);
      }
    });
  };
  
  module.exports = getAllStates;
  