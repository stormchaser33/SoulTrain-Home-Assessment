const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

/**
 * @desc    Get all users
 * @route   GET /users
 * @access  Public
 */
router.get("/", userController.getAllUsers);

/**
 * @desc    Add a new user
 * @route   POST /users
 * @access  Public
 */
router.post("/", userController.addUser);

/**
 * @desc    Get a user by username
 * @route   GET /users/:username
 * @access  Public
 */
router.get("/:username", userController.getUserByUsername);

/**
 * @desc    Delete a user by username
 * @route   DELETE /users/:username
 * @access  Public
 */
router.delete("/:username", userController.deleteUserByUsername);

module.exports = router;
