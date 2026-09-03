import { useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    image: "/assets/portfolio_1.avif",
    category: "RESIDENTIAL",
    title: "The Obsidian Building",
    location: "Ikoyi, Lagos",
    progress: 75,
  },
  {
    id: 2,
    image: "/assets/portfolio_2.avif",
    category: "INFRASTRUCTURE",
    title: "Meridian Bridge",
    description:
      "Reinforced suspension system spanning 2.4km across the arterial delta.",
  },
  {
    id: 3,
    image: "/assets/portfolio_1.avif",
    category: "RESIDENTIAL",
    title: "Luxury Residential Estate",
    year: "COMPLETED 2025",
    badge: "LEED PLATINUM",
  },
  {
    id: 4,
    image: "/assets/portfolio_3.avif",
    category: "INDUSTRIAL",
    title: "Titan Logistics Hub",
    year: "COMPLETED 2025",
    badge: "LEED PLATINUM",
  },
  {
    id: 5,
    image: "/assets/portfolio_4.avif",
    category: "INFRASTRUCTURE",
    title: "Steel Core Hub",
    year: "COMPLETED 2025",
    badge: "LEED PLATINUM",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filtered =
    activeFilter === "ALL"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <main className="projects-container">
      {/* HERO SECTION */}
      <section className="projects-hero">
        <div className="projects-hero-container">
          <div className="projects-hero-content">
            <span className="projects-eyebrow">PORTFOLIO INDEX 2025</span>
            <h1>
              STRUCTURAL
              <br />
              LEGACY
            </h1>
            <p>
              Defining the skyline through engineered precision. From massive
              infrastructure to high-rise residential monuments, we build for
              permanence.
            </p>
          </div>

          <div className="projects-hero-image">
            <img src="/assets/portfolio_1.avif" alt="Structural project" />
          </div>
        </div>

        {/* FILTERS */}
        <div className="projects-filter-container">
          {["ALL", "RESIDENTIAL", "INDUSTRIAL", "INFRASTRUCTURE"].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`project-filter ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat === "ALL"
                ? "All Projects"
                : cat.charAt(0) + cat.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </section>

      {/* TOP ROW: Asymmetric Left (larger) vs Right */}
      <div className="top-grid">
        {filtered[0] && (
          <div className="card card-left">
            <img src={filtered[0].image} alt={filtered[0].title} />
            <span className="badge-orange">{filtered[0].category}</span>
            <div className="card-overlay-left">
              <h2>{filtered[0].title}</h2>
              <div className="progress-bar-container">
                <span>📍 {filtered[0].location}</span>
                <div className="track">
                  <div
                    className="fill"
                    style={{ width: `${filtered[0].progress}%` }}
                  />
                </div>
                <span>{filtered[0].progress}% complete</span>
              </div>
            </div>
          </div>
        )}

        {filtered[1] && (
          <div className="card card-right">
            <img src={filtered[1].image} alt={filtered[1].title} />
            <div className="white-overlay-box">
              <span className="cat-subtitle">{filtered[1].category}</span>
              <h3>{filtered[1].title}</h3>
              <p>{filtered[1].description}</p>
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM ROW: 3 Columns */}
      <div className="bottom-grid">
        {filtered.slice(2).map((item) => (
          <div key={item.id} className="bottom-card-wrapper">
            <div className="bottom-card-image">
              <img src={item.image} alt={item.title} />
              <div className="gradient-overlay" />
              <div className="bottom-card-text">
                <h3>{item.title}</h3>
                <span className="cat-subtitle">{item.category}</span>
              </div>
            </div>
            <div className="bottom-card-meta">
              <span>{item.year || "COMPLETED 2025"}</span>
              <span>{item.badge || "LEED PLATINUM"}</span>
            </div>
          </div>
        ))}
      </div>

      {/* FEATURED CASE STUDY SECTION */}
<section className="featured-case-study">
  <div className="case-study-image">
    <img src="/assets/portfolio_2.avif" alt="Foundry Precinct Regeneration site" />
  </div>

  <div className="case-study-content">
    <div className="case-study-eyebrow">
      <span className="orange-line"></span>
      <span className="eyebrow-text">STRATEGIC ASSETS</span>
    </div>

    <h2>
      The Foundry<br />
      Precinct<br />
      Regeneration
    </h2>

    <p className="case-study-desc">
      A multi-phase conversion of a 25-hectare industrial zone into a high-tech
      manufacturing core. Implementing advanced seismic retrofitting and
      automated energy grids.
    </p>

    <div className="case-study-metrics">
      <div className="metric-item">
        <span className="metric-label">STRUCTURE</span>
        <span className="metric-value">Pre-cast Concrete</span>
      </div>
      <div className="metric-item">
        <span className="metric-label">AREA</span>
        <span className="metric-value">425, 345 sq. ft</span>
      </div>
    </div>

    <a href="#case-study" className="case-study-link">
      VIEW FULL CASE STUDY <span>&rarr;</span>
    </a>
  </div>
</section>
    </main>
  );
}