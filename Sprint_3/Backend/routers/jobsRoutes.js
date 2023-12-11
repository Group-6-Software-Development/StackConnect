const express = require("express");
const router = express.Router();

const {
  getJobs,
  getJob,
  createJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", getJobs);

router.get("/:id", getJob);

router.post("/", createJob);

router.put("/:id", protect, updateJob);

router.delete("/:id", protect, deleteJob);

module.exports = router;
