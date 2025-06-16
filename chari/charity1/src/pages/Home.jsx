import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Initiatives from "../components/Initiatives";
import Funds from "../components/Funds";
import mainImage from "../assets/carousel-1.jpg";
import "../css/home.css";

export default function HomePage() {
  const navigate = useNavigate();

  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      name: "Abebe Kebede",
      text: "Nile NGO transformed my community by providing educational resources for children.",
      image: "../assets/testimonial1.jpg",
    },
    {
      id: 2,
      name: "Fatima Ali",
      text: "Their health initiatives saved lives in my village. I'm proud to support Nile!",
      image: "../assets/testimonial2.jpg",
    },
  ];

  return (
    <div className="homepage">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${mainImage})` }}
        >
          <div className="hero-overlay">
            <div className="hero-content container">
              <h1 className="hero-title">Welcome to Nile NGO</h1>
              <p className="hero-subtitle">
                Transforming lives through education, health, and food
                initiatives. Join us in building a brighter future for
                underprivileged communities.
              </p>
              <div className="hero-buttons">
                <button
                  className="btn btn-donate"
                  onClick={() => navigate("/donate")}
                >
                  Donate Now
                </button>
                <button
                  className="btn btn-learn"
                  onClick={() => navigate("/about")}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Initiatives Section */}
      <section className="section initiatives-section">
        <div className="container">
          <div className="section-header">
            <h3 className="section-subtitle">Our Impactful Initiatives</h3>
            <h2 className="section-title">Support Our Causes</h2>
          </div>
          <Initiatives />
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="section impact-section">
        <div className="container">
          <div className="section-header">
            <h3 className="section-subtitle">Our Achievements</h3>
            <h2 className="section-title">Making a Difference</h2>
          </div>
          <Funds />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <h3 className="section-subtitle">What People Say</h3>
            <h2 className="section-title">Stories of Impact</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-img"
                  />
                  <blockquote className="testimonial-text">
                    "{testimonial.text}"
                  </blockquote>
                  <h4 className="testimonial-author">{testimonial.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Be the Change Today</h2>
            <p className="cta-text">
              Your donation, big or small, can change lives. Support Nile NGO's
              mission to uplift communities.
            </p>
            <button
              className="btn btn-donate"
              onClick={() => navigate("/donate")}
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="section-header">
            <h3 className="section-subtitle">Get In Touch</h3>
            <h2 className="section-title">Contact Us</h2>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <p>Harar, Ethiopia</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone contact-icon"></i>
              <p>+251984600700</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope contact-icon"></i>
              <p>info@majmuaa.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
