import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './styles/JobPostPage.css';

const JobPostPage = () => {
    const [selectedCodes, setSelectCodes] = useState([]);
    const [selectedTools, setSelectTools] = useState([]);
    const [selectedWorkplace, setSelectWorkplace] = useState([]);
    const [selectedDevExp, setSelectDevExp] = useState([]);
    const [selectedJobType, setSelectJobType] = useState([]);
    
    const handleSelectCodeChange = (event) => {
        const selectedValues = Array.from(event.target.selectedOptions).map((option) => option.value);
        setSelectCodes(selectedValues);
    };

    const handleSelectToolChange = (event) => {
        const selectedValues = Array.from(event.target.selectedOptions).map((option) => option.value);
        setSelectTools(selectedValues);
    };

    const handleSelectWorkplaceChange = (event) => {
        const selectedValues = Array.from(event.target.selectedOptions).map((option) => option.value);
        setSelectWorkplace(selectedValues);
    };

    const handleSelectDevExpChange = (event) => {
        const selectedValues = Array.from(event.target.selectedOptions).map((option) => option.value);
        setSelectDevExp(selectedValues);
    };

    const handleSelectJobTypeChange = (event) => {
        const selectedValues = Array.from(event.target.selectedOptions).map((option) => option.value);
        setSelectJobType(selectedValues);
    };
    return (
        <div className="job-post-page">
            <form className="job-post-form">
            <h2 className="job-post-title">Create Job Post</h2>
            <label className="join-jt-cl-titles">
                <label className="job-title-label" htmlFor="job-title">
                    Job Title:
                </label>
                <label className="code-languages-label" htmlFor="code-languages">
                    Code Languages:
                </label>
                </label>
                <label className="join-jt-cl-inputs">
                <input
                    type="text"
                    id="job-title"
                    name="job-title"
                    className="job-title-input"
                    required
                />
                <select id="code-languages" className="code-languages-input" multiple onChange={handleSelectCodeChange} value={selectedCodes}>
                    <option value = "python">Python</option>
                    <option value = "javascript">JavaScript</option>
                    <option value = "java">Java</option>
                    <option value = "c++">C++</option>
                    <option value = "c">C</option>
                    <option value = "c#">C#</option>
                    <option value = "php">PHP</option>
                    <option value = "ruby">Ruby</option>
                    <option value = "go">Go</option>
                    <option value = "typescript">TypeScript</option>
                    <option value = "swift">Swift</option>
                    <option value = "kotlin">Kotlin</option>
                    <option value = "rust">Rust</option>
                    <option value = "scala">Scala</option>
                    <option value = "r">R</option>
                    <option value = "sql">SQL</option>
                    <option value = "html">HTML</option>
                    <option value = "css">CSS</option>
                    <option value = "assembly">Assembly</option>
                    <option value = "none">None</option>
                    required
                    </select>
                    <ul className="selected-code-languages">
                    {selectedCodes.map((codeLanguage) => (
                        <li key={codeLanguage}>{codeLanguage}</li>
                    ))}
                    </ul>
                </label>
                <br/>
                <label className="join-wp-tools-label">
                <label className="workplace-label" htmlFor="workplace-select">
                    Workplace:
                </label>
                <label className="tools-label" htmlFor="tools">
                    Tools:
                </label>
                </label>
                <label className="join-wp-tools-inputs">
                <select id="workplace-select" className="workplace-input" multiple onChange={handleSelectWorkplaceChange} value={selectedWorkplace} >
                    <option value = "home">At Home</option>
                    <option value = "office">On-site</option>
                    <option value = "hybrid">Many Possibilities</option>
                    <option value = "unknown">Other Option</option>
                    required
                </select>
                <select id="tools" className="tools-input" multiple onChange={handleSelectToolChange} value={selectedTools}>
                    <option value = "git">Git</option>
                    <option value = "github">GitHub</option>
                    <option value = "gitlab">GitLab</option>
                    <option value = "bitbucket">BitBucket</option>
                    <option value = "jira">Jira</option>
                    <option value = "trello">Trello</option>
                    <option value = "slack">Slack</option>
                    <option value = "discord">Discord</option>
                    <option value = "zoom">Zoom</option>
                    <option value = "skype">Skype</option>
                    <option value = "msteams">Microsoft Teams</option>
                    <option value = "googlemeet">Google Meet</option>
                    <option value = "webex">WebEx</option>
                    <option value = "unknown">Other</option>
                    <option value = "none">None</option>
                    required
                </select>
                <label className="join-wp-tools-inputs">
                <ul className="selected-workplace">
                    {selectedWorkplace.map((workplace) => (
                        <li key={workplace}>{workplace}</li>
                    ))}
                </ul>
                <ul className="selected-tools">
                    {selectedTools.map((tool) => (
                        <li key={tool}>{tool}</li>
                    ))}
                </ul>
                </label>
                </label>
                <br/>
                <label className="join-jl-exp-label">
                <label className="job-location-label" htmlFor="job-location">
                    Job location:
                </label>
                <label className="developer-exp-amount-label" htmlFor="developer-exp-amount">
                    Developer Experience Amount:
                </label>
                </label>
                <label className="join-jl-exp-inputs">
                <input
                    type="text"
                    id="job-location"
                    name="job-location"
                    className="job-location-input"
                    required
                />
            
                <select id="developer-exp-amount" className="developer-exp-amount-input" multiple onChange={handleSelectDevExpChange} value={selectedDevExp}>
                    <option value = "junior">Junior</option>
                    <option value = "mid">Mid</option>
                    <option value = "senior">Senior</option>
                    <option value = "unknown">Other</option>
                    required
                </select>
                
                <ul className="selected-developer-exp-amount">
                    {selectedDevExp.map((developerExpAmount) => (
                        <li key={developerExpAmount}>{developerExpAmount}</li>
                    ))}
                </ul>
                </label>
                <br/>
                <label className="join-jt-desc-label">
                <label className="job-type-label" htmlFor="job-type">
                    Job Type:
                </label>
                <label className="job-description-label" htmlFor="job-description">
                    Job Description:
                </label>
                </label>
                <label className="join-jt-desc-inputs">
                <select id="job-type" className="job-type-input" multiple onChange={handleSelectJobTypeChange} value={selectedJobType}>
                    <option value = "full-time">Full-time</option>
                    <option value = "part-time">Part-time</option>
                    <option value = "contract">Contract</option>
                    <option value = "temporary">Temporary</option>
                    <option value = "volunteer">Volunteer</option>
                    <option value = "internship">Internship</option>
                    <option value = "unknown">Other</option>
                    required
                </select>
                
                <ul className="selected-job-type">
                    {selectedJobType.map((jobType) => (
                        <li key={jobType}>{jobType}</li>
                    ))}
                </ul>
                <textarea
                    type="text"
                    id="job-description"
                    name="job-description"
                    className="job-description-input"
                    required
                />
                </label>
                <br/>
                <button type="submit" className="add-job-button">
                    + Add Job 
                </button>
            </form>
        </div>
    );
};

export default JobPostPage;
