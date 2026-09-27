import { useEffect, useRef, useState } from "react";
import "./RequestQuote.css";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  location: "",
  projectType: "",
  estimatedSize: "",
  projectStage: "",
  budget: "",
  startDate: "",
  projectDescription: "",
  additionalRequirements: "",
};

function RequestQuote({ isOpen, onClose }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [projectFile, setProjectFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const closeButtonRef = useRef(null);
  const previousActiveElementRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    previousActiveElementRef.current = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      previousActiveElementRef.current?.focus?.();
    };
  }, [isOpen]);

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

    setSubmitStatus(null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null;
    setProjectFile(file);
    setSubmitStatus(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const payload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, value);
      });

      if (projectFile) {
        payload.append("projectFile", projectFile);
      }

      const response = await fetch("https://formspree.io/f/mppzrwlj", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Unable to submit quote request");
      }

      setSubmitStatus({
        type: "success",
        message:
          "Thank you. HABTECH will review your project enquiry and get back to you.",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "We could not send your request. Please try again or contact HABTECH directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setFormData(INITIAL_FORM);
    setProjectFile(null);
    setSubmitStatus(null);
    onClose();
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
      <div
        className="quote-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
      >
        <div className="quote-modal-header">
          <div>
            <p className="quote-eyebrow">HABTECH CONSTRUCTION</p>
            <h2 id="quote-modal-title">Request a Quote</h2>
            <p className="quote-intro">
              Tell us about your project so we can understand the scope,
              current stage and information you already have.
            </p>
          </div>

          <button
            type="button"
            className="quote-close"
            ref={closeButtonRef}
            onClick={resetAndClose}
            aria-label="Close quote form"
          >
            ×
          </button>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="quote-section-title">Your details</div>

          <div className="quote-form-grid">
            <div className="quote-field">
              <label htmlFor="fullName">Full name *</label>
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
              <label htmlFor="email">Email address *</label>
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
              <label htmlFor="phone">Phone number *</label>
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
              <label htmlFor="company">Company / Organization</label>
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

          <div className="quote-section-title">Project details</div>

          <div className="quote-form-grid">
            <div className="quote-field">
              <label htmlFor="location">Project location *</label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="City / State / Area"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="quote-field">
              <label htmlFor="projectType">Project type *</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select project type</option>
                <option value="Building construction">Building construction</option>
                <option value="Construction consultation">
                  Construction consultation
                </option>
                <option value="Renovation and remodeling">
                  Renovation and remodeling
                </option>
                <option value="Project management">Project management</option>
                <option value="Site supervision">Site supervision</option>
                <option value="BOQ and cost estimation">
                  BOQ and cost estimation
                </option>
                <option value="Property inspection">Property inspection</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="quote-field">
              <label htmlFor="estimatedSize">Estimated project size</label>
              <input
                id="estimatedSize"
                name="estimatedSize"
                type="text"
                placeholder="e.g. 4-bedroom duplex, 300m²"
                value={formData.estimatedSize}
                onChange={handleChange}
              />
            </div>

            <div className="quote-field">
              <label htmlFor="projectStage">Current project stage *</label>
              <select
                id="projectStage"
                name="projectStage"
                value={formData.projectStage}
                onChange={handleChange}
                required
              >
                <option value="">Select current stage</option>
                <option value="Idea / early planning">Idea / early planning</option>
                <option value="Design / drawings">Design / drawings</option>
                <option value="Approvals">Approvals</option>
                <option value="Site preparation">Site preparation</option>
                <option value="Foundation">Foundation</option>
                <option value="Structural works">Structural works</option>
                <option value="Finishing">Finishing</option>
                <option value="Renovation in progress">
                  Renovation in progress
                </option>
                <option value="Completed property">Completed property</option>
              </select>
            </div>

            <div className="quote-field">
              <label htmlFor="budget">Budget range</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Select budget range</option>
                <option value="Below ₦10M">Below ₦10M</option>
                <option value="₦10M - ₦50M">₦10M - ₦50M</option>
                <option value="₦50M - ₦100M">₦50M - ₦100M</option>
                <option value="₦100M - ₦500M">₦100M - ₦500M</option>
                <option value="Above ₦500M">Above ₦500M</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div className="quote-field">
              <label htmlFor="startDate">Expected start date</label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="quote-section-title">Project information</div>

          <div className="quote-field">
            <label htmlFor="projectDescription">Project description *</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              rows="5"
              placeholder="Tell us what you want to build, renovate, inspect or manage. Include anything important about the scope."
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
              placeholder="Special requirements, specifications, deadlines or questions?"
              value={formData.additionalRequirements}
              onChange={handleChange}
            />
          </div>

          <div className="quote-field quote-file-field">
            <label htmlFor="projectFile">Upload drawings / BOQ</label>
            <input
              id="projectFile"
              name="projectFile"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx,.xls,.xlsx"
              onChange={handleFileChange}
            />
            <small>
              Optional. PDF, images, Word or Excel files. Keep the file size
              within the limit supported by your Formspree plan.
            </small>
            {projectFile && (
              <span className="quote-file-name">
                Selected: {projectFile.name}
              </span>
            )}
          </div>

          {submitStatus && (
            <div
              className={`quote-status quote-status-${submitStatus.type}`}
              role="status"
            >
              {submitStatus.message}
            </div>
          )}

          <div className="quote-submit-area">
            <p>
              By submitting this form, you agree that HABTECH may contact you
              regarding your project enquiry.
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
