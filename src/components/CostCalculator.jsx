import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./CostCalculator.css";

const CALCULATOR_TYPES = [
  {
    id: "cost",
    number: "01",
    title: "Construction Cost",
    shortTitle: "COST",
    description: "Estimate an indicative construction cost range for early-stage planning.",
  },
  {
    id: "concrete",
    number: "02",
    title: "Concrete",
    shortTitle: "CONCRETE",
    description: "Estimate concrete volume and basic material quantities for a pour.",
  },
  {
    id: "blocks",
    number: "03",
    title: "Blocks",
    shortTitle: "BLOCKS",
    description: "Estimate the number of blocks required for a wall area.",
  },
];

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

// Illustrative quantity assumptions for preliminary planning only.
// These are not Habtech-approved material specifications or supplier rates.
const CONCRETE_ASSUMPTIONS = {
  dryVolumeFactor: 1.54,
  cementBagsPerCubicMetre: 6.5,
  sandPerCubicMetre: 0.44,
  granitePerCubicMetre: 0.88,
};

const BLOCK_ASSUMPTIONS = {
  blockLengthMetres: 0.45,
  blockHeightMetres: 0.225,
  wastageRate: 0.05,
};

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);

const formatNumber = (value, maximumFractionDigits = 2) =>
  new Intl.NumberFormat("en-NG", {
    maximumFractionDigits,
  }).format(value);

const getPositiveNumber = (value, fallback = 0) => {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : fallback;
};

