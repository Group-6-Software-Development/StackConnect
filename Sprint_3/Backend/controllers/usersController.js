const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function createJWTToken(username, _id) {
  const payload = { username, _id };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
}

const registerNewUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    return res.status(200).json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const { username } = user.username;

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    } else {
      const token = createJWTToken(user.username, user._id);
      return res.status(200).json({ username, token });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log(err);
  }
};

module.exports = {
  registerNewUser,
  loginUser,
};
