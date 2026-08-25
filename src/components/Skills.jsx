const skills = [
  "Java",
  "JavaScript",
  "React",
  "HTML5",
  "CSS3",
  "Spring Boot",
  "REST API",
  "MySQL",
  "Git",
  "GitHub",
  "Vite",
  "Responsive Design",
];

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-heading">
        <p>My Technical Knowledge</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;