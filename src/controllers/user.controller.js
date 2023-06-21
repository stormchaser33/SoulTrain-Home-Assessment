const { userService } = require("../services");

// Controller function to get all users
async function getAllUsers(req, res, next) {
  try {
    res.json(await userService.getAllUsers());
  } catch (err) {
    console.error(`Error while getting users`, err.message);
    next(err);
  }
}

// Controller function to get a user by their username
async function getUserByUsername(req, res, next) {
  try {
    res.json(await userService.getUserByUsername(req.params.username));
  } catch (err) {
    console.error(`Error while getting user by its username`, err.message);
    next(err);
  }
}

// Controller function to add a new user
async function addUser(req, res, next) {
  try {
    res.json(await userService.addUser(req.body));
  } catch (err) {
    console.error(`Error while creating user`, err.message);
    next(err);
  }
}

// Controller function to delete a user by their username
async function deleteUserByUsername(req, res, next) {
  try {
    res.json(await userService.deleteUserByUsername(req.params.username));
  } catch (err) {
    console.error(`Error while deleting user by its username`, err.message);
    next(err);
  }
}

// Export the controller functions
module.exports = {
  getAllUsers,
  getUserByUsername,
  addUser,
  deleteUserByUsername,
};
