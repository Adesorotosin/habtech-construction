import React, { useState } from "react";
import "./BidModal.css";

const BidModal = ({ isOpen, onClose }) => {
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);

    try {
      // Replace with your actual Formspree endpoint URL
      const response = await fetch("https://formspree.io/f/mppzrwlj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Thank you! Your bid proposal request has been submitted.");
        onClose();
      } else {
        alert("There was an issue submitting your request. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bid-modal-overlay" onClick={onClose}>
      <div className="bid-modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="bid-modal-close" onClick={onClose}>
          &times;
        </button>

        <div className="bid-modal-header">
          <span className="bid-orange-tag">REQUEST A QUOTE</span>
          <h2>GET A BID PROPOSAL</h2>
          <p>Fill out the form below and our engineering team will get back to you with a detailed estimate.</p>
        </div>

        <form onSubmit={handleSubmit} className="bid-form">
          <div className="bid-form-row">
            <div className="bid-form-group">
              <label>Full Name *</label>
              <input type="text" name="fullName" required placeholder="e.g. John Doe" />
            </div>
            <div className="bid-form-group">
              <label>Email Address *</label>
              <input type="email" name="email" required placeholder="john@company.com" />
            </div>
          </div>

          <div className="bid-form-row">
            <div className="bid-form-group">
              <label>Phone Number *</label>
              <input type="tel" name="phone" required placeholder="+234 800 000 0000" />
            </div>
            <div className="bid-form-group">
              <label>Project Sector *</label>
              <select name="sector" required defaultValue="">
                <option value="" disabled>Select Sector</option>
                <option value="residential">Residential</option>
                <option value="industrial">Industrial</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
          </div>

          <div className="bid-form-group">
            <label>Project Scope & Details *</label>
            <textarea name="details" rows="4" required placeholder="Briefly describe your project requirements..."></textarea>
          </div>

          <button type="submit" className="bid-submit-btn" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Proposal Request"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BidModal;