function CostCalculator() {
  const [activeCalculator, setActiveCalculator] = useState("cost");
  const [hasCalculated, setHasCalculated] = useState(false);

  const [costForm, setCostForm] = useState({
    location: "lagos",
    buildingType: "detached-duplex",
    bedrooms: "4",
    floorArea: "300",
    floors: "2",
    finishLevel: "standard",
  });

  const [concreteForm, setConcreteForm] = useState({
    length: "10",
    width: "5",
    depth: "0.15",
    wastage: "5",
  });

  const [blockForm, setBlockForm] = useState({
    wallLength: "20",
    wallHeight: "3",
    openings: "2",
    wastage: "5",
  });

  const updateForm = (setter, field, value) => {
    setter((current) => ({
      ...current,
      [field]: value,
    }));
    setHasCalculated(false);
  };

  const costEstimate = useMemo(() => {
    const floorArea = getPositiveNumber(costForm.floorArea);
    const floors = Math.max(getPositiveNumber(costForm.floors, 1), 1);
    const bedrooms = Math.max(Number(costForm.bedrooms) || 0, 0);

    if (!floorArea) {
      return { low: 0, high: 0 };
    }

    const locationMultiplier = RATE_MULTIPLIERS[costForm.location] || 1;
    const buildingMultiplier =
      BUILDING_MULTIPLIERS[costForm.buildingType] || 1;
    const finishMultiplier = FINISH_MULTIPLIERS[costForm.finishLevel] || 1;

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
  }, [costForm]);

  const concreteEstimate = useMemo(() => {
    const length = getPositiveNumber(concreteForm.length);
    const width = getPositiveNumber(concreteForm.width);
    const depth = getPositiveNumber(concreteForm.depth);
    const wastage = Math.min(
      Math.max(Number(concreteForm.wastage) || 0, 0),
      30,
    );

    const wetVolume = length * width * depth;

    if (!wetVolume) {
      return {
        wetVolume: 0,
        orderVolume: 0,
        cementBags: 0,
        sand: 0,
        granite: 0,
      };
    }

    const orderVolume = wetVolume * (1 + wastage / 100);
    const dryVolume = orderVolume * CONCRETE_ASSUMPTIONS.dryVolumeFactor;

    return {
      wetVolume,
      orderVolume,
      cementBags:
        orderVolume * CONCRETE_ASSUMPTIONS.cementBagsPerCubicMetre,
      sand: dryVolume * (CONCRETE_ASSUMPTIONS.sandPerCubicMetre / 1.54),
      granite:
        dryVolume * (CONCRETE_ASSUMPTIONS.granitePerCubicMetre / 1.54),
    };
  }, [concreteForm]);

  const blockEstimate = useMemo(() => {
    const wallLength = getPositiveNumber(blockForm.wallLength);
    const wallHeight = getPositiveNumber(blockForm.wallHeight);
    const openings = Math.max(Number(blockForm.openings) || 0, 0);
    const wastage = Math.min(
      Math.max(Number(blockForm.wastage) || 0, 0),
      30,
    );

    const grossArea = wallLength * wallHeight;
    const netArea = Math.max(grossArea - openings, 0);
    const blockFaceArea =
      BLOCK_ASSUMPTIONS.blockLengthMetres *
      BLOCK_ASSUMPTIONS.blockHeightMetres;
    const baseBlocks = netArea / blockFaceArea;
    const blocksWithWastage = Math.ceil(baseBlocks * (1 + wastage / 100));

    return {
      grossArea,
      netArea,
      baseBlocks,
      blocksWithWastage,
    };
  }, [blockForm]);

  const handleCalculate = (event) => {
    event.preventDefault();
    setHasCalculated(true);
  };

  const handleCalculatorChange = (calculatorId) => {
    setActiveCalculator(calculatorId);
    setHasCalculated(false);
  };

  return (
    <main className="cost-calculator-page">
      <section className="cost-calculator-hero">
        <div className="cost-calculator-container">
          <span className="cost-eyebrow">CONSTRUCTION TOOLS</span>

          <h1>
            PLAN THE BUILD
            <br />
            <span>BEFORE YOU BUILD.</span>
          </h1>

          <p>
            Practical calculators for early-stage construction planning.
            Estimate project cost, concrete quantities, and block requirements
            before moving into professional drawings, specifications and BOQ.
          </p>

          <p className="calculator-assumption-note">
            Planning tools only: assumptions are illustrative and should not be
            treated as confirmed Habtech rates, structural specifications or a
            final material schedule.
          </p>
        </div>
      </section>

      <section className="calculator-section">
        <div className="cost-calculator-container">
          <div className="calculator-selector" aria-label="Construction calculators">
            {CALCULATOR_TYPES.map((calculator) => (
              <button
                key={calculator.id}
                type="button"
                className={
                  activeCalculator === calculator.id
                    ? "calculator-selector-button active"
                    : "calculator-selector-button"
                }
                onClick={() => handleCalculatorChange(calculator.id)}
              >
                <span>{calculator.number}</span>
                <strong>{calculator.shortTitle}</strong>
              </button>
            ))}
          </div>

          <div className="calculator-intro">
            <div>
              <span className="section-number">
                {CALCULATOR_TYPES.find((item) => item.id === activeCalculator)?.number}
              </span>
              <h2>
                {
                  CALCULATOR_TYPES.find(
                    (item) => item.id === activeCalculator,
                  )?.title
                }{" "}
                CALCULATOR
              </h2>
            </div>
            <p>
              {
                CALCULATOR_TYPES.find(
                  (item) => item.id === activeCalculator,
                )?.description
              }
            </p>
          </div>

          {activeCalculator === "cost" && (
            <div className="calculator-layout">
              <form className="calculator-card" onSubmit={handleCalculate}>
                <div className="calculator-card-header">
                  <div>
                    <span className="section-number">01</span>
                    <h3>PROJECT DETAILS</h3>
                  </div>
                  <span className="calculator-step">ESTIMATE</span>
                </div>

                <div className="calculator-fields">
                  <label>
                    <span>Location</span>
                    <select
                      value={costForm.location}
                      onChange={(event) =>
                        updateForm(
                          setCostForm,
                          "location",
                          event.target.value,
                        )
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
                      value={costForm.buildingType}
                      onChange={(event) =>
                        updateForm(
                          setCostForm,
                          "buildingType",
                          event.target.value,
                        )
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
                        value={costForm.bedrooms}
                        onChange={(event) =>
                          updateForm(
                            setCostForm,
                            "bedrooms",
                            event.target.value,
                          )
                        }
                      />
                    </label>

                    <label>
                      <span>Floor area (m²)</span>
                      <input
                        type="number"
                        min="1"
                        max="100000"
                        step="0.1"
                        value={costForm.floorArea}
                        onChange={(event) =>
                          updateForm(
                            setCostForm,
                            "floorArea",
                            event.target.value,
                          )
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
                        value={costForm.floors}
                        onChange={(event) =>
                          updateForm(
                            setCostForm,
                            "floors",
                            event.target.value,
                          )
                        }
                      />
                    </label>

                    <label>
                      <span>Finish level</span>
                      <select
                        value={costForm.finishLevel}
                        onChange={(event) =>
                          updateForm(
                            setCostForm,
                            "finishLevel",
                            event.target.value,
                          )
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
                        {formatCurrency(costEstimate.low)}
                        <span>—</span>
                        {formatCurrency(costEstimate.high)}
                      </div>

                      <p className="estimate-description">
                        This is a preliminary planning range based on the
                        details you provided. It is not a BOQ or a final
                        project quotation.
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
                  <strong>Important:</strong> This calculator provides
                  preliminary estimates only. The current model uses
                  illustrative assumptions. A professional BOQ and site-specific
                  assessment are required for an accurate project cost.
                </div>

                <Link className="boq-link" to="/boq-estimation">
                  WANT AN ACCURATE ESTIMATE?
                  <span>REQUEST PROFESSIONAL BOQ →</span>
                </Link>
              </aside>
            </div>
          )}

          {activeCalculator === "concrete" && (
            <div className="calculator-layout">
              <form className="calculator-card" onSubmit={handleCalculate}>
                <div className="calculator-card-header">
                  <div>
                    <span className="section-number">01</span>
                    <h3>POUR DIMENSIONS</h3>
                  </div>
                  <span className="calculator-step">VOLUME</span>
                </div>

                <div className="calculator-fields">
                  <div className="calculator-field-grid">
                    <label>
                      <span>Length (m)</span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={concreteForm.length}
                        onChange={(event) =>
                          updateForm(
                            setConcreteForm,
                            "length",
                            event.target.value,
                          )
                        }
                      />
                    </label>

                    <label>
                      <span>Width (m)</span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={concreteForm.width}
                        onChange={(event) =>
                          updateForm(
                            setConcreteForm,
                            "width",
                            event.target.value,
                          )
                        }
                      />
                    </label>
                  </div>

                  <div className="calculator-field-grid">
                    <label>
                      <span>Depth / thickness (m)</span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={concreteForm.depth}
                        onChange={(event) =>
                          updateForm(
                            setConcreteForm,
                            "depth",
                            event.target.value,
                          )
                        }
                      />
                    </label>

                    <label>
                      <span>Wastage allowance (%)</span>
                      <input
                        type="number"
                        min="0"
                        max="30"
                        step="1"
                        value={concreteForm.wastage}
                        onChange={(event) =>
                          updateForm(
                            setConcreteForm,
                            "wastage",
                            event.target.value,
                          )
                        }
                      />
                    </label>
                  </div>
                </div>

                <button className="calculator-submit" type="submit">
                  CALCULATE CONCRETE <span>→</span>
                </button>
              </form>

              <aside className="estimate-card">
                <div className="estimate-card-top">
                  <span>02</span>
                  <span>MATERIAL SUMMARY</span>
                </div>

                <div className="estimate-content">
                  {hasCalculated ? (
                    <div className="result-list">
                      <div>
                        <span>Concrete volume</span>
                        <strong>
                          {formatNumber(concreteEstimate.wetVolume)} m³
                        </strong>
                      </div>
                      <div>
                        <span>Order volume</span>
                        <strong>
                          {formatNumber(concreteEstimate.orderVolume)} m³
                        </strong>
                      </div>
                      <div>
                        <span>Cement</span>
                        <strong>
                          {formatNumber(concreteEstimate.cementBags, 1)} bags
                        </strong>
                      </div>
                      <div>
                        <span>Sand</span>
                        <strong>
                          {formatNumber(concreteEstimate.sand)} m³
                        </strong>
                      </div>
                      <div>
                        <span>Granite / aggregate</span>
                        <strong>
                          {formatNumber(concreteEstimate.granite)} m³
                        </strong>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="estimate-placeholder-label">
                        CONCRETE MATERIALS
                      </p>
                      <div className="estimate-placeholder">
                        <span>m³</span>
                        <strong>—</strong>
                      </div>
                      <p className="estimate-description">
                        Enter the dimensions of the concrete pour to estimate
                        volume and indicative material quantities.
                      </p>
                    </>
                  )}
                </div>

                <div className="estimate-disclaimer">
                  <strong>Planning assumption:</strong> Material quantities are
                  indicative and based on a generic mix assumption. Structural
                  drawings, concrete grade, mix design and site conditions can
                  change the actual requirement.
                </div>
              </aside>
            </div>
          )}

          {activeCalculator === "blocks" && (
            <div className="calculator-layout">
              <form className="calculator-card" onSubmit={handleCalculate}>
                <div className="calculator-card-header">
                  <div>
                    <span className="section-number">01</span>
                    <h3>WALL DIMENSIONS</h3>
                  </div>
                  <span className="calculator-step">BLOCK COUNT</span>
                </div>

                <div className="calculator-fields">
                  <div className="calculator-field-grid">
                    <label>
                      <span>Wall length (m)</span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={blockForm.wallLength}
                        onChange={(event) =>
                          updateForm(
                            setBlockForm,
                            "wallLength",
                            event.target.value,
                          )
                        }
                      />
                    </label>

                    <label>
                      <span>Wall height (m)</span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={blockForm.wallHeight}
                        onChange={(event) =>
                          updateForm(
                            setBlockForm,
                            "wallHeight",
                            event.target.value,
                          )
                        }
                      />
                    </label>
                  </div>

                  <div className="calculator-field-grid">
                    <label>
                      <span>Openings area (m²)</span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={blockForm.openings}
                        onChange={(event) =>
                          updateForm(
                            setBlockForm,
                            "openings",
                            event.target.value,
                          )
                        }
                      />
                    </label>

                    <label>
                      <span>Wastage allowance (%)</span>
                      <input
                        type="number"
                        min="0"
                        max="30"
                        step="1"
                        value={blockForm.wastage}
                        onChange={(event) =>
                          updateForm(
                            setBlockForm,
                            "wastage",
                            event.target.value,
                          )
                        }
                      />
                    </label>
                  </div>
                </div>

                <button className="calculator-submit" type="submit">
                  CALCULATE BLOCKS <span>→</span>
                </button>
              </form>

              <aside className="estimate-card">
                <div className="estimate-card-top">
                  <span>02</span>
                  <span>BLOCK SUMMARY</span>
                </div>

                <div className="estimate-content">
                  {hasCalculated ? (
                    <div className="result-list">
                      <div>
                        <span>Gross wall area</span>
                        <strong>
                          {formatNumber(blockEstimate.grossArea)} m²
                        </strong>
                      </div>
                      <div>
                        <span>Net wall area</span>
                        <strong>
                          {formatNumber(blockEstimate.netArea)} m²
                        </strong>
                      </div>
                      <div>
                        <span>Base block count</span>
                        <strong>
                          {formatNumber(blockEstimate.baseBlocks, 0)}
                        </strong>
                      </div>
                      <div className="result-list-total">
                        <span>Recommended order quantity</span>
                        <strong>{blockEstimate.blocksWithWastage}</strong>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="estimate-placeholder-label">
                        BLOCK QUANTITY
                      </p>
                      <div className="estimate-placeholder">
                        <span>blocks</span>
                        <strong>—</strong>
                      </div>
                      <p className="estimate-description">
                        Enter your wall dimensions and openings to estimate
                        the required number of blocks.
                      </p>
                    </>
                  )}
                </div>

                <div className="estimate-disclaimer">
                  <strong>Planning assumption:</strong> This uses a nominal
                  450 × 225 mm block face and the wastage allowance you enter.
                  Block dimensions, mortar joints, openings and wall
                  construction details should be confirmed on the project.
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>

      <section className="calculator-tools-section">
        <div className="cost-calculator-container">
          <div className="tools-heading">
            <span className="cost-eyebrow">NEXT IN THE SUITE</span>
            <h2>MORE CONSTRUCTION CALCULATORS</h2>
            <p>
              The calculator suite can be expanded with tiles, paint, roofing,
              labour, cement and reinforcement tools as the underlying
              assumptions are verified.
            </p>
          </div>

          <div className="tools-grid">
            {[
              "Floor Tile Calculator",
              "Paint Calculator",
              "Roofing Calculator",
              "Labour Estimator",
              "Cement Calculator",
              "Reinforcement Calculator",
            ].map((tool, index) => (
              <div className="tool-card" key={tool}>
                <span>0{index + 4}</span>
                <h3>{tool}</h3>
                <p>Planned</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default CostCalculator;
