import React, { useEffect, useState } from 'react';

const sections = ['home', 'about', 'skills', 'experience', 'resume'];

const Navbar = () => {
  const [active, setActive] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 90;

    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActive(id);
    }
  };

  // Optional: Track active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">SIVA KUMAR B</div>
      <ul className="nav-links">
        {sections.map((sec) => (
          <li key={sec}>
            <button
              onClick={() => scrollToSection(sec)}
              className={`nav-btn ${active === sec ? 'active' : ''}`}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
