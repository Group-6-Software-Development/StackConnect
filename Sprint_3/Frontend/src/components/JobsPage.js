import React, { useState, useEffect } from 'react';
import './styles/JobsPage.css';
import jobImage from '../images/job-image.jpg';
import { useLocation } from 'react-router-dom';

const JobsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';
  const lowerCaseQuery = searchQuery.toLowerCase();

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/jobs');
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.company.toLowerCase().includes(lowerCaseQuery) ||
      job.position.toLowerCase().includes(lowerCaseQuery)
  );

  // Function to reset the filter and show all jobs
  const resetFilter = async () => {
    try {
      const response = await fetch('http://localhost:3002/api/jobs');
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
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
          <div key={job._id} className="job-card">
            {/* Adjust the image source accordingly */}
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
