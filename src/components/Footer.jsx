import "./Footer.css";
import { Link } from "react-router-dom";

function Footer({ onOpenQuote }) {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <img
            src="/assets/Habtech logo.jpg"
            alt="HABTECH Construction"
            className="footer-logo"
          />

          <p>
            Practical construction support for planning, estimation,
            construction, supervision, renovation, and property improvement.
          </p>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h3>QUICK LINK</h3>

          <div className="footer-links">
            <Link to="/services">Services</Link>
            <Link to="/construction-guide">Construction Guide</Link>
            <Link to="/cost-calculator">Cost Calculator</Link>
            <Link to="/boq-estimation">BOQ & Estimation</Link>
            <Link to="/contact">Contact</Link>
          </div>

        </div>


        {/* Contact */}
        <div className="footer-column footer-contact">

          <h3>CONTACT</h3>

          <div className="contact-item">

            <span className="contact-icon" aria-hidden="true">
              ◎
            </span>

            <a
              href="https://www.instagram.com/habtechenterprise?stkn=am9sYmdubjZmbHVl&utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

          </div>


          <div className="contact-item">

            <span className="contact-icon" aria-hidden="true">♧</span>

            <a href="tel:+2348143111188">
              +234 814 311 1188
            </a>

          </div>

          <button type="button" className="footer-quote-button" onClick={onOpenQuote}>
            Request a Quote
          </button>

        </div>

      </div>


      {/* Copyright */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Habtech Construction. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;