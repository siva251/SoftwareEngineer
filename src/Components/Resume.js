import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <p>You can view or download my resume below.</p>

      <div className="resume-viewer">
        <iframe
          src="/Sivakumar.pdf"
  title="Resume"
  frameBorder="0"
  width="100%"
  height="600px"
  onError={() => alert("Resume preview failed. Please use the download button.")}
        ></iframe>
      </div>

      <a href="/Sivakumar.pdf" download className="resume-button">
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
