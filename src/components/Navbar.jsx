import { useEffect, useState } from "react";
import "./Navbar.css";
import RequestQuote from "./RequestQuote";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleQuoteClick = () => {
    setMenuOpen(false);
    setQuoteOpen(true);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* HABTECH Logo */}
        <NavLink
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src="/assets/Habtech logo.jpg"
            alt="HABTECH Construction"
          />
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            HOME
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            PROJECTS
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            SERVICES
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            CONTACT
          </NavLink>

          {/* CHANGED FROM <a href="#blog"> TO NavLink */}
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            BLOG
          </NavLink>
        </div>

        {/* DESKTOP REQUEST QUOTE */}
        <button
          type="button"
          className="quote-button"
          onClick={() => setQuoteOpen(true)}
        >
          Request a quote
        </button>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <NavLink
          to="/"
          end
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          HOME
        </NavLink>

        <NavLink
          to="/projects"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          PROJECTS
        </NavLink>

        <NavLink
          to="/about"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          ABOUT
        </NavLink>

        <NavLink
          to="/services"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          SERVICES
        </NavLink>

        <NavLink
          to="/contact"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          CONTACT
        </NavLink>

        <NavLink
          to="/blog"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          BLOG
        </NavLink>
      </div>

      {/* REQUEST QUOTE MODAL */}
      <RequestQuote
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </nav>
  );
}

export default Navbar;