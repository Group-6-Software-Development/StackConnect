const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", protect, getUser);

router.get("/", protect, getUsers);

router.put("/profile", protect, updateUser);

router.delete("/profile", protect, deleteUser);

module.exports = router;
