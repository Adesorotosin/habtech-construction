import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About({ onOpenQuote }) {
  return (
    <main className="about-container">
      <section className="about-hero">
        <div className="about-hero-left">
          <span className="est-badge">EST 2023</span>
          <h1 className="about-title">
            BUILT FOR
            <br />
            <span className="title-muted">PERMANENCE.</span>
          </h1>
          <p className="about-description">
            We don’t just assemble structures; we engineer legacies. For years,
            Habtech Construction has defined the skyline through rigorous
            precision and an uncompromising commitment to the craft of
            construction.
          </p>
        </div>

        <div className="about-hero-right">
          <div className="about-image-wrapper">
            <img
              src="/assets/portfolio_1.avif"
              alt="Habtech construction workers on site"
            />
          </div>
        </div>
      </section>

      <section className="about-blueprint-section">
        <div className="blueprint-left">
          <div className="blueprint-accent-bar"></div>
          <div className="blueprint-main">
            <h2>Our Three-Year Blueprint</h2>

            <div className="blueprint-columns">
              <p>
                Founded in 2023 by Habeeb Kareem, Habtech Construction began as a
                specialized masonry firm. Our early obsession with structural
                integrity led to pioneering techniques in reinforced concrete that set
                industry benchmarks.
              </p>
              <p>
                Today, we have evolved into a full-scale industrial contractor.
                While the technology has changed, our founding principle remains: if
                it is worth building, it is worth building for a century.
              </p>
            </div>

            <div className="blueprint-stats">
              <div className="stat-item">
                <span className="stat-number">36+</span>
                <span className="stat-label">PROJECT COMPLETED</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1M</span>
                <span className="stat-label">SAFE WORK HOURS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mission-card">
          <div className="mission-icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff6b00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M19 8l3 3-3 3" />
              <line x1="15" y1="11" x2="22" y2="11" />
            </svg>
          </div>

          <h3>Our Mission</h3>

          <p className="mission-quote">
            &ldquo;To engineer safety into every joint, and purpose into every
            project, ensuring that every structure we touch becomes a permanent
            asset to the community it serves.&rdquo;
          </p>
        </div>
      </section>

      <section className="safety-section">
        <div className="safety-intro">
          <h2>
            Zero
            <br />
            Compromise
            <br />
            Safety
          </h2>

          <p>
            Our safety record isn’t a statistic; it’s a moral obligation. We operate
            under the Thorne Protocol— a proprietary safety framework that exceeds
            OSHA standards by 40%.
          </p>

          <a href="#safety-reports" className="safety-link">
            VIEW SAFETY REPORTS <span>&rarr;</span>
          </a>
        </div>

        <div className="safety-grid">
          <div className="safety-card">
            <div className="safety-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b00" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <h3>Daily Audit System</h3>
            <p>
              Every site undergoes a three-tier digital inspection before work
              begins each morning.
            </p>
          </div>

          <div className="safety-card">
            <div className="safety-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b00" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3>Proactive Monitoring</h3>
            <p>
              Utilizing AI-driven site monitoring to identify potential hazards before
              they become incidents.
            </p>
          </div>

          <div className="safety-card">
            <div className="safety-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b00" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3>Advanced Certification</h3>
            <p>
              100% of our field supervisors are OSHA-30 certified with specialized
              heavy-lift training.
            </p>
          </div>

          <div className="safety-card">
            <div className="safety-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b00" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <line x1="12" y1="8" x2="12" y2="14" />
                <line x1="9" y1="11" x2="15" y2="11" />
              </svg>
            </div>
            <h3>Thorne Protocol</h3>
            <p>
              Our internal standards for structural integrity testing exceed municipal
              requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>
          Ready to Build for the Next<br />
          Century?
        </h2>
        <p>Partner with the firm that values stability as much as you do.</p>
        
        <div className="cta-actions">
          <button
            type="button"
            className="btn-primary"
            onClick={onOpenQuote}
          >
            START A BID REQUEST
          </button>
          <Link to="/projects" className="btn-secondary">
            VIEW OUR PROJECTS
          </Link>
        </div>
      </section>
    </main>
  );
}
