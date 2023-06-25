const { userService } = require("../services");

// Controller function to get all users
async function getAllUsers(req, res) {
  try {
    return res.status(200).json(await userService.getAllUsers());
  } catch (err) {
    return res.status(500).json({ err });
  }
}

// Controller function to get a user by their username
async function getUserByUsername(req, res) {
  try {
    let result = await userService.getUserByUsername(req.params.username);
    if (result.data.length === 0) {
      return res.status(400).json({ err: "No corresponding user" });
    } else {
      return res.status(200).json(result);
    }
  } catch (err) {
    return res.status(500).json({ err });
  }
}

// Controller function to add a new user
async function addUser(req, res) {
  try {
    let result = await userService.addUser(req.body);
    if (result.status === "error") {
      return res
        .status(400)
        .json({ err: "User is already existed. Please use another username" });
    } else {
      return res.status(200).json(result);
    }
  } catch (err) {
    return res.status(500).json({ err });
  }
}

// Controller function to delete a user by their username
async function deleteUserByUsername(req, res) {
  try {
    return res
      .status(200)
      .json(await userService.deleteUserByUsername(req.params.username));
  } catch (err) {
    return res.status(500).json({ err });
  }
}

// Export the controller functions
module.exports = {
  getAllUsers,
  getUserByUsername,
  addUser,
  deleteUserByUsername,
};
