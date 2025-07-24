import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import "./header.css";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isBlog = location.pathname.startsWith("/blog");

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < lastScroll) {
        setShowHeader(true);
      } else if (currentScroll > lastScroll) {
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
        {/* Hamburger menu for mobile */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          &#9776;
        </div>

        {/* Navigation links */}
        <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          {isBlog ? (
            <>
              <Link to="/"><button>Home</button></Link>
              <a href="https://my-social-card-mauve.vercel.app/" target="_blank" rel="noreferrer">
                <button className="contact-btn">My Socials</button>
              </a>
            </>
          ) : (
            <>
              <a href="#about"><button>About Me</button></a>
              <a href="#gallery"><button>Gallery</button></a>
              <a href="#services"><button>Services</button></a>
              <Link to="/blog"><button>Blog</button></Link>
              <a href="https://my-social-card-mauve.vercel.app/" target="_blank" rel="noreferrer">
                <button className="contact-btn">My Socials</button>
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
