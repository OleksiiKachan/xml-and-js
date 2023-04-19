/**
 * Function to get array of all active users (not suspended users)
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of users
 */
const getActiveUsersInfo = (data) => new Promise((resolve, reject) => {
    const states = []; //empty array
    data.forEach(e => { //iterates over the user
        if(!e.isSuspended) { //if user is not suspended
            states.push(e) // then push the user
        }
    })
    resolve(states)
});

module.exports = getActiveUsersInfo;
