import "./Testimonials.css";

const clientPrinciples = [
  { number: "01", title: "Clear communication", text: "Project information, decisions, scope changes, and next steps should be communicated clearly throughout the work." },
  { number: "02", title: "Practical planning", text: "Good preparation helps clients understand what needs to happen before major construction decisions are made." },
  { number: "03", title: "Quality-focused execution", text: "Construction work should be coordinated around drawings, specifications, workmanship, safety, and agreed requirements." },
  { number: "04", title: "Transparent estimation", text: "A clear BOQ and cost review can help clients understand quantities, scope, and the assumptions behind project costs." },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>WHAT CLIENTS SHOULD EXPECT</h2>
          <p>We are building this experience around the fundamentals that matter when choosing construction support: clarity, planning, quality, and responsible project coordination.</p>
        </div>
        <div className="testimonial-marquee testimonial-principles">
          <div className="testimonial-track">
            {clientPrinciples.map((item) => <article className="testimonial-card" key={item.number}><span className="principle-number">{item.number}</span><h3>{item.title}</h3><p className="testimonial-text">{item.text}</p></article>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;