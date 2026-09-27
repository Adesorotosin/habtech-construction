import React, { useMemo, useState } from "react";
import "./CostCalculator.css";

const LOCATIONS = [
  { value: "lagos", label: "Lagos" },
  { value: "abuja", label: "Abuja" },
  { value: "ibadan", label: "Ibadan" },
  { value: "port-harcourt", label: "Port Harcourt" },
  { value: "other", label: "Other location" },
];

const BUILDING_TYPES = [
  { value: "bungalow", label: "Bungalow" },
  { value: "detached-duplex", label: "Detached Duplex" },
  { value: "semi-detached", label: "Semi-detached House" },
  { value: "terrace", label: "Terrace House" },
  { value: "apartment", label: "Apartment" },
  { value: "commercial", label: "Commercial Building" },
];

const FINISH_LEVELS = [
  { value: "basic", label: "Basic" },
  { value: "standard", label: "Standard" },
  { value: "premium", label: "Premium" },
  { value: "luxury", label: "Luxury" },
];

const RATE_MULTIPLIERS = {
  lagos: 1,
  abuja: 1.04,
  ibadan: 0.9,
  "port-harcourt": 1.02,
  other: 0.95,
};

const BUILDING_MULTIPLIERS = {
  bungalow: 1,
  "detached-duplex": 1.08,
  "semi-detached": 1.05,
  terrace: 1.03,
  apartment: 1.02,
  commercial: 1.15,
};

const FINISH_MULTIPLIERS = {
  basic: 0.85,
  standard: 1,
  premium: 1.2,
  luxury: 1.45,
};

const BASE_RATE_PER_SQM = 450000;

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);

