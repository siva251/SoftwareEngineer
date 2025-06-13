import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content fade-in">
        <h1>
          Hi, I'm <span className="highlight">SIVA KUMAR B</span>
        </h1>
        <h1>
          A Passionate <span className="highlight">Full-Stack Developer</span>
        </h1>
        <p>I love building beautiful and performant web apps using modern technologies.</p>
         <div className="footer-icons">
                  <a href="https://github.com/your-username" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/sivakumar404" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="mailto:sivakumarsoftwareengineer@email.com" aria-label="Email">
                    <FaEnvelope />
                  </a>
                </div>
      </div>
    </section>
  );
};

export default Home;
