const {
  getAllUsers,
  getUserByUsername,
  addUser,
  deleteUserByUsername,
} = require("./user.service");

module.exports = {
  userService: {
    getAllUsers,
    getUserByUsername,
    addUser,
    deleteUserByUsername,
  },
};
