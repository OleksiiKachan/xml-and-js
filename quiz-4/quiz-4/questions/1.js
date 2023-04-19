/**
 * Function to get array of all states.
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of strings, e.g ["value1", "value2"]
 */
const getStatesInfo = (data) => new Promise((resolve, reject) => {
    const states = new Set(); //creates a new empty set object name states
    data.map(e => e.address?.map(a => states.add(a.state))) // it iterates for each element e in data . calls map 
                                     //on the address array of e. If e.address is false then it does nothing else it adds the state property
                                     //? is used so that it iterates only when the address is not null
    resolve([...states]) // converts the set into array. Creates a new array with the same value as the states
});

module.exports = getStatesInfo;


    