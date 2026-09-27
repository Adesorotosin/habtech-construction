import { ArrowUpRight, Calculator, ClipboardList, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Capabilities from "./Capabilities";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import "./Home.css";

const GUIDE_PREVIEWS = [
  {
    category: "Building Construction",
    title: "What to Know Before Starting a Building Project",
    text: "Understand scope, drawings, approvals, professionals and construction stages before work begins.",
  },
  {
    category: "Cost & Estimation",
    title: "Why Construction Cost Estimates Change",
    text: "See how scope, design information, market prices and project decisions affect your estimate.",
  },
  {
    category: "Site Management",
    title: "What Good Site Supervision Looks Like",
    text: "Learn how supervision helps coordinate work, monitor quality and keep projects moving.",
  },
];

function Home({ onOpenQuote }) {
  return (
    <main className="home-page">
      <section className="home-hero-wrap">
        <div className="home-hero-content">
          <span className="home-eyebrow">BUILDING WITH PURPOSE</span>
          <h1>
            CONSTRUCTION
            <br />
            <span>BUILT AROUND YOU.</span>
          </h1>
          <p>
            From planning and estimation to construction and supervision,
            Habtech helps you move from an idea to a well-managed project.
          </p>

          <div className="home-hero-actions">
            <button type="button" onClick={onOpenQuote}>
              REQUEST A QUOTE <ArrowUpRight size={18} />
            </button>
            <Link to="/services">
              EXPLORE SERVICES <span>→</span>
            </Link>
          </div>
        </div>

        <div className="home-hero-note">
          <span>HABTECH CONSTRUCTION</span>
          <strong>Plan. Build. Manage.</strong>
        </div>
      </section>

      <Capabilities />

      <Services embedded onOpenQuote={onOpenQuote} />

      <Portfolio />

      <section className="home-calculator-preview">
        <div className="home-section-container">
          <div className="home-section-heading">
            <div>
              <span className="home-kicker">PLAN WITH BETTER INFORMATION</span>
              <h2>GET AN EARLY VIEW OF YOUR BUILDING COST.</h2>
            </div>
            <p>
              Use our interactive calculator to explore an indicative cost
              range before moving to a professional BOQ and site-specific
              assessment.
            </p>
          </div>

          <div className="calculator-preview-card">
            <div className="calculator-preview-icon">
              <Calculator size={30} />
            </div>

            <div className="calculator-preview-copy">
              <span>CONSTRUCTION COST CALCULATOR</span>
              <h3>Estimate. Understand. Plan your next step.</h3>
              <p>
                Enter your location, building type, floor area, number of
                floors and finish level to generate a preliminary construction
                cost range.
              </p>
            </div>

            <Link to="/cost-calculator" className="home-outline-button">
              OPEN CALCULATOR <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-guide-preview">
        <div className="home-section-container">
          <div className="home-section-heading guide-heading">
            <div>
              <span className="home-kicker">HABTECH CONSTRUCTION GUIDE</span>
              <h2>KNOW MORE BEFORE YOU BUILD.</h2>
            </div>
            <Link to="/construction-guide" className="home-text-link">
              EXPLORE ALL GUIDES <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="guide-preview-grid">
            {GUIDE_PREVIEWS.map((guide, index) => (
              <article className="guide-preview-card" key={guide.title}>
                <div className="guide-preview-top">
                  <span>0{index + 1}</span>
                  <BookOpen size={19} />
                </div>
                <span className="guide-preview-category">{guide.category}</span>
                <h3>{guide.title}</h3>
                <p>{guide.text}</p>
                <Link to="/construction-guide">
                  READ GUIDE <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-boq-cta">
        <div className="home-section-container">
          <div className="boq-cta-card">
            <div className="boq-cta-icon">
              <ClipboardList size={32} />
            </div>

            <div className="boq-cta-copy">
              <span className="home-kicker">PROFESSIONAL ESTIMATION</span>
              <h2>DON'T BUILD FROM A GUESS.</h2>
              <p>
                A professional Bill of Quantities helps you understand the
                scope, quantities and expected costs of your project before
                construction gets expensive.
              </p>
            </div>

            <button type="button" className="home-primary-button" onClick={onOpenQuote}>
              REQUEST PROFESSIONAL BOQ <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <Testimonials />

      <CTA onOpenQuote={onOpenQuote} />
    </main>
  );
}

export default Home;
