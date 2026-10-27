import "./Education.css";

const educationData = [
  {
    year: "2022 – 2025",
    title: "Bachelor of Computer Applications (BCA)",
    institute: "S.M. Joshi College",
    result: "CGPA: 8.40",
    description:
      "Learned programming, web development, databases, and software development fundamentals.",
  },
  {
    year: "2021 – 2022",
    title: "Higher Secondary Certificate (HSC)",
    institute: "RR Shinde College",
    result: "65%",
    description:
      "Built a foundation for higher education and computer science learning.",
  },
  {
    year: "2019 – 2020",
    title: "Secondary School Certificate (SSC)",
    institute: "CBT Sadhana School",
    result: "89.40%",
    description:
      "Completed secondary education and developed essential academic skills.",
  },
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <p className="education-subtitle">MY QUALIFICATIONS</p>

        <h2 className="education-heading">
          Education <span>Journey</span>
        </h2>

        <p className="education-intro">
          My academic journey and the foundation of my development career.
        </p>

        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div className="education-item" key={index}>
              <div className="education-marker">
                <span>{index + 1}</span>
              </div>

              <div className="education-card">
                <span className="education-year">{item.year}</span>

                <h3>{item.title}</h3>

                <h4>{item.institute}</h4>

                <p className="education-result">{item.result}</p>

                <p className="education-description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
