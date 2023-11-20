import "./styles/DeveloperProfile.css";
import { developerData } from "../data/developer-data";

function DeveloperProfile() {
  const developerProfile = developerData.map((developer) => ({
    name: developer.name,
    email: developer.email,
    phone: developer.phone,
    skills: developer.skills,
    experience: developer.experience.map((experience) => ({
      title: experience.title,
      company: experience.company,
      startDate: experience.startDate,
      endDate: experience.endDate,
      description: experience.description,
    })),
    education: developer.education.map((education) => ({
      school: education.school,
      degree: education.degree,
      startDate: education.startDate,
      endDate: education.endDate,
    })),
  }));

  return (
    <div className="developer-profile-page">
      <div className="developer-profile">

        {developerProfile.map((developer, index) => (

          <div key={index} className="developer-profile-section">

            <div className="developer-profile-header">
              <img src="https://placehold.co/150" alt="profile" />
              <h3 className="developer-name">{developer.name}</h3>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default DeveloperProfile;
