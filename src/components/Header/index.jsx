import React, { useState } from "react";
import "./header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-content-top">
          <a href="/" className="logo-link">
            <img className="header-logo" src="images/logo.png" alt="Logo" />
          </a>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger"></span>
          </button>
        </div>

        <nav className={`header-nav ${isMenuOpen ? "is-open" : ""}`}>
          <a href="/">Dados Históricos</a>
          <a href="/currentData">Dados Atuais</a>
        </nav>
      </div>
    </header>
  );
}
