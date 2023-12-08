const express = require("express");
const router = express.Router();

const {
  getJobs,
  getJob,
  postJob,
  putJob,
  deleteJob,
} = require("../controllers/jobsController");

router.get("/", getJobs);

router.get("/:id", getJob);

router.post("/", postJob);

router.put("/:id", putJob);

router.delete("/:id", deleteJob);

module.exports = router;
