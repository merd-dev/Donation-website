import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import mainImage from "../assets/signup_bg.png";
import staff1 from "../assets/testimonals/staff1.jpeg";
import staff2 from "../assets/testimonals/staff2.jpeg";
import "../css/about.css";

export default function About() {
  const navigate = useNavigate();

  // Sample team members (replace with real data)
  const teamMembers = [
    {
      id: 1,
      name: "Merdekiyos Estifanos",
      role: "Founder & Director",
      image: staff1, // Replace with actual image
    },
    {
      id: 2,
      name: "Abebe Kebede",
      role: "Program Coordinator",
      image: staff2, // Replace with actual image
    },
  ];

  return (
    <div className="about-page">
      <Navbar />

      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h4>About Nile NGO</h4>
              <p className="mx-auto" style={{ maxWidth: "800px" }}>
                Dedicated to transforming lives through education, health, and
                food initiatives for underprivileged communities in Ethiopia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Our Mission</h3>
              <p>
                To empower underprivileged children and communities by providing
                access to quality education, healthcare, and nutrition,
                fostering sustainable development.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Our Vision</h3>
              <p>
                A world where every child has the opportunity to thrive, and
                communities are self-sufficient and resilient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3>Our Story</h3>
              <p>
                Founded in 2020 in Harar, Ethiopia, Nile NGO began with a simple
                goal: to support vulnerable children with education and
                healthcare. Over the years, we’ve expanded to address food
                insecurity and community development, impacting thousands of
                lives with the help of dedicated volunteers and donors.
              </p>
              <button
                className="btn btn-outline-info"
                onClick={() => navigate("/donate")}
              >
                Support Our Work
              </button>
            </div>
            <div className="col-md-6">
              <img
                src={mainImage}
                alt="Nile NGO Story"
                className="story-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header text-center">
            <h3>Meet Our Team</h3>
            <h2>Driving Change Together</h2>
          </div>
          <div className="row">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-md-6">
                <div className="team-card">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-img"
                  />
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Join Our Mission</h2>
              <p>
                Your support can change lives. Donate today or get involved with
                Nile NGO to make a difference.
              </p>
              <button
                className="btn btn-success"
                onClick={() => navigate("/donate")}
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
