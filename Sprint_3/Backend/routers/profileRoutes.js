const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  getProfile,
  createProfile,
  updateProfile,
} = require("../controllers/profileController");

router.get("/", protect, getProfile);

router.post("/", protect, createProfile);

router.put("/", protect, updateProfile);

module.exports = router;
