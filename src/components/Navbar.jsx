import { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const navigation = [
  { label: "HOME", to: "/" },
  { label: "PROJECTS", to: "/projects" },
  { label: "SERVICES", to: "/services" },
  { label: "GUIDE", to: "/construction-guide" },
  { label: "CALCULATOR", to: "/cost-calculator" },
  { label: "BOQ", to: "/boq-estimation" },
  { label: "ABOUT", to: "/about" },
  { label: "CONTACT", to: "/contact" },
];

function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
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
    closeMenu();
    onOpenQuote();
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/assets/Habtech logo.jpg"
            alt="HABTECH Construction"
          />
        </NavLink>

        <div className="nav-links">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="quote-button"
          onClick={handleQuoteClick}
        >
          Request a quote
        </button>

        <button
          type="button"
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        {navigation.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.label}
          </NavLink>
        ))}

        <button
          type="button"
          className="mobile-quote"
          onClick={handleQuoteClick}
        >
          Request a quote
          <span>→</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
