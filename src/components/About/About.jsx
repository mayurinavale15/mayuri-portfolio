import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      {/* Heading */}
      <div className="about-heading">
        <p>ABOUT ME</p>
        <h2>Full Stack Developer</h2>
      </div>

      {/* About Content */}
      <div className="about-container">

        <div className="about-content">

          <p>
            I am a BCA graduate with a strong interest in web development.
            I enjoy creating clean, responsive and user-friendly web
            applications using modern technologies.
          </p>

          <p>
            I have completed a 3-month internship where I gained
            practical experience working on real-world MERN stack projects.
          </p>

        </div>

        {/* Skills */}
        <div className="about-info">

          <div className="info-card">
            <h4>Frontend</h4>
            <p>HTML, CSS, JavaScript, React.js</p>
          </div>

          <div className="info-card">
            <h4>Backend</h4>
            <p>Node.js, Express.js, Python, Flask</p>
          </div>

          <div className="info-card">
            <h4>Database</h4>
            <p>MongoDB, SQL, SQLite</p>
          </div>

          <div className="info-card">
            <h4>Tools</h4>
            <p>Git, GitHub, VS Code, Postman, Jira, Tailwind CSS, Bootstrap</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;