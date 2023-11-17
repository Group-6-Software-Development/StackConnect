import React from 'react';
import './styles/JobsPage.css';
import jobImage from '../images/job-image.jpg';
import { availableJobs } from '../data'; // Import the availableJobs array

const JobsPage = () => {
  return (
    <div className="jobs-page">
      <div className="jobs-header">
        <h2>Available Jobs</h2>
      </div>
      <div className="jobs-list">
        {availableJobs.map((job) => (
          <div key={job.id} className="job-card">
            <img src={jobImage} alt={`Logo for ${job.company}`} className="company-logo" />
            <div className="job-details">
              <h3>{job.company}</h3>
              <p>{job.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;