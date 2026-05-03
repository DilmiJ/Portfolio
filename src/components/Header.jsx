import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
          <h2>Dilmi Jayanetthi</h2>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
          <ul>
            <li>
              <button onClick={() => scrollToSection("hero")}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("career")}>Career</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("journal")}>Journal</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("certificates")}>Certificates</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("skills")}>Skills</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("experience")}>Experience</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </li>
            <li>
              <a 
                href="/Dilmijayanetthi-ASEBW.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: "var(--primary-color)", 
                  textDecoration: "none", 
                  fontWeight: "bold",
                  border: "1px solid var(--primary-color)",
                  padding: "5px 15px",
                  borderRadius: "20px",
                  marginLeft: "10px"
                }}
              >
                View CV
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
