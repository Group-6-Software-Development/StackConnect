import "./styles/EmployerProfile.css";
import { availableJobs } from "../data/open-jobs";

function EmployerProfile() {
  const companiesWithJobs = availableJobs.map((company) => ({
    companyName: company.company,
    jobs: company.jobs.map((job) => job.position),
    aboutUs: company.aboutUs,
  }));

  return (
    <div className="employer-profile-page">
      <div className="employer-profile">
        {companiesWithJobs.map((company, index) => (
          <div key={index} className="employer-profile-section">
            <div className="employer-profile-header">
              <img src="https://placehold.co/150" alt="profile" />
              <h3 className="employer-name">{company.companyName}</h3>
            </div>
            <div className="employer-profile-contents">
              <div className="employer-profile-body">
                <div className="open-jobs-body">
                  <h4>Open jobs:</h4>
                  <ul className="open-jobs">
                    {company.jobs.map((job, jobIndex) => (
                      <li key={jobIndex}>{job}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="employer-profile-about-us">
                <h4>About us:</h4>
                <p>{company.aboutUs}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployerProfile;
