const User = require("../models/users");
const usersLog = require("../models/usersLog");
const bcrypt = require("bcrypt");

// Variable to store user action
var userAction = "";

// Create a New user
const postUser = async (req, res) => {
  try {
    // Get user information from request body
    const { username, email, password } = req.body;

    // Salt and hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save user and send response
    const savedUser = await newUser.save();
    res.json(savedUser);

    // Log user creation
    userAction = "Created user successfully";
  } catch (err) {
    // If error, send error message
    console.log(err);
    res.status(400).json({ message: err.message });

    // Log user creation failure
    userAction = "Failed user creation";
  } finally {
    // Log user creation attempt
    const { username } = req.body;

    // Create new user log
    const newUserLog = new usersLog({
      username,
      action: userAction,
      ipAddress: req.ip,
    });

    // Save user log
    const savedUserLog = await newUserLog.save();
    console.log(savedUserLog);
  }
};

module.exports = {
  postUser,
};
