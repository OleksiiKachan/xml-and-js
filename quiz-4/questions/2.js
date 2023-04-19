/**
 * Function to get array of all active users (not suspended users)
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of users
 */
const getActiveUsers = (data) => {
    return new Promise((resolve, reject) => {
        try {
          const onlyactiveUsers = data.filter((eachuser) => !eachuser.isSuspended);
          resolve(onlyactiveUsers);
        } catch (error) {
          reject(error);
        }
      });
};

module.exports = getActiveUsers;
