const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const { validator } = require("../validators");

/**
 * @desc    Get all users
 * @route   GET /users
 * @output  {data: [{username: string, email: string, password: string}], status: string}
 * @access  Public
 */
router.get("/", userController.getAllUsers);

/**
 * @desc    Add a new user
 * @route   POST /users
 * @body    {username: string, email: string, password: string}
 * @output  {data: {username: string, email: string, password: string}, status: string},
 * @access  Public
 */
router.post("/", validator.userSchemaValidator, userController.addUser);

/**
 * @desc    Get a user by username
 * @route   GET /users/:username
 * @params  username: string
 * @output  {data: {username: string, email: string, password: string}, status: string}
 * @access  Public
 */
router.get(
  "/:username",
  validator.usernameParamValidator,
  userController.getUserByUsername
);

/**
 * @desc    Delete a user by username
 * @route   DELETE /users/:username
 * @params  username: string
 * @output  {status: string}
 * @access  Public
 */
router.delete(
  "/:username",
  validator.usernameParamValidator,
  userController.deleteUserByUsername
);

module.exports = router;
