const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();

// Create a New user
router.post("/", usersController.postUser);

module.exports = router;
