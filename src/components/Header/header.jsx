import { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
  let lastScroll = window.scrollY;

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    // Show on scroll up
    if (currentScroll < lastScroll) {
      setShowHeader(true);
    }
    // Hide on scroll down
    else if (currentScroll > lastScroll) {
      setShowHeader(false);
    }

    lastScroll = currentScroll;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${showHeader ? "visible" : "hidden"}`}>
      <nav className="navbar">
        {/* Hamburger menu button for mobile */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          &#9776;
        </div>

        {/* Navigation links */}
        <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <a href="#about"><button>About Me</button></a>
          <a href="#gallery"><button>Gallery</button></a>
          <a href="#services"><button>Services</button></a>
          <a href="#contact"><button className="contact-btn">Contact Me</button></a>
        </div>
      </nav>
    </header>
  );
}
