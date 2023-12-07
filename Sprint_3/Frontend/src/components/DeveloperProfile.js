import { useEffect, useState } from "react";
import "./styles/DeveloperProfile.css";

function DeveloperProfile() {
  const [developerProfile, setDeveloperProfile] = useState([]);

  const API_URL = "http://localhost:5000/profile/";

  const getDeveloperProfile = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      if (!response.ok) {
        console.error("Developer profile retrieval failed");
      } else {
        const data = await response.json();

        console.log("Developer profile retrieved successfully");

        setDeveloperProfile(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDeveloperProfile();
  }, []);

  return (
    <div className="developer-profile-page">
      <div className="developer-profile">
        {developerProfile.map((developer, index) => (
          <div key={index} className="developer-profile-section">
            <div className="developer-profile-header">
              <img src="https://placehold.co/150" alt="profile" />
              <h3 className="developer-name">{developer.name}</h3>
            </div>

            <div className="developer-profile-contents">
              <div className="skills-box">
                <h4>Skills:</h4>
                <ul className="skills">
                  {developer.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="education-box">
                <h4>Education:</h4>
                <ul className="education">
                  {developer.education.map((education, educationIndex) => (
                    <li key={educationIndex}>
                      <h5>{education.school}</h5>
                      <p className="degree">{education.degree}</p>
                      <p className="education-date">
                        {education.startDate} - {education.endDate}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="experience-box">
                <h4>Experience:</h4>
                <ul className="experience">
                  {developer.experience.map((experience, experienceIndex) => (
                    <li key={experienceIndex}>
                      <h5>{experience.title}</h5>
                      <p>{experience.company}</p>
                      <p>
                        {experience.startDate} - {experience.endDate}
                      </p>
                      <p>{experience.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeveloperProfile;
