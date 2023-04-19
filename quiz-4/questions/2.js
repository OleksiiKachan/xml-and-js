/**
 * Function to get array of all active users (not suspended users)
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of users
 */
// const getActiveUsers = (data) => {};

// module.exports = getActiveUsers;


const getActiveUsers = (data) => {
    const activeUsers = data.filter((user) => !user.isSuspended);
    return Promise.resolve(activeUsers);
  };
  
  module.exports = getActiveUsers;
  