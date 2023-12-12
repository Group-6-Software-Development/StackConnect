const express = require("express");

const {
  getJobs,
  getJob,
  createJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @Swagger
 * tags:
 *  name: Jobs
 *  description: API Endpoints for managing jobs
 */

/**
 * @Swagger
 * components:
 *  schemas:
 *    Job:
 *      type: object
 *      properties:
 *        user:
 *          type: string
 *        title:
 *          type: string
 *        description:
 *          type: string
 *        requirements:
 *          type: string
 *        location:
 *          type: string
 *       company:
 *         type: string
 *       type:
 *         type: array      
 *        skills:
 *         type: string
 *
 *
 */

// Get all jobs
/**
 * @Swagger
 * /jobs:
 *  get:
 *    description: Get all jobs
 *    responses:
 *      '200':
 *        description: Success
 *      '500':
 *        description: Error
 */
router.get("/", getJobs);

// Get a single job by ID
/**
 * @Swagger
 * /jobs/{id}:
 * get:
 *  description: Get a single job by ID
 *  parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The ID of the job
 *      responses:
 *        '200':
 *          description: Success
 *        '401':
 *          description: Unauthorized
 */
router.get("/:id", getJob);

router.post("/", protect, createJob);

router.put("/:id", protect, updateJob);

router.delete("/:id", protect, deleteJob);

module.exports = router;
