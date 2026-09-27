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
                Habtech Construction is focused on providing practical construction services
                across planning, estimation, project management, site supervision,
                construction, renovation, and property inspection.
              </p>
              <p>
                Our approach is built around clear planning, responsible execution,
                quality-focused supervision, transparent project information, and
                long-term value for clients and the properties we work on.
              </p>
            </div>

            <div className="blueprint-stats">
              <div className="stat-item">
                <span className="stat-number">01</span>
                <span className="stat-label">PLAN WITH CLARITY</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">02</span>
                <span className="stat-label">BUILD WITH DISCIPLINE</span>
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

      <section className="about-vision-goals">
        <div className="about-vision-goal-card">
          <span className="about-section-kicker">OUR VISION</span>
          <h2>To be a trusted and leading construction company in Nigeria.</h2>
          <p>
            To be a trusted and leading construction company in Nigeria,
            recognized for quality, innovation, and buildings that stand the
            test of time.
          </p>
        </div>

        <div className="about-vision-goal-card">
          <span className="about-section-kicker">OUR GOAL</span>
          <h2>To deliver projects that create lasting value.</h2>
          <p>
            To consistently deliver durable, cost-effective, and high-quality
            projects while building lasting relationships and establishing
            Habtech Construction as a trusted name in the industry.
          </p>
        </div>
      </section>

      <section className="safety-section" id="safety-practices">
        <div className="safety-intro">
          <h2>
            Zero
            <br />
            Compromise
            <br />
            Safety
          </h2>

          <p>
            We treat safety as a core part of responsible construction. Our work
            is guided by project requirements, applicable regulations, site
            procedures, and active supervision.
          </p>

          <a href="#safety-practices" className="safety-link">
            VIEW SAFETY PRACTICES <span>&rarr;</span>
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
              Site activities should be planned and checked before work begins,
              with issues documented and addressed as the project progresses.
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
              Active site supervision helps identify construction concerns early
              and keeps important issues visible to the project team.
            </p>
          </div>

          <div className="safety-card">
            <div className="safety-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b00" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3>Quality & Safety Checks</h3>
            <p>
              Project activities can be reviewed against drawings, specifications,
              safety requirements, and agreed execution standards.
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
            <h3>Responsible Execution</h3>
            <p>
              We emphasise careful coordination, documentation, supervision, and
              responsible execution throughout the construction process.
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
