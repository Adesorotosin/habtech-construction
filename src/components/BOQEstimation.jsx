import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  FileText,
  ClipboardText,
  Calculator,
  Ruler,
  ShieldCheck,
} from "@phosphor-icons/react";
import "./BOQEstimation.css";

const includedItems = [
  {
    icon: Ruler,
    title: "Quantity measurement",
    text: "Measured quantities for the major work items required for your project.",
  },
  {
    icon: FileText,
    title: "Work breakdown",
    text: "A structured breakdown of construction activities and measurable items.",
  },
  {
    icon: Calculator,
    title: "Cost estimation",
    text: "Indicative material, labour and other applicable cost considerations.",
  },
  {
    icon: ClipboardText,
    title: "Procurement planning",
    text: "Clearer information to support material purchasing and project planning.",
  },
];

const peopleWhoNeedIt = [
  "Homeowners planning a new build",
  "Property developers",
  "Clients planning renovations or remodeling",
  "Contractors preparing project budgets",
  "Investors assessing construction costs",
  "Commercial and institutional project owners",
];

const benefits = [
  "Understand the likely cost structure before work begins",
  "Plan procurement and cash flow more clearly",
  "Create a measurable basis for reviewing quotations",
  "Reduce avoidable cost surprises during construction",
  "Track project scope against the agreed work items",
];

const process = [
  {
    number: "01",
    title: "Submit your project information",
    text: "Share your drawings, project location, building type, size and current project stage.",
  },
  {
    number: "02",
    title: "Project review",
    text: "We review the information provided and identify the scope that needs to be measured.",
  },
  {
    number: "03",
    title: "Quantity measurement",
    text: "Relevant construction work items are measured and organised into a structured estimate.",
  },
  {
    number: "04",
    title: "Cost estimation",
    text: "The measured scope is translated into a project-specific cost estimate based on the available information.",
  },
  {
    number: "05",
    title: "BOQ delivery",
    text: "You receive the prepared documentation for budgeting, procurement and project discussions.",
  },
];

const requiredInformation = [
  "Architectural and relevant engineering drawings",
  "Project location",
  "Building type and intended use",
  "Approximate floor area and number of floors",
  "Specifications or preferred finish level, where available",
  "Current project stage",
  "Existing BOQ or estimate, if one already exists",
  "Any known budget or project constraints",
];

function BOQEstimation({ onOpenQuote }) {
  return (
    <main className="boq-page">
      <section className="boq-hero">
        <div className="boq-hero-content">
          <p className="boq-eyebrow">BOQ & COST ESTIMATION</p>
          <h1>Know what your project requires before construction gets expensive.</h1>
          <p className="boq-hero-text">
            A professional Bill of Quantities gives you a clearer picture of the
            work, quantities and cost structure involved in your construction
            project.
          </p>

          <div className="boq-hero-actions">
            <button type="button" className="boq-primary-button" onClick={onOpenQuote}>
              Request Professional BOQ
              <ArrowRight size={18} weight="bold" />
            </button>

            <Link to="/cost-calculator" className="boq-secondary-button">
              Try Cost Calculator
            </Link>
          </div>
        </div>

        <div className="boq-hero-card">
          <div className="boq-card-icon">
            <FileText size={28} weight="bold" />
          </div>
          <span>PROJECT CONTROL</span>
          <strong>Measure. Estimate. Plan.</strong>
          <p>
            Turn project drawings and requirements into a clearer construction
            cost picture.
          </p>
        </div>
      </section>

      <section className="boq-section boq-definition">
        <div className="boq-section-heading">
          <p className="boq-eyebrow">WHAT IS A BOQ?</p>
          <h2>A structured way to understand your construction scope.</h2>
        </div>

        <div className="boq-definition-copy">
          <p>
            A Bill of Quantities (BOQ) is a structured document that breaks a
            construction project into measurable work items and quantities. It
            helps turn drawings, specifications and project requirements into
            information that can be used for budgeting, procurement and
            construction planning.
          </p>
          <p>
            Instead of relying on a single rough project figure, a BOQ gives you
            more visibility into what the project is made up of and where costs
            are coming from.
          </p>
        </div>
      </section>

      <section className="boq-section">
        <div className="boq-section-heading">
          <p className="boq-eyebrow">WHO NEEDS ONE?</p>
          <h2>Useful before you commit major money to a project.</h2>
        </div>

        <div className="boq-needs-grid">
          {peopleWhoNeedIt.map((item) => (
            <div className="boq-need-card" key={item}>
              <CheckCircle size={20} weight="fill" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="boq-section boq-included-section">
        <div className="boq-section-heading">
          <p className="boq-eyebrow">WHAT'S INCLUDED</p>
          <h2>Built around the information you need to make project decisions.</h2>
        </div>

        <div className="boq-included-grid">
          {includedItems.map(({ icon: Icon, title, text }) => (
            <article className="boq-included-card" key={title}>
              <div className="boq-feature-icon">
                <Icon size={24} weight="bold" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="boq-section boq-split-section">
        <div>
          <p className="boq-eyebrow">WHY IT MATTERS</p>
          <h2>Better information creates better control.</h2>
          <p className="boq-section-intro">
            Construction costs can move quickly when scope, quantities and
            specifications are unclear. A structured estimate helps you plan
            with more information before procurement and execution.
          </p>
        </div>

        <div className="boq-benefits-list">
          {benefits.map((benefit) => (
            <div className="boq-benefit" key={benefit}>
              <CheckCircle size={20} weight="fill" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="boq-section boq-process-section">
        <div className="boq-section-heading">
          <p className="boq-eyebrow">OUR PROCESS</p>
          <h2>From project information to a usable cost document.</h2>
        </div>

        <div className="boq-process-list">
          {process.map((step) => (
            <article className="boq-process-step" key={step.number}>
              <span className="boq-process-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="boq-section boq-requirements-section">
        <div className="boq-requirements-card">
          <div>
            <p className="boq-eyebrow">WHAT WE NEED FROM YOU</p>
            <h2>Start with the information you already have.</h2>
            <p>
              You do not need to have every detail finalised before reaching
              out. Share the available project information and we can clarify
              what is needed for the next step.
            </p>
          </div>

          <div className="boq-requirements-list">
            {requiredInformation.map((item) => (
              <div key={item}>
                <CheckCircle size={18} weight="fill" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="boq-cta">
        <div>
          <p className="boq-eyebrow">READY TO PLAN WITH MORE CLARITY?</p>
          <h2>Request a professional BOQ for your project.</h2>
          <p>
            Tell us about your project and we will guide you through the
            information required for the estimation.
          </p>
        </div>

        <button
          type="button"
          className="boq-primary-button boq-cta-button"
          onClick={onOpenQuote}
        >
          Request BOQ
          <ArrowRight size={18} weight="bold" />
        </button>
      </section>

      <section className="boq-disclaimer">
        <ShieldCheck size={20} weight="bold" />
        <p>
          Construction estimates are dependent on project scope, location,
          specifications, market conditions and site-specific information. A
          preliminary estimate should not be treated as a final project cost
          until the relevant drawings, quantities and site requirements have
          been professionally assessed.
        </p>
      </section>
    </main>
  );
}

export default BOQEstimation;
