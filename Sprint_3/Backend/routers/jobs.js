const express = require("express");
const jobsController = require("../controllers/jobsController");
const router = express.Router();

router.get("/", jobsController.getJobs);
router.get("/:id", jobsController.getJob);
router.post("/", jobsController.postJob);
router.put("/:id", jobsController.putJob);
router.delete("/:id", jobsController.deleteJob);

module.exports = router;
