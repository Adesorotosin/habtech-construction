import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const POSTS_DATA = [
  {
    id: 1,
    title: "Structural Innovations in Modern High-Rise Construction",
    category: "Engineering",
    date: "Aug 18, 2026",
    readTime: "5 min read",
    excerpt:
      "Exploring modern load-bearing materials and reinforced concrete techniques reshaping urban skylines.",
    image: "/assets/portfolio_1.avif",
    featured: true,
  },
  {
    id: 2,
    title: "Practical Safety Planning for Construction Sites",
    category: "Safety",
    date: "Aug 12, 2026",
    readTime: "4 min read",
    excerpt:
      "A practical look at planning site activities, identifying hazards, documenting issues and keeping safety visible throughout a project.",
    image: "/assets/portfolio_2.avif",
    featured: false,
  },
  {
    id: 3,
    title: "Sustainable Concrete Formwork & Waste Reduction Strategies",
    category: "Sustainability",
    date: "Aug 05, 2026",
    readTime: "6 min read",
    excerpt:
      "A deep dive into circular materials, reusable steel formwork, and minimizing material waste on site.",
    image: "/assets/portfolio_3.avif",
    featured: false,
  },
  {
    id: 4,
    title: "Managing Large-Scale Industrial Renovation Timelines",
    category: "Project Management",
    date: "Jul 28, 2026",
    readTime: "7 min read",
    excerpt:
      "Balancing active facility operational needs with aggressive structural retrofit project schedules.",
    image: "/assets/portfolio_4.avif",
    featured: false,
  },
];

const CATEGORIES = ["All", "Engineering", "Safety", "Sustainability", "Project Management"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? POSTS_DATA
      : POSTS_DATA.filter((post) => post.category === activeCategory);

  const featuredPost = POSTS_DATA.find((p) => p.featured) || POSTS_DATA[0];

  return (
    <div className="blog-page-wrapper">
      {/* ================= HERO SECTION ================= */}
      <section className="blog-hero-container">
        <span className="badge-tag">FIELD INSIGHTS</span>
        <h1 className="blog-hero-title">
          FIELD NOTES & <br />
          <span className="light-title">PERSPECTIVES.</span>
        </h1>
        <p className="blog-hero-description">
          Practical construction insights covering planning, materials, safety,
          sustainability and project management.
        </p>
      </section>

      {/* ================= FEATURED POST ================= */}
      <section className="blog-featured-section">
        <div className="featured-card">
          <div className="featured-image-wrapper">
            <img src={featuredPost.image} alt={featuredPost.title} />
          </div>
          <div className="featured-content">
            <div className="post-meta">
              <span className="category-tag">{featuredPost.category}</span>
              <span className="meta-dot">•</span>
              <span className="meta-text">{featuredPost.readTime}</span>
            </div>
            <h2 className="featured-title">{featuredPost.title}</h2>
            <p className="featured-excerpt">{featuredPost.excerpt}</p>
            <a className="read-more-btn" href="#articles">EXPLORE ARTICLES →</a>
          </div>
        </div>
      </section>

      {/* ================= FILTER & POSTS GRID ================= */}
      <section className="blog-grid-section" id="articles">
        {/* Category Filters */}
        <div className="category-filter-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="posts-grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="post-card">
              <div className="post-image-wrapper">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="post-card-content">
                <div className="post-meta">
                  <span className="category-tag">{post.category}</span>
                  <span className="meta-dot">•</span>
                  <span className="meta-text">{post.readTime}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <span className="post-date">FIELD INSIGHT</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="blog-newsletter-section">
        <div className="newsletter-card">
          <div className="newsletter-text">
            <h2>KEEP LEARNING BEFORE YOU BUILD</h2>
            <p>
              Explore the Construction Guide for practical topics on planning,
              materials, cost, site management, maintenance and more.
            </p>
          </div>
          <Link className="read-more-btn" to="/construction-guide">
            EXPLORE THE GUIDE →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;