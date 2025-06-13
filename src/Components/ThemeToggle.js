import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';


const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="theme-toggle">
      {darkMode ? (
        <FaSun onClick={() => setDarkMode(false)} title="Switch to Light Mode" />
      ) : (
        <FaMoon onClick={() => setDarkMode(true)} title="Switch to Dark Mode" />
      )}
    </div>
  );
};

export default ThemeToggle;