function CostCalculator() {
  const [form, setForm] = useState({
    location: "lagos",
    buildingType: "detached-duplex",
    bedrooms: "4",
    floorArea: "300",
    floors: "2",
    finishLevel: "standard",
  });

  const [hasCalculated, setHasCalculated] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
    setHasCalculated(false);
  };

  const estimate = useMemo(() => {
    const floorArea = Number(form.floorArea) || 0;
    const floors = Math.max(Number(form.floors) || 1, 1);
    const bedrooms = Math.max(Number(form.bedrooms) || 0, 0);

    if (!floorArea) {
      return { low: 0, high: 0 };
    }

    const locationMultiplier = RATE_MULTIPLIERS[form.location] || 1;
    const buildingMultiplier = BUILDING_MULTIPLIERS[form.buildingType] || 1;
    const finishMultiplier = FINISH_MULTIPLIERS[form.finishLevel] || 1;

    const bedroomAdjustment =
      bedrooms > 5 ? 1 + Math.min((bedrooms - 5) * 0.015, 0.075) : 1;

    const floorAdjustment = floors > 1 ? 1 + (floors - 1) * 0.025 : 1;

    const base =
      floorArea *
      BASE_RATE_PER_SQM *
      locationMultiplier *
      buildingMultiplier *
      finishMultiplier *
      bedroomAdjustment *
      floorAdjustment;

    return {
      low: base * 0.9,
      high: base * 1.15,
    };
  }, [form]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasCalculated(true);
  };

  return (
    <main className="cost-calculator-page">
      <section className="cost-calculator-hero">
        <div className="cost-calculator-container">
          <span className="cost-eyebrow">CONSTRUCTION TOOLS</span>

          <h1>
            HOW MUCH COULD
            <br />
            <span>YOUR BUILDING COST?</span>
          </h1>

          <p>
            Get an indicative construction cost range based on your project
            details. Use this as an early planning guide before requesting a
            professional assessment.
          </p>
        </div>
      </section>

      <section className="calculator-section">
        <div className="cost-calculator-container calculator-layout">
          <form className="calculator-card" onSubmit={handleSubmit}>
            <div className="calculator-card-header">
              <div>
                <span className="section-number">01</span>
                <h2>PROJECT DETAILS</h2>
              </div>
              <span className="calculator-step">ESTIMATE</span>
            </div>

            <div className="calculator-fields">
              <label>
                <span>Location</span>
                <select
                  value={form.location}
                  onChange={(event) =>
                    updateField("location", event.target.value)
                  }
                >
                  {LOCATIONS.map((location) => (
                    <option key={location.value} value={location.value}>
                      {location.label}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>Building type</span>
                <select
                  value={form.buildingType}
                  onChange={(event) =>
                    updateField("buildingType", event.target.value)
                  }
                >
                  {BUILDING_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </label>

              <div className="calculator-field-grid">
                <label>
                  <span>Number of bedrooms</span>
                  <input
                    type="number"
                    min="0"
                    max="30"
                    value={form.bedrooms}
                    onChange={(event) =>
                      updateField("bedrooms", event.target.value)
                    }
                  />
                </label>

                <label>
                  <span>Floor area (m²)</span>
                  <input
                    type="number"
                    min="1"
                    value={form.floorArea}
                    onChange={(event) =>
                      updateField("floorArea", event.target.value)
                    }
                  />
                </label>
              </div>

              <div className="calculator-field-grid">
                <label>
                  <span>Number of floors</span>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={form.floors}
                    onChange={(event) =>
                      updateField("floors", event.target.value)
                    }
                  />
                </label>

                <label>
                  <span>Finish level</span>
                  <select
                    value={form.finishLevel}
                    onChange={(event) =>
                      updateField("finishLevel", event.target.value)
                    }
                  >
                    {FINISH_LEVELS.map((finish) => (
                      <option key={finish.value} value={finish.value}>
                        {finish.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <button className="calculator-submit" type="submit">
              CALCULATE INDICATIVE COST <span>→</span>
            </button>
          </form>

          <aside className="estimate-card">
            <div className="estimate-card-top">
              <span>02</span>
              <span>PRELIMINARY ESTIMATE</span>
            </div>

            <div className="estimate-content">
              {hasCalculated ? (
                <>
                  <p className="estimate-label">INDICATIVE COST RANGE</p>

                  <div className="estimate-value">
                    {formatCurrency(estimate.low)}
                    <span>—</span>
                    {formatCurrency(estimate.high)}
                  </div>

                  <p className="estimate-description">
                    This is a preliminary planning range based on the details
                    you provided. It is not a BOQ or a final project quotation.
                  </p>
                </>
              ) : (
                <>
                  <p className="estimate-placeholder-label">
                    YOUR ESTIMATE WILL APPEAR HERE
                  </p>

                  <div className="estimate-placeholder">
                    <span>₦</span>
                    <strong>—</strong>
                  </div>

                  <p className="estimate-description">
                    Enter your project details and calculate an indicative
                    construction cost range.
                  </p>
                </>
              )}
            </div>

            <div className="estimate-disclaimer">
              <strong>Important:</strong> This calculator provides preliminary
              estimates only. A professional BOQ and site-specific assessment
              are required for an accurate project cost.
            </div>

            <a className="boq-link" href="/boq-estimation">
              WANT AN ACCURATE ESTIMATE? <span>REQUEST PROFESSIONAL BOQ →</span>
            </a>
          </aside>
        </div>
      </section>

      <section className="calculator-tools-section">
        <div className="cost-calculator-container">
          <div className="tools-heading">
            <span className="cost-eyebrow">MORE TOOLS</span>
            <h2>CONSTRUCTION CALCULATORS</h2>
            <p>
              More focused tools can be added here as Habtech expands its
              construction knowledge center.
            </p>
          </div>

          <div className="tools-grid">
            {[
              "Concrete Calculator",
              "Block Calculator",
              "Paint Calculator",
              "Floor Tile Calculator",
              "Roofing Calculator",
              "Labour Estimator",
              "Cement Calculator",
              "Reinforcement Calculator",
            ].map((tool, index) => (
              <div className="tool-card" key={tool}>
                <span>0{index + 1}</span>
                <h3>{tool}</h3>
                <p>Coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default CostCalculator;
