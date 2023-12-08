const Job = require("../models/job");

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    console.log("Get all jobs successful");
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error getting jobs:", error.message);
    res.status(500).json({ error: error.message });
  }
};

const getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job) {
      console.log(`Get job by ID (${req.params.id}) successful`);
      res.json(job);
    } else {
      console.log(`No job found with ID: ${req.params.id}`);
      res.status(404).json({ msg: `No job with the id of ${req.params.id}` });
    }
  } catch (error) {
    console.error(`Error getting job by ID (${req.params.id}):`, error.message);
    res.status(500).json({ error: error.message });
  }
};

const postJob = async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    console.log("Job created successfully:", newJob);
    res.json(newJob);
  } catch (error) {
    console.error("Error creating job:", error.message);
    res.status(400).json({ error: error.message });
  }
};

const putJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job) {
      Object.assign(job, req.body);
      await job.save();
      console.log(`Job updated successfully (ID: ${req.params.id}):`, job);
      res.json({ msg: "Job updated", job });
    } else {
      console.log(`No job found with ID: ${req.params.id}`);
      res.status(404).json({ msg: `No job with the id of ${req.params.id}` });
    }
  } catch (error) {
    console.error(`Error updating job (ID: ${req.params.id}):`, error.message);
    res.status(400).json({ error: error.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job) {
      await job.remove();
      console.log(`Job deleted successfully (ID: ${req.params.id}):`, job);
      res.json({ msg: "Job deleted", job });
    } else {
      console.log(`No job found with ID: ${req.params.id}`);
      res.status(404).json({ msg: `No job with the id of ${req.params.id}` });
    }
  } catch (error) {
    console.error(`Error deleting job (ID: ${req.params.id}):`, error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getJobs,
  getJob,
  postJob,
  putJob,
  deleteJob,
};
