const Job = require("../models/jobModel");
const mongoose = require("mongoose");

// get all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get single job
const getJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ error: "Invalid job ID" });
  }

  const job = await Job.findById(id);

  // if no job found with id return 404 error
  if (!job) {
    return res.status(404).send({ error: "Job not found" });
  }
  res.status(200).json(job);
};

// create job
const createJob = async (req, res) => {
  const { title, description, requirements, location, company, type, skills } =
    req.body;

  // if any required fields are missing return 400 error
  let emptyFields = [];
  if (!title) emptyFields.push("title");
  if (!description) emptyFields.push("description");
  if (!requirements) emptyFields.push("requirements");
  if (!location) emptyFields.push("location");
  if (!company) emptyFields.push("company");
  if (!type) emptyFields.push("type");
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill all fields", emptyFields });
  }

  // add job to db
  try {
    const user_id = req.user._id;
    const job = await Job.create({
      title,
      description,
      requirements,
      location,
      company,
      type,
      skills,
      user_id,
    });
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete job
const deleteJob = async (req, res) => {
  const { id } = req.params;

  const job =
    mongoose.Types.ObjectId.isValid(id) &&
    (await Job.findOneAndDelete({ _id: id }));

  // if no job found with id return 400 error
  if (!job) {
    return res.status(400).json({ error: "No such job" });
  }
  res.status(200).json(job);
};

// update job
const updateJob = async (req, res) => {
  const { id } = req.params;

  const job =
    mongoose.Types.ObjectId.isValid(id) &&
    (await Job.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    ));
  if (!job) {
    return res.status(400).json({ error: "No such job" });
  }
  res.status(200).json(job);
};

module.exports = {
  getJobs,
  getJob,
  createJob,
  deleteJob,
  updateJob,
};
