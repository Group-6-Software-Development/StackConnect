import React, { useState, useEffect } from 'react';
import './styles/JobsPage.css';
import jobImage from '../images/job-image.jpg';
import { useLocation, Link } from 'react-router-dom';
import { availableJobs } from '../data';

const JobsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';
  const lowerCaseQuery = searchQuery.toLowerCase();

  const [filteredJobs, setFilteredJobs] = useState(() => {
    return availableJobs.filter(
      (job) =>
        job.company.toLowerCase().includes(lowerCaseQuery) ||
        job.position.toLowerCase().includes(lowerCaseQuery)
    );
  });

  // Use useEffect to update the filteredJobs when the searchQuery changes
  useEffect(() => {
    setFilteredJobs(() => {
      return availableJobs.filter(
        (job) =>
          job.company.toLowerCase().includes(lowerCaseQuery) ||
          job.position.toLowerCase().includes(lowerCaseQuery)
      );
    });
  }, [lowerCaseQuery]);

  // Function to reset the filter and show all jobs
  const resetFilter = () => {
    setFilteredJobs(availableJobs);
  };

  return (
    <div className="jobs-page">
      <div className="jobs-header">
        <h2>
          Available Jobs{' '}
          <button className="refresh-button" onClick={resetFilter}>
            Show all
          </button>
        </h2>
      </div>
      <div className="jobs-list">
        {filteredJobs.map((job) => (
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
