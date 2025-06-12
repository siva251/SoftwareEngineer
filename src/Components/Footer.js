import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <p className="footer-name">© {new Date().getFullYear()} <strong>Siva Kumar B</strong></p>
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
    </footer>
  );
};

export default Footer;
