function About() {
  return (
    <section id="about" className="section about">
      <div className="section-heading">
        <p>Get To Know Me</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>I'm a passionate developer.</h3>

          <p>
            I am a developer interested in creating reliable and
            user-friendly web applications. I enjoy solving programming
            problems and turning ideas into real-world applications.
          </p>

          <p>
            My development experience includes Java, Spring Boot,
            JavaScript, React, HTML, CSS and MySQL. I also work with
            Git and GitHub for version control and project deployment.
          </p>

          <a href="/resume.pdf" download className="btn primary-btn">
            Download Resume
          </a>
        </div>

        <div className="about-cards">
          <div className="info-card">
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML, CSS</p>
          </div>

          <div className="info-card">
            <h3>Backend</h3>
            <p>Java, Spring Boot, REST APIs</p>
          </div>

          <div className="info-card">
            <h3>Database</h3>
            <p>MySQL</p>
          </div>

          <div className="info-card">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;