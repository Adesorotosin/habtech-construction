import "./Footer.css";

function Footer() {
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
            Engineering solutions for complex structural challenges.
            Licensed globally for industrial and commercial excellence.
          </p>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h3>QUICK LINK</h3>

          <div className="footer-links">
            <a href="#contact">Bidding Portals</a>
            <a href="#services">Safety Standards</a>
            <a href="#services">Sustainability</a>
            <a href="#contact">Careers</a>
          </div>

        </div>


        {/* Contact */}
        <div className="footer-column footer-contact">

          <h3>CONTACT</h3>

          <div className="contact-item">

            <span className="contact-icon">⌖</span>

            <p>
              123, Industrial Road,
              <br />
              Ibadan
            </p>

          </div>


          <div className="contact-item">

            <span className="contact-icon">♧</span>

            <a href="tel:+2347058175108">
              +234 7058175108
            </a>

          </div>

        </div>

      </div>


      {/* Copyright */}
      <div className="footer-bottom">

        <p>
          © 2035 Habtech Construction. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;