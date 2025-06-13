import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Resume from './Components/Resume';
import ThemeToggle from './Components/ThemeToggle';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Navbar />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Resume />
    </div>
  );
}

export default App;
