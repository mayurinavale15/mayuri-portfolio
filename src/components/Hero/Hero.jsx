import "./Hero.css";
import heroImage from "../../assets/hero.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <p className="hero-greeting">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Mayuri Navale</span> 
          </h1>

        <h2>
  <TypeAnimation
    sequence={[
      "FULL Stack Developer",
      2000,
      "MERN Stack Developer",
      2000,
      "FLUTTER Developer",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</h2>

          <p className="hero-description">
            I build responsive and modern web applications using
            HTML, CSS, JavaScript, React.js, Node.js, Express.js
            and MongoDB.
          </p>

          <div className="hero-btn">

            <a
              href="/Mayuri_Resume.pdf"
              download
              className="resume-btn"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="contact-btn"
            >
              Contact Me
            </a>

          </div>

        </div>


        {/* Right Image */}
        <div className="hero-image-container">

          <div className="image-glow"></div>

          <img
            src={heroImage}
            alt="Mayuri"
            className="hero-image"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;