function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#home" className="logo">
          Bittu<span>.</span>
        </a>

        <p>
          Java Full Stack Developer passionate about building
          modern and reliable web applications.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/BittuSingh8"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="#contact">
            Email
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Bittu Kumar Singh. All rights reserved.
        </p>

        <a href="#home">
          Back to top ?
        </a>
      </div>
    </footer>
  );
}

export default Footer;