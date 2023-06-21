const { userService } = require("../services");

async function getAllUsers(req, res, next) {
  try {
    res.json(await userService.getAllUsers());
  } catch (err) {
    console.error(`Error while getting users`, err.message);
    next(err);
  }
}

async function getUserByUsername(req, res, next) {
  try {
    res.json(await userService.getUserByUsername(req.params.username));
  } catch (err) {
    console.error(`Error while getting user by its username`, err.message);
    next(err);
  }
}

async function addUser(req, res, next) {
  try {
    res.json(await userService.addUser(req.body));
  } catch (err) {
    console.error(`Error while creating user`, err.message);
    next(err);
  }
}

async function deleteUserByUsername(req, res, next) {
  try {
    res.json(await userService.deleteUserByUsername(req.params.username));
  } catch (err) {
    console.error(`Error while deleting user by its username`, err.message);
    next(err);
  }
}

module.exports = {
  getAllUsers,
  getUserByUsername,
  addUser,
  deleteUserByUsername,
};
