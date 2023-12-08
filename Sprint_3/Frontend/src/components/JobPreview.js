import { useState } from "react";
import "./styles/jobPreview.css";

const JobPreview = ({
  title,
  companyInfo,
  location,
  description,
  skills,
  requirements,
  type,
}) => {
  const [size, setSize] = useState("small");

  const handleClick = () => {
    setSize(size === "small" ? "large" : "small");
  };
  return (
    <div className="job-preview-frame" onClick={handleClick}>
      <h2>Post Preview</h2>
      <p>Click to enlarge</p>
      <p>
        <strong>Title:</strong> {title}
      </p>
      <p>
        <strong>Company:</strong> {companyInfo}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Skills:</strong> {skills}
      </p>
      {size === "large" && (
        <>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Requirements:</strong> {requirements}
          </p>
          <p>
            <strong>Type:</strong> {type.join(", ")}
          </p>
        </>
      )}
    </div>
  );
};
export default JobPreview;
