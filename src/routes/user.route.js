const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

router.get("/", userController.getAllUsers);

router.post("/", userController.addUser);

router.get("/:username", userController.getUserByUsername);

router.delete("/:username", userController.deleteUserByUsername);

module.exports = router;
