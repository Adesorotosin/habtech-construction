import "./Testimonials.css";

const testimonials = [
  {
    name: "Jerome Bell",
    role: "Home owner",
    image: "/assets/portfolio_1.avif",
    text:
      "Our office renovation exceeded all expectations! The team was professional, punctual, and incredibly skilled. They handled every challenge with ease and delivered stunning results. We now have a workspace that inspires creativity.",
  },
  {
    name: "Robert Fox",
    role: "Home owner",
    image: "/assets/portfolio_2.avif",
    text:
      "Our office renovation exceeded all expectations! The team was professional, punctual, and incredibly skilled. They handled every challenge with ease and delivered stunning results. We now have a workspace that inspires creativity.",
  },
  {
    name: "Kristin Watson",
    role: "Project Manager",
    image: "/assets/portfolio_3.avif",
    text:
      "Working with the HABTECH team was an excellent experience. They communicated clearly throughout the project and delivered quality work while maintaining a high level of professionalism.",
  },
  {
    name: "Cameron Williamson",
    role: "Property Developer",
    image: "/assets/portfolio_4.avif",
    text:
      "HABTECH delivered exactly what we envisioned. Their attention to detail, technical expertise, and commitment to quality made the entire construction process smooth and reliable.",
  },
  {
    name: "Jane Cooper",
    role: "Business Owner",
    image: "/assets/Habtech logo.jpg",
    text:
      "From planning to completion, the team demonstrated impressive professionalism. The final result exceeded our expectations, and we would gladly recommend HABTECH for future projects.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">

      <div className="testimonials-container">

        {/* Section Heading */}
        <div className="testimonials-header">

          <h2>HEAR FROM OUR CUSTOMERS</h2>

          <p>
            Our clients trust us for our reliability, attention to details,
            and dedication to delivering projects on time and within budget.
            Hear from those who have experienced the quality and
            professionalism that sets us apart in the construction industry.
          </p>

        </div>


        {/* Testimonials Marquee */}
        <div className="testimonial-marquee">

          <div className="testimonial-track">

            {/* First set */}
            {testimonials.map((testimonial, index) => (
              <article
                className="testimonial-card"
                key={`first-${index}`}
              >

                <img
                  className="testimonial-avatar"
                  src={testimonial.image}
                  alt={testimonial.name}
                />

                <h3>{testimonial.name}</h3>

                <p className="testimonial-role">
                  {testimonial.role}
                </p>

                <p className="testimonial-text">
                  {testimonial.text}
                </p>

              </article>
            ))}


            {/* Duplicate set for seamless marquee */}
            {testimonials.map((testimonial, index) => (
              <article
                className="testimonial-card"
                key={`second-${index}`}
                aria-hidden="true"
              >

                <img
                  className="testimonial-avatar"
                  src={testimonial.image}
                  alt=""
                />

                <h3>{testimonial.name}</h3>

                <p className="testimonial-role">
                  {testimonial.role}
                </p>

                <p className="testimonial-text">
                  {testimonial.text}
                </p>

              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;