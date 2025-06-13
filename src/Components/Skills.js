import React from 'react';
// import './Skills.css';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaJs, FaGitAlt, FaSass 
} from 'react-icons/fa';
import {
  SiRedux, SiMui, SiJest
} from 'react-icons/si';

const skills = [
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    description: <p>
    I have strong expertise in <strong> Semantic HTML</strong>, using meaningful tags like 
    <code> &lt;section&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;article&gt;</code> to enhance 
    accessibility and SEO. I'm proficient in building <strong> interactive forms</strong> with input 
    validations using HTML5 attributes such as <code>required</code>, <code>pattern</code>, and 
    <code> min/max</code>. I have hands-on experience embedding multimedia content, including 
    <strong> images</strong>, <strong> videos</strong>, and <strong> audio</strong>, and I structure data 
    effectively using <strong> HTML tables</strong> with proper semantic tags.
  </p>
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS3",
    description: <p>
    I have solid expertise in writing clean and scalable <strong> CSS</strong> for responsive and modern UI designs. 
    I'm proficient in <strong> Flexbox</strong> and <strong> CSS Grid</strong> for creating flexible layouts, 
    and I ensure mobile-first responsiveness using <strong> media queries</strong>. 
    I use <strong> CSS variables</strong> and organize styles using 
    <strong> modular, maintainable architecture</strong> for large projects. 
    I'm comfortable working with <strong> preprocessors like SCSS</strong>, applying nesting, mixins, and partials for cleaner code.
  </p>
  },
  {
    icon: <FaSass />,
    title: "Sass / SCSS",
    description: <p>
    I'm highly proficient in <strong> SASS/SCSS</strong>, leveraging its advanced features to write clean, 
    reusable, and maintainable stylesheets. I use <strong> variables</strong> to maintain consistent colors, 
    spacing, and typography across the project, and <strong> nesting</strong> to reflect HTML structure in a 
    clear and readable way. I organize styles using <strong> partials</strong> and the  <code>@import</code> / <code>@use</code> directives, keeping code modular and scalable.
  </p>
  },
  {
    icon: <FaJs />,
    title: "JavaScript (ES6+)",
    description: <p>
    I have strong expertise in modern <strong> JavaScript (ES6 and beyond)</strong>, with a deep understanding of concepts like 
    <strong> var/ let / const</strong>, <strong> arrow functions</strong>, <strong> template literals</strong>, and <strong> destructuring</strong>. 
    I'm proficient in working with <strong> array methods</strong> such as <code>map()</code>, <code>filter()</code>, 
    <code>reduce()</code>, and <code>forEach()</code> for efficient data manipulation. I utilize  
    <strong>  spread/rest operators</strong>, <strong> default parameters</strong>, and <strong> object shorthand </strong>  
    to write clean and expressive code.
  </p>
  },
  {
    icon: <FaReact />,
    title: "React.js",
    description: <p>
    I specialize in building responsive and dynamic <strong> Single Page Applications (SPAs)</strong> using 
    <strong>  React.js</strong>. I'm well-versed in using <strong>  functional components</strong> and modern 
    React features like <code>useState</code>, <code>useEffect</code>, <code> useContext</code>, and 
    <code>useRef</code> to manage component state and side effects effectively. I implement efficient routing 
    using <strong>  React Router</strong>, enabling seamless navigation and nested route handling.
  </p>
  },
  {
    icon: <SiRedux />,
    title: "Redux / Context API",
    description: <p>
    I have in-depth experience using <strong> Redux</strong> and <strong> Redux Toolkit</strong> for efficient 
    <strong> state management</strong> in complex React applications. I understand core concepts like 
    <strong> actions</strong>, <strong> reducers</strong>, <strong> dispatch</strong>, and <strong> store</strong>, 
    and use <strong> Redux DevTools</strong> for debugging and tracking state changes.
  </p>
  },
  {
    icon: <SiMui />,
    title: "Material-UI",
    description: <p>
    I have hands-on experience working with <strong> Material-UI (MUI)</strong>, a popular React UI framework, 
    to build visually appealing, responsive, and consistent user interfaces. I utilize its 
    <strong> pre-built components</strong> such as <strong> Buttons</strong>, <strong> Cards</strong>, 
    <strong> Dialogs</strong>, <strong> Grids</strong>, and <strong> AppBars</strong> to accelerate development 
    and maintain design consistency.
  </p>
  },
  {
    icon: <SiJest />,
    title: "Jest & Testing Library",
    description: <p>
    I have practical experience using <strong> Jest</strong>, a robust JavaScript testing framework, for writing 
    <strong> unit tests</strong> and ensuring application reliability. I’m proficient in testing 
    <strong> React components</strong>, <strong> functions</strong>, and <strong> Redux logic</strong> using 
    <strong> mocking</strong>, <strong> spies</strong>, and <strong> snapshot testing</strong>.
  </p>
  },
  {
    icon: <FaGitAlt />,
    title: "GitHub / GitLab",
    description: <p>
    I am proficient in using <strong> Git</strong> for version control, enabling efficient collaboration 
    and code management throughout the development lifecycle. I actively use <strong> GitHub</strong> and 
    <strong>  GitLab</strong> to host repositories, manage branches, handle pull/merge requests, and resolve conflicts.
  </p>
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section ">
      <h2>My Skills</h2>
      <div className="skills-grid ">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card info-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
