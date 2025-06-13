import React from 'react';
// import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="timeline">
        <div className="timeline-item ">
          <div className='skill-card'>
          <h3>Software Engineer <span> | Jul 2022 – Present</span></h3>
          <ul>
            <li>Built and maintained reusable, scalable React components for dynamic and interactive web interfaces.</li>
            <li>Developed modular UI components based on JSON configurations for flexibility and reusability.</li>
            <li>Implemented robust state management using Redux and Context API to manage complex data flow.</li>
            <li>Collaborated with product teams and designers to accurately implement user interfaces and UX guidelines.</li>
            <li>Integrated RESTful and GraphQL APIs to power dynamic front-end content.</li>
            <li>Enhanced browser compatibility and responsiveness across devices using SCSS and Material UI.</li>
            <li>Led automated testing efforts using Jest and React Testing Library to improve code quality.</li>
            <li>Participated in Agile ceremonies and contributed to continuous improvement efforts.</li>
          </ul>
          </div>
        </div>

        <div className="timeline-item skill-card">
          <h3>Associate Software Engineer <span> | Jul 2021 – Jul 2022</span></h3>
          <ul>
            <li>Developed modular, responsive user interfaces using React.js, HTML, and CSS3.</li>
            <li>Implemented cross-browser compatible features and ensured accessibility compliance.</li>
            <li>Managed version control using Git and SVN, and collaborated via Jira and Bugzilla.</li>
            <li>Identified UI issues and resolved defects related to responsiveness and data rendering.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
