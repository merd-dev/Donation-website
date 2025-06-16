import React from "react";
import "../css/contact.css";

function ContactGet() {
  return (
    <div className="contact-container">
      <div className="contact-section" id="contact">
        <div className="contact-info">
          <h2 className="contact-title">
            Contact <span className="highlight">Us!</span>
          </h2>
          <h4 className="organization-name">Nile Donation</h4>
          <p className="contact-description">
            We're committed to providing exceptional support. For inquiries
            about donations, partnerships, or media requests, please use the
            contact form. Our team typically responds within 24 hours.
          </p>
          <ul className="contact-details">
            <li className="contact-item">
              <a href="tel:0912234527" className="contact-link">
                +251984600700
              </a>
            </li>
            <li className="contact-item">
              <a href="mailto:Eyuel@gmail.com" className="contact-link">
                info@majmuaa.com
              </a>
            </li>
            <li className="contact-item">
              <a href="#" className="contact-link">
                Harar, Ethiopia
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-form-wrapper">
          <div className="form-intro">
            <h3 className="form-title">We'd Love to Hear from You!</h3>
            <p className="form-subtitle">
              Send us a message below, and we'll get back to you as soon as
              possible.
            </p>
          </div>
          <form className="contact-form">
            <input
              type="text"
              className="form-input"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              className="form-input"
              placeholder="Your Email"
              required
            />
            <input
              type="tel"
              className="form-input"
              placeholder="Your Mobile Number"
              required
            />
            <textarea
              className="form-textarea"
              placeholder="Message"
              cols="35"
              rows="10"
              required
            ></textarea>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactGet;
