import { useEffect } from "react";
import "./Projects.css";

import pgFinder from "../../assets/pg-finder.png";
import powWow from "../../assets/pow-wow.png";

function Projects() {
  const projects = [
    {
      title: "PG Finder",
      category: "PYTHON PROJECT",
      description:
        "A web application designed to help users find suitable PG accommodations with search, location, PG listing and management features.",
      technologies: [
        "Python",
        "Flask",
        "SQLite",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      image: pgFinder,
      github: "#",
    },

    {
      title: "AI Resume Builder",
      category: "MERN STACK",
      description:
        "An AI-powered resume builder designed to help users create professional resumes with authentication, resume management and PDF generation.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      image: null,
      github: "#",
      liveDemo: "#",
      status: "Under Development",
    },

    {
      title: "Pow Wow Pet Care",
      category: "MERN STACK | E-COMMERCE",
      description:
        "An e-commerce website and mobile application for pet products and pet care services with online payment integration.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Flutter",
        "Razorpay",
      ],
      image: powWow,
      github: "#",
      liveDemo: "https://stagingpawwow.softgridinfo.in",
    },
  ];

  /* =========================
     SCROLL REVEAL
  ========================= */

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

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
    <section className="projects" id="projects">

      {/* =========================
          HEADING
      ========================= */}

      <div className="projects-heading">
        <p>MY WORK</p>

        <h2>Featured Projects</h2>

        <span>
          A selection of projects I have worked on using modern
          development technologies.
        </span>
      </div>

      {/* =========================
          PROJECTS
      ========================= */}

      <div className="projects-container">

        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{
              transitionDelay: `${index * 0.15}s`,
            }}
          >

            {/* Image */}

            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            ) : (
              <div className="project-placeholder">
                <span>Under Development</span>
              </div>
            )}

            {/* Content */}

            <div className="project-content">

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              {/* Technologies */}

              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}

              <div className="project-buttons">

                {/* Under Development */}
                {project.status ? (
                  <span className="development-btn">
                    {project.status}
                  </span>
                ) : (
                  <>
                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>

                    {/* Live Demo only if available */}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </>
                )}

              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;