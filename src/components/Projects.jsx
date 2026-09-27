import { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projectsData = [
  { id: 1, image: "/assets/portfolio_1.avif", category: "RESIDENTIAL", title: "Residential Project" },
  { id: 2, image: "/assets/portfolio_2.avif", category: "INFRASTRUCTURE", title: "Infrastructure Project" },
  { id: 3, image: "/assets/portfolio_1.avif", category: "RESIDENTIAL", title: "Residential Development" },
  { id: 4, image: "/assets/portfolio_3.avif", category: "INDUSTRIAL", title: "Industrial Project" },
  { id: 5, image: "/assets/portfolio_4.avif", category: "INFRASTRUCTURE", title: "Infrastructure Works" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filtered = activeFilter === "ALL" ? projectsData : projectsData.filter((project) => project.category === activeFilter);

  return (
    <main className="projects-container">
      <section className="projects-hero">
        <div className="projects-hero-container">
          <div className="projects-hero-content">
            <span className="projects-eyebrow">SELECTED PROJECTS</span>
            <h1>WORK<br />IN FOCUS</h1>
            <p>Explore selected construction visuals across residential, industrial, and infrastructure work. Project details can be expanded as verified project information becomes available.</p>
          </div>
          <div className="projects-hero-image"><img src="/assets/portfolio_1.avif" alt="Selected construction project" /></div>
        </div>
        <div className="projects-filter-container">
          {["ALL", "RESIDENTIAL", "INDUSTRIAL", "INFRASTRUCTURE"].map((category) => (
            <button key={category} type="button" className={`project-filter ${activeFilter === category ? "active" : ""}`} onClick={() => setActiveFilter(category)}>
              {category === "ALL" ? "All Projects" : category.charAt(0) + category.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </section>
      <div className="top-grid">
        {filtered[0] && <div className="card card-left"><img src={filtered[0].image} alt={filtered[0].title} /><span className="badge-orange">{filtered[0].category}</span><div className="card-overlay-left"><h2>{filtered[0].title}</h2><p>Selected project visual</p></div></div>}
        {filtered[1] && <div className="card card-right"><img src={filtered[1].image} alt={filtered[1].title} /><div className="white-overlay-box"><span className="cat-subtitle">{filtered[1].category}</span><h3>{filtered[1].title}</h3><p>Project information can be added here when verified details, scope, location, and delivery information are available.</p></div></div>}
      </div>
      <div className="bottom-grid">
        {filtered.slice(2).map((project) => <div key={project.id} className="bottom-card-wrapper"><div className="bottom-card-image"><img src={project.image} alt={project.title} /><div className="gradient-overlay" /><div className="bottom-card-text"><h3>{project.title}</h3><span className="cat-subtitle">{project.category}</span></div></div><div className="bottom-card-meta"><span>PROJECT VISUAL</span><span>{project.category}</span></div></div>)}
      </div>
      <section className="featured-case-study">
        <div className="case-study-image"><img src="/assets/portfolio_2.avif" alt="Construction project visual" /></div>
        <div className="case-study-content">
          <div className="case-study-eyebrow"><span className="orange-line" /><span className="eyebrow-text">PROJECT INFORMATION</span></div>
          <h2>Every project deserves a clear story.</h2>
          <p className="case-study-desc">Detailed case studies can include verified project scope, location, challenges, decisions, construction stages, and outcomes. We can add those details here as project information is confirmed.</p>
          <div className="case-study-metrics"><div className="metric-item"><span className="metric-label">DETAIL</span><span className="metric-value">Scope & requirements</span></div><div className="metric-item"><span className="metric-label">DELIVERY</span><span className="metric-value">Process & outcome</span></div></div>
          <Link to="/contact" className="case-study-link">DISCUSS A PROJECT <span>→</span></Link>
        </div>
      </section>
    </main>
  );
}