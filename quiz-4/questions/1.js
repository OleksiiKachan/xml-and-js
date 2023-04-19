/**
 * Function to get array of all states.
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of strings, e.g ["value1", "value2"]
 */
const getAllStates = (data) => {
    const states = new Set();
    data.forEach((the_address) => {
        the_address.address.forEach((location) => {
            states.add(location.state);
        });
    });
    return Promise.resolve(Array.from(states));
};

module.exports = getAllStates;
