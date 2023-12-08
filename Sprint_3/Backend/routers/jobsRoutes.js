const express = require("express");
const router = express.Router();

const {
  getJobs,
  getJob,
  createJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobController");

router.get("/", getJobs);

router.get("/:id", getJob);

router.post("/", createJob);

router.put("/:id", updateJob);

router.delete("/:id", deleteJob);

module.exports = router;
