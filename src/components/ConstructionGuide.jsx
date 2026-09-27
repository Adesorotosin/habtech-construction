import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Search } from "lucide-react";
import "./ConstructionGuide.css";

const CATEGORIES = [
  "All",
  "Building Construction",
  "Building Materials",
  "Cost & Estimation",
  "Project Management",
  "Site Management",
  "Building Finishes",
  "Road Construction",
  "Maintenance",
  "Building Regulations",
  "Home Improvement",
];

const GUIDES = [
  {
    id: 1,
    category: "Building Construction",
    title: "What to Know Before Starting a Building Project",
    excerpt:
      "A practical starting point for understanding scope, drawings, approvals, professionals and construction stages before work begins.",
    readTime: "6 min read",
  },
  {
    id: 2,
    category: "Building Materials",
    title: "Choosing Building Materials Without Guesswork",
    excerpt:
      "Learn what to consider when comparing cement, blocks, steel, roofing, finishes and other materials for a project.",
    readTime: "5 min read",
  },
  {
    id: 3,
    category: "Cost & Estimation",
    title: "Why Construction Cost Estimates Change",
    excerpt:
      "Understand how project scope, design information, market prices, location and construction decisions affect an estimate.",
    readTime: "7 min read",
  },
  {
    id: 4,
    category: "Project Management",
    title: "How to Keep a Construction Project Organized",
    excerpt:
      "A simple guide to planning, scheduling, documentation, coordination and monitoring throughout a project.",
    readTime: "6 min read",
  },
  {
    id: 5,
    category: "Site Management",
    title: "What Good Site Supervision Looks Like",
    excerpt:
      "Explore the role of site supervision in coordinating work, monitoring quality, managing progress and documenting issues.",
    readTime: "5 min read",
  },
  {
    id: 6,
    category: "Building Finishes",
    title: "Planning Building Finishes From the Start",
    excerpt:
      "Finishes affect both budget and appearance. Learn how to plan tiles, paint, ceilings, doors, fittings and other finishing decisions.",
    readTime: "5 min read",
  },
  {
    id: 7,
    category: "Road Construction",
    title: "The Basic Stages of Road Construction",
    excerpt:
      "An accessible overview of the main activities involved in preparing, constructing and finishing a road project.",
    readTime: "6 min read",
  },
  {
    id: 8,
    category: "Maintenance",
    title: "A Practical Building Maintenance Checklist",
    excerpt:
      "Small maintenance issues can become expensive problems. Learn what to monitor around an existing property.",
    readTime: "5 min read",
  },
  {
    id: 9,
    category: "Building Regulations",
    title: "Why Building Approvals and Inspections Matter",
    excerpt:
      "Understand why project owners should consider applicable approvals, inspections and compliance requirements before construction.",
    readTime: "7 min read",
  },
  {
    id: 10,
    category: "Home Improvement",
    title: "Renovation vs Remodeling: What Is the Difference?",
    excerpt:
      "A clear guide to deciding whether your property needs a renovation, a remodeling project or a more substantial intervention.",
    readTime: "4 min read",
  },
];

function ConstructionGuide() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGuides = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return GUIDES.filter((guide) => {
      const matchesCategory =
        activeCategory === "All" || guide.category === activeCategory;

      const matchesSearch =
        !normalizedSearch ||
        guide.title.toLowerCase().includes(normalizedSearch) ||
        guide.excerpt.toLowerCase().includes(normalizedSearch) ||
        guide.category.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <main className="construction-guide-page">
      <section className="guide-hero">
        <div className="guide-hero-content">
          <div className="guide-eyebrow">
            <BookOpen size={16} strokeWidth={1.8} />
            CONSTRUCTION KNOWLEDGE CENTER
          </div>

          <h1>
            BUILD WITH
            <span>BETTER KNOWLEDGE.</span>
          </h1>

          <p>
            Practical construction guidance to help you make better decisions
            about planning, materials, costs, project management and property
            improvement.
          </p>
        </div>

        <div className="guide-hero-note">
          <span>HABTECH GUIDE</span>
          <strong>Learn before you build.</strong>
        </div>
      </section>

      <section className="guide-featured">
        <div className="featured-guide-copy">
          <span className="section-kicker">START HERE</span>
          <h2>Construction decisions become easier when you understand the process.</h2>
          <p>
            Explore practical articles created to make construction knowledge
            easier to understand, whether you are planning a new building,
            managing an active project or improving an existing property.
          </p>
        </div>

        <div className="featured-guide-card">
          <span>{GUIDES[0].category}</span>
          <h3>{GUIDES[0].title}</h3>
          <p>{GUIDES[0].excerpt}</p>
          <a href="#guide-library">
            READ GUIDE <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section className="guide-library" id="guide-library">
        <div className="guide-library-heading">
          <div>
            <span className="section-kicker">THE LIBRARY</span>
            <h2>Explore the Construction Guide</h2>
          </div>

          <label className="guide-search">
            <Search size={18} />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search construction topics..."
              aria-label="Search construction guides"
            />
          </label>
        </div>

        <div className="guide-categories" role="tablist" aria-label="Guide categories">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
              role="tab"
              aria-selected={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="guide-grid">
          {filteredGuides.map((guide, index) => (
            <article className="guide-card" key={guide.id}>
              <div className="guide-card-topline">
                <span>0{index + 1}</span>
                <span>{guide.readTime}</span>
              </div>

              <span className="guide-category">{guide.category}</span>
              <h3>{guide.title}</h3>
              <p>{guide.excerpt}</p>

              <a href="#guide-library" className="guide-read-button">
                READ GUIDE <ArrowUpRight size={17} />
              </a>
            </article>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="guide-empty-state">
            <h3>No guides found.</h3>
            <p>Try another search term or choose a different category.</p>
          </div>
        )}
      </section>

      <section className="guide-cta">
        <div>
          <span className="section-kicker">NEED PROJECT-SPECIFIC HELP?</span>
          <h2>Knowledge is useful. Professional assessment makes it actionable.</h2>
          <p>
            When your project needs drawings, quantities, site assessment or a
            detailed cost review, talk to the Habtech team.
          </p>
        </div>

        <Link to="/boq-estimation" className="guide-cta-button">
          REQUEST PROFESSIONAL BOQ <ArrowUpRight size={18} />
        </Link>
      </section>
    </main>
  );
}

export default ConstructionGuide;
