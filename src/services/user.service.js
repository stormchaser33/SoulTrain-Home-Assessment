const { User } = require("../models");

async function getAllUsers() {
  const users = await User.find();

  return {
    data: users,
    status: "success",
  };
}

async function getUserByUsername(username) {
  const user = await User.findOne({ username });

  return {
    data: user === null ? [] : user,
    status: "success",
  };
}

async function addUser(user) {
  const newUser = new User(user);
  newUser.save();

  return {
    status: "success",
  };
}

async function deleteUserByUsername(username) {
  await User.deleteOne({ username });

  return {
    status: "success",
  };
}

module.exports = {
  getAllUsers,
  getUserByUsername,
  addUser,
  deleteUserByUsername,
};
