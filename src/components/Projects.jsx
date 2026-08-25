const projects = [
  {
    title: "Food Delivery",
    description:
      "A responsive food delivery web application with a modern user interface and restaurant-focused experience.",
    technologies: ["React", "JavaScript", "CSS"],
    demo: "https://fooddelivery-coral.vercel.app/",
    github: "https://github.com/BittuSingh8",
  },
  {
    title: "HireSense AI",
    description:
      "A Java-based project focused on improving the recruitment and hiring workflow using modern application architecture.",
    technologies: ["Java", "Spring Boot", "MySQL"],
    demo: "#",
    github: "https://github.com/BittuSingh8",
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-heading">
        <p>What I've Built</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              <div className="project-placeholder">
                {project.title}
              </div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="technology-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn primary-btn"
                  >
                    Live Demo
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn secondary-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;