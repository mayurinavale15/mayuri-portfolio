import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Name */}
        <div className="footer-brand">
          <h3>Mayuri Navale</h3>
          <p>Full Stack Developer</p>
        </div>


        {/* Social Icons */}
        <div className="footer-social">

          <a
            href="https://github.com/mayurinavale15"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mayuri-navale-148927314/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          {/* <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
          >
            <FaTelegramPlane />
          </a> */}

        </div>

      </div>


      <div className="footer-bottom">
        <p>
          © 2026 Mayuri Rajendra Navale. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;