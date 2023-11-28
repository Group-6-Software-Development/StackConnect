const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (username, email, password) {
  // check input requirements
  if (!username || !email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough!");
  }
  // check for existing username
  const exists = await this.findOne({ email, username });

  if (exists) {
    throw Error("Email or Username already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, email, password: hash });

  return user;
};

// Static login function

userSchema.statics.login = async function (identifier, password) {
  // validate (user or email) and password are typed
  if (!identifier || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({
    $or: [{ email: identifier }, { username: identifier }],
  });
  if (!user) {
    throw Error("Invalid Email or Username");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Invalid Password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
