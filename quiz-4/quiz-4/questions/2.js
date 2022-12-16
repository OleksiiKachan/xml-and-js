/**
 * Function to get array of all active users (not suspended users)
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of users
 */
const getActiveUsers = (data) => {
    return new Promise((resolve, reject) => {
        let activeUsers = data.filter((user) => user.isSuspended === false);
        if (activeUsers) {
        resolve(activeUsers);
        }
        })
    };

module.exports = getActiveUsers;
