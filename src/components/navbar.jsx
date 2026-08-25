import { useState } from "react";

function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="navbar">
      <a
        href="#home"
        className="logo"
        onClick={() => setMenuOpen(false)}
      >
        Bittu<span>.</span>
      </a>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        {links.map(([name, link]) => (
          <a
            key={name}
            href={link}
            onClick={() => setMenuOpen(false)}
          >
            {name}
          </a>
        ))}
      </nav>

      <div className="navbar-actions">
        <button
          type="button"
          className="theme-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {darkMode ? "??" : "??"}
        </button>

        <button
          type="button"
          className="menu-btn"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "?" : "?"} 
        </button>
      </div>
    </header>
  );
}

export default Navbar;