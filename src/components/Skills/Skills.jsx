import { useEffect } from "react";
import "./Skills.css";

function Skills() {

  const skills = [
    {
      title: "Frontend",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    },
    {
      title: "Backend",
      technologies: ["Node.js", "Express.js", "Python", "Flask"],
    },
    {
      title: "Database",
      technologies: ["MongoDB", "SQL", "SQLite"],
    },
    {
      title: "Tools",
      technologies: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Tailwind CSS",
        "Jira",
        "Bootstrap",
      ],
    },
  ];

  /* =========================
     SCROLL REVEAL
  ========================= */

  useEffect(() => {

    const cards = document.querySelectorAll(".skill-card");

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }

        });

      },
      {
        threshold: 0.15,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();

  }, []);

  return (
    <section className="skills" id="skills">

      {/* =========================
          HEADING
      ========================= */}

      <div className="skills-heading">

        <p>MY SKILLS</p>

        <h2>Technologies I Work With</h2>

        <span>
          Technologies and tools I use to build modern web applications.
        </span>

      </div>


      {/* =========================
          SKILLS CONTAINER
      ========================= */}

      <div className="skills-container">

        {skills.map((skill, index) => (

          <div
            className="skill-card"
            key={index}
          >

            <h3>{skill.title}</h3>

            <div className="skill-list">

              {skill.technologies.map((tech, techIndex) => (

                <span key={techIndex}>
                  {tech}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;