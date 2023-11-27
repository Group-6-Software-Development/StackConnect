const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

const router = express.Router();

// get all job
router.get("/", getJobs);

// get single job
router.get("/:id", getJob);

// ↓ make sure user is logged in to access routes below ↓
router.use(requireAuth);

// create job
router.post("/", createJob);

// update job
router.patch("/:id", updateJob);

// delete job
router.delete("/:id", deleteJob);

module.exports = router;
