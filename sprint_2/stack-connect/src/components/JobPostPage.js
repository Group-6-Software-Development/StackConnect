import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
//import './styles/SignInPage.css';

const JobPostPage = () => {
    const handleSelectChange = (event) => {
        const selectOption = event.target.value;
        console.log('Selected option:', selectOption);
    };

    return (
        <div className="job-post-page">
            <form className="job-post-form">
            <h2 className="job-post-title">Create Job Post</h2>
                <label className="job-title-label" htmlFor="job-title">
                    Job Title:
                </label>
                <input
                    type="text"
                    id="job-title"
                    name="job-title"
                    className="job-title-input"
                    required
                />
                <label className="code-languages-label" htmlFor="code-languages">
                    Code Languages:
                </label>
                <select id="code-languages" className="code-languages-input" onChange={handleSelectChange}>
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
                <br/>
                <label className="workplace-label" htmlFor="workplace-select">
                    Workplace:
                </label>
                <select id="workplace-select" className="workplace-input" onChange={handleSelectChange}>
                    <option value = "home">At Home</option>
                    <option value = "office">On-site</option>
                    <option value = "hybrid">Many Possibilities</option>
                    <option value = "unknown">Other Option</option>
                    required
                </select>
                <label className="tools-label" htmlFor="tools">
                    Tools:
                </label>
                <select id="tools" className="tools-input" onChange={handleSelectChange}>
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
                <br/>
                <label className="job-location-label" htmlFor="job-location">
                    Job location:
                </label>
                <input
                    type="text"
                    id="job-location"
                    name="job-location"
                    className="job-location-input"
                    required
                />
                <label className="developer-exp-amount-label" htmlFor="developer-exp-amount">
                    Developer Experience Amount:
                </label>
                <select id="developer-exp-amount" className="developer-exp-amount-input" onChange={handleSelectChange}>
                    <option value = "junior">Junior</option>
                    <option value = "mid">Mid</option>
                    <option value = "senior">Senior</option>
                    <option value = "unknown">Other</option>
                    required
                </select>
                <br/>
                <label className="job-type-label" htmlFor="job-type">
                    Job Type:
                </label>
                <select id="job-type" className="job-type-input" onChange={handleSelectChange}>
                    <option value = "full-time">Full-time</option>
                    <option value = "part-time">Part-time</option>
                    <option value = "contract">Contract</option>
                    <option value = "temporary">Temporary</option>
                    <option value = "volunteer">Volunteer</option>
                    <option value = "internship">Internship</option>
                    <option value = "unknown">Other</option>
                    required
                </select>
                <br/>
                <label className="job-description-label" htmlFor="job-description">
                    Job Description:
                </label>
                <textarea
                    type="text"
                    id="job-description"
                    name="job-description"
                    className="job-description-input"
                    required
                />
                <button type="submit" className="add-job-button">
                    + Add Job 
                </button>
            </form>
        </div>
    );
};

export default JobPostPage;
