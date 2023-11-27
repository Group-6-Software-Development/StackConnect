const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();

// Create a New user
router.post("/register", usersController.registerNewUser);

router.post("/login", usersController.loginUser);

module.exports = router;
