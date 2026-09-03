import React from "react";
import "./Services.css";
import { HardHat } from "lucide-react";

function Services() {
  return (
    <div className="services-container">
      {/* HERO SECTION */}
      <section className="services-hero">
        <div className="services-hero-left">
          <span className="capabilities-badge">CAPABILITIES & EXPERTISE</span>
          <h1 className="services-title">
            ENGINEERING
            <br />
            PERMANENCE.
          </h1>
          <p className="services-description">
            We don’t just build structures; we establish foundations for
            industry, commerce, and life. Our methodology merges architectural
            precision with heavy-duty execution.
          </p>
        </div>

        <div className="services-hero-right">
          <div className="services-image-wrapper">
            <img
              src="/assets/Architectural blueprint.avif"
              alt="Architectural Blueprint Drawing"
            />
          </div>
        </div>
      </section>

       {/* SERVICES GRID SECTION */}
<section className="services-grid-section">
  {/* RESIDENTIAL CARD (Light Theme) */}
  <div className="service-card service-card-light">
    <div className="card-header">
      <svg className="card-icon blue-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-7-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
      </svg>
      <h2>RESIDENTIAL</h2>
    </div>

    <p className="card-desc">
      Bespoke estate development and high-density luxury residential complexes.
      We prioritize structural integrity and aesthetic longevity, ensuring homes
      that withstand generations.
    </p>

    <ul className="service-list">
      <li>- CUSTOM ESTATES</li>
      <li>- MULTI-FAMILY COMPLEXES</li>
      <li>- SUSTAINABLE DWELLINGS</li>
    </ul>

    <div className="card-image-container">
      <img
        src="/assets/Residential_11.avif"
        alt="HABTECH Residential Project"
      />
    </div>
  </div>

  {/* COMMERCIAL CARD (Dark Navy Theme) */}
  <div className="service-card service-card-dark">
    <div className="card-content-left">
      <div className="card-header">
        <svg className="card-icon orange-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm3 4v2h2V6H7zm0 4v2h2v-2H7zm0 4v2h2v-2H7zm6-8v2h2V6h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2z"/>
        </svg>
        <h2>COMMERCIAL INFRASTRUCTURE</h2>
      </div>

      <p className="card-desc text-light">
        From Grade-A office towers to expansive retail hubs. Our commercial division
        focuses on rapid deployment without compromising the massive-scale precision
        required for modern business environments.
      </p>

      <div className="tag-group">
        <span className="tag">OFFICE TOWERS</span>
        <span className="tag">RETAIL ANCHORS</span>
        <span className="tag">HOSPITALITY</span>
      </div>
    </div>

    <div className="card-image-right">
      <img
        src="/assets/Commercial infrastructure.avif"
        alt="Commercial Site Laser Level Alignment"
      />
    </div>
  </div>
</section>

{/* INDUSTRIAL & PROJECT MANAGEMENT SECTION */}
<section className="services-secondary-grid">
  {/* INDUSTRIAL STRENGTH CARD */}
  <div className="secondary-card industrial-card">
    <div className="industrial-content">
      <div className="card-header">
        {/* Factory Icon */}
        <HardHat className="card-icon dark-icon" size={38} />
        <h2>INDUSTRIAL STRENGTH</h2>
      </div>

      <p className="card-desc">
        Specialized facilities including logistics centers, manufacturing plants, and heavy processing units. We utilize reinforced concrete and structural steel systems designed for high-load performance.
      </p>

      {/* Progress Bar Component */}
      <div className="progress-container">
        <div className="progress-bar-bg">
          <div className="progress-bar-fill"></div>
        </div>
        <span className="progress-label">INDUSTRIAL LOAD CAPACITY: 98% OPTIMIZED</span>
      </div>
    </div>

    <div className="industrial-image-wrapper">
      <img
        src="/assets/industrial-site.jpg"
        alt="Industrial Foundation Groundwork"
      />
    </div>
  </div>

  {/* PROJECT MANAGEMENT CARD */}
  <div className="secondary-card management-card">
    <div className="card-header">
      {/* Orange Grid/Nodes Icon */}
      <svg className="card-icon orange-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zm0 10h6v6h-6v-6zM4 14h6v6H4v-6z"/>
      </svg>
      <h2>PROJECT MANAGEMENT</h2>
    </div>

    <p className="card-desc">
      Our digital-first oversight ensures absolute compliance with budgets and timelines. We act as the central nervous system for complex multi-stakeholder sites.
    </p>

    <a href="#process" className="learn-process-link">
      LEARN PROCESS <span>→</span>
    </a>
  </div>
</section>

{/* STRUCTURAL REBIRTH SECTION */}
<section className="rebirth-section-wrapper">
  <div className="rebirth-section">
    {/* LEFT COLUMN: TITLE & STAT CARD */}
    <div className="rebirth-left">
      <h2 className="rebirth-title">
        STRUCTURAL
        <br />
        <span className="orange-text">REBIRTH</span>
      </h2>

      <p className="rebirth-description">
        We specialize in breathing new life into aging structures through forensic
        engineering and modern architectural retrofitting.
      </p>

      <div className="stat-card">
        <h3 className="stat-number">15+</h3>
        <p className="stat-label">HISTORIC RESTORATIONS COMPLETED</p>
      </div>
    </div>

    {/* RIGHT COLUMN: STACKED SERVICE CARDS */}
    <div className="rebirth-right">
      {/* CARD 1: ADAPTIVE REUSE */}
      <div className="rebirth-card">
        <div className="rebirth-card-img">
          <img src="/assets/adaptive.avif" alt="Adaptive Reuse Interior" />
        </div>
        <div className="rebirth-card-content">
          <h3>ADAPTIVE REUSE</h3>
          <p>
            Converting industrial warehouses into modern living spaces or retail
            zones requires a delicate balance of heritage preservation and
            technological integration.
          </p>
          <div className="orange-check-list">
            <span className="check-item">
              <svg className="verify-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 12l-2.44-2.79.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.53 6.71 4.71l-3.61.81.34 3.68L1 12l2.44 2.79-.34 3.68 3.61.82 1.89 3.18L12 21l3.4 1.47 1.89-3.18 3.61-.82-.34-3.68L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              STRUCTURAL REINFORCEMENT
            </span>
            <span className="check-item">
              <svg className="verify-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 12l-2.44-2.79.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.53 6.71 4.71l-3.61.81.34 3.68L1 12l2.44 2.79-.34 3.68 3.61.82 1.89 3.18L12 21l3.4 1.47 1.89-3.18 3.61-.82-.34-3.68L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              CODE COMPLIANCE
            </span>
          </div>
        </div>
      </div>

      {/* CARD 2: SEISMIC RETROFITTING */}
      <div className="rebirth-card">
        <div className="rebirth-card-img">
          <img src="/assets/portfolio_1.avif" alt="Seismic Retrofitting Groundwork" />
        </div>
        <div className="rebirth-card-content">
          <h3>SEISMIC RETROFITTING</h3>
          <p>
            Enhancing existing buildings to be more resistant to seismic activity.
            We use advanced damper systems and carbon-fiber reinforcement
            techniques.
          </p>
          <div className="orange-check-list">
            <span className="check-item">
              <svg className="verify-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 12l-2.44-2.79.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.53 6.71 4.71l-3.61.81.34 3.68L1 12l2.44 2.79-.34 3.68 3.61.82 1.89 3.18L12 21l3.4 1.47 1.89-3.18 3.61-.82-.34-3.68L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              VIBRATION ANALYSIS
            </span>
            <span className="check-item">
              <svg className="verify-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 12l-2.44-2.79.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.53 6.71 4.71l-3.61.81.34 3.68L1 12l2.44 2.79-.34 3.68 3.61.82 1.89 3.18L12 21l3.4 1.47 1.89-3.18 3.61-.82-.34-3.68L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              STEEL BRACING
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* THE BLUEPRINT FOR SUCCESS SECTION */}
<section className="blueprint-section">
  <h2 className="blueprint-title">THE BLUEPRINT FOR SUCCESS</h2>

  <div className="blueprint-grid">
    {/* STEP 01 */}
    <div className="blueprint-card">
      <span className="step-number">01</span>
      <h3>DISCOVERY</h3>
      <p>
        Defining site feasibility, regulatory constraints, and initial
        architectural vision.
      </p>
    </div>

    {/* STEP 02 */}
    <div className="blueprint-card">
      <span className="step-number">02</span>
      <h3>ENGINEERING</h3>
      <p>
        Deep-dive structural calculations and material sourcing logistics.
      </p>
    </div>

    {/* STEP 03 */}
    <div className="blueprint-card">
      <span className="step-number">03</span>
      <h3>EXECUTION</h3>
      <p>
        On-site construction led by specialized foremen and technical crews.
      </p>
    </div>

    {/* STEP 04 */}
    <div className="blueprint-card">
      <span className="step-number">04</span>
      <h3>HANDOVER</h3>
      <p>
        Post-build audit, safety certification, and facility operationalization.
      </p>
    </div>
  </div>
</section>
    </div>

    
  );

 
}

export default Services;