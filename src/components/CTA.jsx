import "./CTA.css";

function CTA({ onOpenQuote }) {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <span className="cta-eyebrow">START THE CONVERSATION</span>

        <h2>READY TO PLAN YOUR NEXT PROJECT?</h2>

        <div className="cta-line">
          <span></span>
        </div>

        <p className="cta-description">
          Tell Habtech what you are building, renovating, inspecting, or
          managing. We can help you identify the right next step.
        </p>

        <div className="cta-points">
          <span>PROJECT PLANNING</span>
          <span>BOQ & ESTIMATION</span>
          <span>SITE SUPERVISION</span>
          <span>PROPERTY INSPECTION</span>
        </div>

        <button
          type="button"
          className="cta-button"
          onClick={onOpenQuote}
        >
          GET A QUOTE
        </button>
      </div>
    </section>
  );
}

export default CTA;