import React from "react";
import {
  ArrowRight,
  ClipboardCheck,
  Compass,
  FileText,
  HardHat,
  Home,
  PencilRuler,
  SearchCheck,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    icon: HardHat,
    number: "01",
    title: "Building Construction",
    description:
      "End-to-end construction for residential, commercial, and development projects, from site preparation through finishing and handover.",
    points: ["Residential buildings", "Commercial projects", "New developments"],
    image: "/assets/Residential_11.avif",
  },
  {
    icon: Compass,
    number: "02",
    title: "Construction Consultation",
    description:
      "Professional guidance before and during construction to help you make practical decisions around scope, materials, feasibility, and execution.",
    points: ["Project feasibility", "Technical guidance", "Pre-construction advice"],
    image: "/assets/Architectural blueprint.avif",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Renovation & Remodeling",
    description:
      "We improve existing spaces with carefully planned renovation and remodeling work that balances function, durability, and the intended design.",
    points: ["Home renovations", "Space upgrades", "Remodeling works"],
    image: "/assets/adaptive.avif",
  },
  {
    icon: ClipboardCheck,
    number: "04",
    title: "Project Management",
    description:
      "Structured coordination of people, materials, budgets, schedules, and deliverables so your project remains organised from start to completion.",
    points: ["Budget coordination", "Schedule management", "Stakeholder coordination"],
    image: "/assets/Commercial infrastructure.avif",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Site Supervision",
    description:
      "Professional oversight of construction activities to support quality, safety, workmanship, specifications, and proper project execution on site.",
    points: ["Workmanship checks", "Site coordination", "Quality monitoring"],
    image: "/assets/industrial-site.jpg",
  },
  {
    icon: FileText,
    number: "06",
    title: "BOQ & Cost Estimation",
    description:
      "Detailed quantity measurement and cost estimation that gives you a clearer understanding of what your project requires before major construction spending begins.",
    points: ["Quantity measurement", "Cost estimation", "Procurement planning"],
    image: "/assets/Architectural blueprint.avif",
    featured: true,
  },
  {
    icon: SearchCheck,
    number: "07",
    title: "Property Inspection",
    description:
      "Independent property and building inspections to help clients identify visible defects, construction concerns, maintenance needs, and potential risks.",
    points: ["Property assessment", "Defect identification", "Pre-purchase checks"],
    image: "/assets/portfolio_1.avif",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description: "We understand your property, goals, scope, and project requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description: "We define the right approach, documentation, resources, and next steps.",
  },
  {
    number: "03",
    title: "Execute",
    description: "We coordinate and supervise the work with attention to quality and safety.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "We review the completed work and move the project toward a proper handover.",
  },
];

function Services({ onOpenQuote, embedded = false }) {
  const PageContainer = embedded ? "section" : "main";

  return (
    <PageContainer className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="services-eyebrow">OUR SERVICES</span>
          <h1>
            Construction expertise for projects that need to be done <span>properly.</span>
          </h1>
          <p>
            From planning and cost estimation to construction, supervision, and
            property inspection, Habtech provides practical professional support
            across the project lifecycle.
          </p>

          <div className="services-hero-actions">
            <button
              type="button"
              className="services-primary-button"
              onClick={onOpenQuote}
            >
              Discuss Your Project
              <ArrowRight size={18} />
            </button>
            <Link to="/boq-estimation" className="services-secondary-button">
              Explore BOQ & Estimation
            </Link>
          </div>
        </div>

        <div className="services-hero-visual">
          <div className="services-blueprint-card">
            <PencilRuler size={22} />
            <span>PLAN</span>
          </div>
          <img
            src="/assets/Architectural blueprint.avif"
            alt="Architectural construction blueprint"
          />
          <div className="services-hero-note">
            <span className="note-line" />
            <div>
              <strong>FROM IDEA TO SITE</strong>
              <p>Practical support at every important stage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-intro">
        <div>
          <span className="section-kicker">WHAT WE DO</span>
          <h2>One construction partner. Multiple project needs.</h2>
        </div>
        <p>
          Whether you are starting from an idea, already have drawings, or are
          managing an active construction site, our services are designed to
          help you make better project decisions and execute with confidence.
        </p>
      </section>

      <section className="services-grid" aria-label="Habtech construction services">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              className={`service-item-card${service.featured ? " service-item-card-featured" : ""}`}
              key={service.title}
            >
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <Icon size={28} strokeWidth={1.8} />
              </div>

              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <ul>
                  {service.points.map((point) => (
                    <li key={point}>
                      <span />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-card-image">
                <img src={service.image} alt={service.title} />
              </div>

              {service.featured && (
                <Link to="/boq-estimation" className="service-card-link">
                  Learn about BOQ & Estimation
                  <ArrowRight size={16} />
                </Link>
              )}
            </article>
          );
        })}
      </section>

      <section className="services-process" id="process">
        <div className="services-process-heading">
          <span className="section-kicker">HOW WE SUPPORT YOUR PROJECT</span>
          <h2>A clear process from the first conversation to delivery.</h2>
          <p>
            Good construction starts with good preparation. We help bring
            structure to the decisions that shape your project.
          </p>
        </div>

        <div className="services-process-grid">
          {process.map((step) => (
            <div className="process-step" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="services-tools">
        <div className="services-tools-copy">
          <span className="section-kicker">PLAN BEFORE YOU BUILD</span>
          <h2>Start with a clearer picture of your project.</h2>
          <p>
            Use our construction cost calculator for an indicative starting
            point, then speak with us when you need a professional assessment
            and BOQ.
          </p>
          <Link to="/cost-calculator" className="services-primary-button">
            Try Cost Calculator
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="services-tools-panel">
          <div className="tool-icon">
            <Home size={25} />
          </div>
          <div>
            <span>CONSTRUCTION COST CALCULATOR</span>
            <strong>Estimate. Understand. Plan.</strong>
            <p>
              Get an indicative cost range based on your project details before
              moving to professional estimation.
            </p>
          </div>
        </div>
      </section>

      <section className="services-final-cta">
        <div>
          <span className="section-kicker">HAVE A PROJECT IN MIND?</span>
          <h2>Tell us what you are building.</h2>
          <p>
            Share your project details and we will help you identify the right
            next step.
          </p>
        </div>

        <button
          type="button"
          className="services-cta-button"
          onClick={onOpenQuote}
        >
          Get a Quote
          <ArrowRight size={18} />
        </button>
      </section>
    </PageContainer>
  );
}

export default Services;
