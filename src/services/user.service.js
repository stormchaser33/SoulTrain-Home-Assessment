const { User } = require("../models");

/**
 * Get all users
 * @returns {Object} Response object with data and status
 */
async function getAllUsers() {
  const users = await User.find();

  return {
    data: users,
    status: "success",
  };
}

/**
 * Get a user by username
 * @param {string} username - The username of the user to retrieve
 * @returns {Object} Response object with data and status
 */
async function getUserByUsername(username) {
  const user = await User.findOne({ username });

  return {
    data: user === null ? [] : user,
    status: "success",
  };
}

/**
 * Add a new user
 * @param {Object} user - The user object to add
 * @returns {Object} Response object with status
 */
async function addUser(user) {
  const newUser = new User(user);
  newUser.save();

  return {
    data: [user],
    status: "success",
  };
}

/**
 * Delete a user by username
 * @param {string} username - The username of the user to delete
 * @returns {Object} Response object with status
 */
async function deleteUserByUsername(username) {
  let result = await User.deleteOne({ username });

  return result.deletedCount > 0
    ? {
        status: "success",
      }
    : {
        status: "failed",
        message: "Not found corresponding user",
      };
}

module.exports = {
  getAllUsers,
  getUserByUsername,
  addUser,
  deleteUserByUsername,
};
