const {
  getAllUsers,
  getUserByUsername,
  addUser,
  deleteUserByUsername,
} = require("./user.controller");

module.exports = {
  userController: {
    getAllUsers,
    getUserByUsername,
    addUser,
    deleteUserByUsername,
  },
};
