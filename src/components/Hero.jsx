function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-small">Hello, I'm</p>

        <h1>
          Bittu Kumar <span>Singh</span>
        </h1>

        <h2>Java Full Stack Developer</h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly web applications
          using Java, React, JavaScript, Spring Boot and MySQL.
          I enjoy turning ideas into real-world software solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View Projects
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/BittuSingh8"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ?
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ?
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="profile-circle">
          <img
            src="/profile.jpeg"
            alt="Bittu Kumar Singh"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;