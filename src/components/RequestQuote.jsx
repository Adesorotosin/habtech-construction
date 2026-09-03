import { useEffect, useState } from "react";
import "./RequestQuote.css";

function RequestQuote({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    location: "",
    budget: "",
    startDate: "",
    projectDescription: "",
    additionalRequirements: "",
  });

  const [submitting, setSubmitting] = useState(false);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      // Send form data as JSON to Formspree
      const response = await fetch("https://formspree.io/f/mppzrwlj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(
          "Thank you for your project enquiry. HABTECH will review your request and get back to you."
        );

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          location: "",
          budget: "",
          startDate: "",
          projectDescription: "",
          additionalRequirements: "",
        });

        onClose();
      } else {
        alert("There was an issue sending your request. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="quote-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="quote-modal">

        {/* Header */}
        <div className="quote-modal-header">

          <div>
            <p className="quote-eyebrow">
              HABTECH CONSTRUCTION
            </p>

            <h2>Request a Quote</h2>

            <p className="quote-intro">
              Tell us about your project and our team will get back to you
              with the next steps.
            </p>
          </div>

          <button
            type="button"
            className="quote-close"
            onClick={onClose}
            aria-label="Close quote form"
          >
            ×
          </button>

        </div>


        {/* Form */}
        <form
          className="quote-form"
          onSubmit={handleSubmit}
        >

          {/* Personal Details */}
          <div className="quote-section-title">
            Your details
          </div>

          <div className="quote-form-grid">

            <div className="quote-field">
              <label htmlFor="fullName">
                Full name *
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>


            <div className="quote-field">
              <label htmlFor="email">
                Email address *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>


            <div className="quote-field">
              <label htmlFor="phone">
                Phone number *
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+234..."
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>


            <div className="quote-field">
              <label htmlFor="company">
                Company / Organization
              </label>

              <input
                id="company"
                name="company"
                type="text"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

          </div>


          {/* Project Details */}
          <div className="quote-section-title">
            Project details
          </div>

          <div className="quote-form-grid">

            <div className="quote-field">
              <label htmlFor="projectType">
                Project type *
              </label>

              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select project type
                </option>

                <option value="Residential">
                  Residential
                </option>

                <option value="Commercial">
                  Commercial
                </option>

                <option value="Industrial">
                  Industrial
                </option>

                <option value="Infrastructure">
                  Infrastructure
                </option>

                <option value="Renovation">
                  Renovation
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>


            <div className="quote-field">
              <label htmlFor="location">
                Project location *
              </label>

              <input
                id="location"
                name="location"
                type="text"
                placeholder="City / State"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>


            <div className="quote-field">
              <label htmlFor="budget">
                Estimated budget
              </label>

              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">
                  Select budget range
                </option>

                <option value="Below ₦10M">
                  Below ₦10M
                </option>

                <option value="₦10M - ₦50M">
                  ₦10M - ₦50M
                </option>

                <option value="₦50M - ₦100M">
                  ₦50M - ₦100M
                </option>

                <option value="₦100M - ₦500M">
                  ₦100M - ₦500M
                </option>

                <option value="Above ₦500M">
                  Above ₦500M
                </option>

                <option value="Not sure yet">
                  Not sure yet
                </option>
              </select>
            </div>


            <div className="quote-field">
              <label htmlFor="startDate">
                Expected start date
              </label>

              <input
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>

          </div>


          {/* Description */}
          <div className="quote-section-title">
            Tell us about the project
          </div>

          <div className="quote-field">

            <label htmlFor="projectDescription">
              Project description *
            </label>

            <textarea
              id="projectDescription"
              name="projectDescription"
              rows="5"
              placeholder="Tell us about the project, scope of work, size, requirements, or anything else that would help us understand what you need."
              value={formData.projectDescription}
              onChange={handleChange}
              required
            />

          </div>


          <div className="quote-field">

            <label htmlFor="additionalRequirements">
              Additional requirements
            </label>

            <textarea
              id="additionalRequirements"
              name="additionalRequirements"
              rows="3"
              placeholder="Any special requirements, specifications, deadlines, or questions?"
              value={formData.additionalRequirements}
              onChange={handleChange}
            />

          </div>


          {/* Submit */}
          <div className="quote-submit-area">

            <p>
              By submitting this form, you agree that HABTECH may contact
              you regarding your project enquiry.
            </p>

            <button
              type="submit"
              className="quote-submit"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit Request"}
              <span>→</span>
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default RequestQuote;