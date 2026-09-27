import { useEffect, useRef, useState } from "react";
import "./CTA.css";

function AnimatedNumber({ value, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const numberRef = useRef(null);

  useEffect(() => {
    const element = numberRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = value * easedProgress;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, value, duration]);

  return (
    <strong ref={numberRef}>
      {value === 2.5
        ? `${count.toFixed(1)}M`
        : `${Math.floor(count)}${suffix}`}
    </strong>
  );
}

function CTA({ onOpenQuote }) {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>READY TO LAY THE FIRST STONE?</h2>

        <div className="cta-line">
          <span></span>
        </div>

        <div className="cta-stats">
          <div className="cta-stat">
            <AnimatedNumber value={25} suffix="+" />
            <span>PROJECTS COMPLETED</span>
          </div>

          <div className="cta-stat">
            <AnimatedNumber value={2.5} />
            <span>SAFE WORK HOURS</span>
          </div>

          <div className="cta-stat">
            <AnimatedNumber value={100} suffix="%" />
            <span>COMPLIANCE RECORD</span>
          </div>
        </div>

        <button
          type="button"
          className="cta-button"
          onClick={onOpenQuote}
        >
          GET A BID PROPOSAL
        </button>
      </div>
    </section>
  );
}

export default CTA;
