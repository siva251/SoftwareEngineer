import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content fade-in">
        <h1>
          Hi, I'm <span className="highlight">SIVA KUMAR B</span>
        </h1>
        <h2>
          A Passionate <span className="highlight">Full-Stack Developer</span>
        </h2>
        <p>I love building beautiful and performant web apps using modern technologies.</p>
        <a href="/Sivakumar.pdf" download className="resume-button">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
