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
 *       skills:
 *         type: string
 *       required:
 *        - user
 *        - title
 *        - description
 *        - requirements
 *        - location
 *        - company
 *        - type
 *       example:
 *          user: 61234567890abcdef1234567
 *          title: Software Engineer
 *          description: Developing software applications
 *          requirements: Bachelor's degree in Computer Science
 *          location: New York, USA
 *          company: ABC Company
 *          type: Full-time
 *          skills: JavaScript, HTML, CSS
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
 *      schema:
 *        type: string
 *      responses:
 *        '200':
 *          description: Success
 *         '400':
 *           description: Invalid job ID
 *        '404':
 *          description: Job not found
 */
router.get("/:id", getJob);

// Create a job
/**
 * @Swagger
 * /jobs:
 *  post:
 *    description: Create a job
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Job'
 *    responses:
 *      '201':
 *        description: Success
 *      '400':
 *        description: All fields not filled
 *      '401':
 *        description: Unauthorized
 */
router.post("/", protect, createJob);

// Update a job
/**
 * @Swagger
 * /jobs/{id}:
 *  put:
 *    description: Update a job
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: The ID of the job
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Job'
 *    responses:
 *      '200':
 *        description: Success
 *      '400':
 *        description: Invalid job ID
 *      '401':
 *        description: Unauthorized
 */
router.put("/:id", protect, updateJob);

// Delete a job
/**
 * @Swagger
 * /jobs/{id}:
 *  delete:
 *    description: Delete a job
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: The ID of the job
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: Success
 *      '400':
 *        description: Invalid job ID
 *      '401':
 *        description: Unauthorized
 */
router.delete("/:id", protect, deleteJob);

module.exports = router;
