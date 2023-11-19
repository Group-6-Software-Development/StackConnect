import "./styles/EmployeeProfile.css";
import { availableJobs } from "../data/open-jobs";

function EmployeeProfile() {
  const companiesWithJobs = availableJobs.map((company) => ({
    companyName: company.company,
    jobs: company.jobs.map((job) => job.position),
    aboutUs: company.aboutUs,
  }));

  return (
    <div className="employee-profile">
      {companiesWithJobs.map((company, index) => (
        <div key={index} className="employee-profile-section">
          <div className="employee-profile-header">
            <img src="https://placehold.co/150" alt="profile" />
            <h3 className="employee-name">{company.companyName}</h3>
          </div>
          <div className="employee-profile-contents">
            <div className="employee-profile-body">
              <div className="open-jobs-body">
                <h4>Open jobs:</h4>
                <ul className="open-jobs">
                  {company.jobs.map((job, jobIndex) => (
                    <li key={jobIndex}>{job}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="employee-profile-about-us">
              <h4>About us:</h4>
              <p>{company.aboutUs}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeeProfile;
