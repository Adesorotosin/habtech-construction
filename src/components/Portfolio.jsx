import { Link } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        {/* Header */}
        <div className="portfolio-header">
          <h2 className="portfolio-title">BUILT PORTFOLIOS</h2>
          <p className="portfolio-subtitle">
            A testament to our commitment to structural integrity and architectural vision across various sectors.
          </p>
        </div>

        {/* 2-Column Main Layout Grid */}
        <div className="portfolio-grid">
          {/* Left Column: Tall Image */}
          <div className="portfolio-card card-tall">
            <img src="/assets/portfolio_1.avif" alt="Residential" />
            <div className="portfolio-tag tag-orange">RESIDENTIAL</div>
          </div>

          {/* Right Column: Stacked Grid */}
          <div className="portfolio-right-col">
            {/* Top Wide Image */}
            <div className="portfolio-card card-wide">
              <img src="/assets/portfolio_2.avif" alt="Residential Interior" />
              <div className="portfolio-tag tag-blue">RESIDENTIAL</div>
            </div>

            {/* Bottom Row (2 Images Side-by-Side) */}
            <div className="portfolio-bottom-row">
              <div className="portfolio-card card-small">
                <img src="/assets/portfolio_3.avif" alt="Industrial Groundwork" />
                <div className="portfolio-tag tag-dark">INDUSTRIAL</div>
              </div>

              <div className="portfolio-card card-small">
                <img src="/assets/portfolio_4.avif" alt="Infrastructure Steel Core" />
                <div className="portfolio-tag tag-orange">INFRASTRUCTURE</div>
                <div className="portfolio-text-overlay">STEEL CORE HUB</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="portfolio-action">
          <Link to="/projects" className="portfolio-btn">
            View Full Project Archive
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;