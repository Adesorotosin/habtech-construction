import "./Capabilities.css";
import {
  BuildingOffice,
  Factory,
  House,
} from "@phosphor-icons/react";

function CapabilityIcon({ type }) {
  if (type === "commercial") {
    return (
      <BuildingOffice
        size={34}
        weight="regular"
        aria-hidden="true"
      />
    );
  }

  if (type === "industrial") {
    return (
      <Factory
        size={34}
        weight="regular"
        aria-hidden="true"
      />
    );
  }

  return (
    <House
      size={34}
      weight="regular"
      aria-hidden="true"
    />
  );
}

const capabilities = [
  {
    type: "commercial",
    title: "COMMERCIAL",
    description:
      "Scalable office structures and retail hubs designed for high-density traffic and long-term operational efficiency.",
    features: [
      "LEAD PLATINUM STANDARD",
      "FAST-TRACK SCHEDULING",
    ],
  },
  {
    type: "industrial",
    title: "INDUSTRIAL",
    description:
      "Specialized facilities requiring heavy load tolerances, advanced ventilation, and complex electrical integration.",
    features: [
      "REINFORCED CONCRETE",
      "PROCESS ENGINEERING",
    ],
  },
  {
    type: "residential",
    title: "RESIDENTIAL",
    description:
      "Bespoke luxury estates and high-rise multi-family developments focusing on architectural aesthetics and comfort.",
    features: [
      "CUSTOM FABRICATION",
      "SMART HOME ECOSYSTEMS",
    ],
  },
];

function Capabilities() {
  return (
    <section className="capabilities" id="services">
      <div className="capabilities-container">

        {/* Section Heading */}
        <div className="capabilities-header">

          <div className="capabilities-heading">
            <h2>CORE CAPABILITIES</h2>

            <p>
              Our multidisciplinary approach ensures every phase of
              construction is handled with surgical precision, from site prep
              to final occupancy.
            </p>
          </div>

          <div className="capabilities-lines">
            <span className="capability-line orange"></span>
            <span className="capability-line blue"></span>
          </div>

        </div>

        {/* Capability Cards */}
        <div className="capability-grid">

          {capabilities.map((capability) => (
            <article
              className={`capability-card ${capability.type}`}
              key={capability.title}
            >

              <div className="capability-icon">
                <CapabilityIcon type={capability.type} />
              </div>

              <h3>{capability.title}</h3>

              <p className="capability-description">
                {capability.description}
              </p>

              <ul className="capability-features">
                {capability.features.map((feature) => (
                  <li key={feature}>
                    <span className="feature-square"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Capabilities;