import React from "react";
import "./Contact.css";

const Contact = ({ onOpenQuote }) => {
  return (
    <div className="contact-page-wrapper">
      {/* ================= HERO SECTION ================= */}
      <section className="contact-hero-container">
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="contact-hero-content">
          <span className="badge-tag">ESTABLISH CONNECTION</span>

          <h1 className="contact-hero-title">
            BUILDING THE
            <br />
            <span className="light-title">DIALOGUE.</span>
          </h1>

          <p className="contact-hero-description">
            Every great structure begins with a conversation. Reach out to our
            engineering and project management teams to start your next landmark.
          </p>
        </div>

        {/* RIGHT COLUMN: SITE IMAGE */}
        <div className="contact-hero-image-wrapper">
          <img
            src="/assets/contact.avif"
            alt="Construction worker on site reinforcement"
          />
        </div>
      </section>

      {/* ================= DETAILS & FORM SECTION ================= */}
      <section className="contact-details-section">
        <div className="contact-details-grid">
          {/* LEFT COLUMN: OFFICE & CONTACT CARDS */}
          <div className="contact-cards-left">
            <span className="small-brown-label">PRIMARY OFFICE</span>

            <div className="office-card">
              <h3>Central Engineering Hub</h3>
              <p>Ibadan, Nigeria</p>
            </div>

            <div className="contact-sub-cards">
              <div className="info-card">
                <svg
                  className="info-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="info-label">DIRECT LINE</span>
                <p className="info-value">+234 814 311 1188</p>
              </div>

              <div className="info-card">
                <svg
                  className="info-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="info-label">INQUIRIES</span>
                <p className="info-value email-value">
                  habtechconstruction<br />@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: REQUEST A QUOTE FORM */}
          <div className="quote-form-card">
            <div className="top-brown-bar"></div>

            <div className="form-content">
              <h2 className="form-title">Request a Quote</h2>

              <div className="contact-quote-intro">
                <p>
                  Tell us about your project and the Habtech team can review the
                  scope, location, project stage, budget, and available drawings.
                </p>
                <button
                  type="button"
                  className="submit-inquiry-btn"
                  onClick={onOpenQuote}
                >
                  OPEN FULL QUOTE REQUEST
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= METRICS / STATS BANNER (AFTER FORM) ================= */}
      <section className="contact-stats-section">
        <div className="contact-stats-grid">
          <div className="stat-item">
            <h2 className="stat-number">01</h2>
            <p className="stat-label">PROJECT PLANNING</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">02</h2>
            <p className="stat-label">SITE SUPERVISION</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">03</h2>
            <p className="stat-label">BOQ & ESTIMATION</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">04</h2>
            <p className="stat-label">PROPERTY INSPECTION</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;