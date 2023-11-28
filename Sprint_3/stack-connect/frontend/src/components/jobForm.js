import { useState } from "react";

function JobForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [skills, setSkills] = useState([{ name: "", level: 0 }]);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  return (
    <form className="create-job" onSubmit={handleSubmit}>
      <h3>Create Job post</h3>

      <label>Job Title:</label>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
    </form>

    // jatka tästä

  );
}
