const {
  getAllUsers,
  getUserByUsername,
  addUser,
  deleteUserByUsername,
} = require("./controllers/user.controller");

module.exports = {
  userController: {
    getAllUsers,
    getUserByUsername,
    addUser,
    deleteUserByUsername,
  },
};
