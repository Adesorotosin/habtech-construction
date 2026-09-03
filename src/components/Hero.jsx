import { useState } from "react";
import "./Hero.css";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageSlides = [
    {
      left: "/assets/Habtech construction1.avif",
      right: "/assets/Habtech construction 2.avif",
    },
    {
      left: "/assets/Habtech construction3.avif",
      right: "/assets/Habtech construction4.avif",
    },
    {
      left: "/assets/Habtech construction5.avif",
      right: "/assets/Habtech construction6.avif",
    },
  ];

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? imageSlides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === imageSlides.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Top Content */}
        <div className="hero-intro">
          <div className="hero-title">
            <h1>
              Building Beyond
              <br />
              Structure
            </h1>
          </div>

          <div className="hero-description">
            <div className="orange-line"></div>

            <p>
              According to Vitruvius, the architect should strive to fulfil
              each of these three attributes as well as possible.
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="hero-controls">
          <button
            className="previous-button"
            aria-label="Previous image"
            onClick={previousSlide}
          >
            <span>←</span>
          </button>

          <button
            className="next-button"
            aria-label="Next image"
            onClick={nextSlide}
          >
            Next <span>→</span>
          </button>
        </div>

        {/* Image and Content Area */}
        <div className="hero-showcase">
          {/* Left Image */}
          <div className="hero-image hero-image-left">
            <img
              src={imageSlides[currentSlide].left}
              alt="HABTECH construction project"
            />
          </div>

          {/* Right Image */}
          <div className="hero-image hero-image-right">
            <img
              src={imageSlides[currentSlide].right}
              alt="HABTECH construction project"
            />
          </div>

          {/* Blue Information Card */}
          <div className="hero-card hero-card-blue">
            <h2>
              Future-shaping strategic
              <br />
              consultancy
            </h2>

            <p>
              We work with our customers in their business and investment
              planning to develop new solutions to meet changing needs,
              leveraging our customer insight, practical expertise and broad
              range of capabilities.
            </p>
          </div>

          {/* White Information Card */}
          <div className="hero-card hero-card-white">
            <h2>
              Consultancy and
              <br />
              advisory
            </h2>

            <p>
              We engineer and integrate digital solutions into our projects
              to improve the performance of our infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;