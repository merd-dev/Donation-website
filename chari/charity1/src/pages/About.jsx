import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import PageHeader from "../components/PageHeader";
import Stats from "../components/Stats";
import MissionVision from "../components/MissionVision";
import Team from "../components/Team";
import Journey from "../components/Journey";
import image from "../assets/Initiatives/nile-hero.jpg";
export default function About() {
  return (
    <>
      <Navbar />
      <PageHeader title="About Us" path="/about" name="About Us" />

      {/* About Introduction Section */}
      <section className="about-intro py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src={image}
                alt="Nile Charity Team"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">Our Story</h2>
              <p className="lead">
                Founded in 2015, Nile Charity is dedicated to transforming lives
                along the Nile charity.
              </p>
              <p>
                What began as a small initiative to provide clean water to
                riverside communities has grown into a comprehensive
                humanitarian organization serving thousands across multiple
                countries.
              </p>
              <p>
                Our work focuses on sustainable development that empowers
                communities while collecting the donation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Impact Stats Section */}
      <Stats />

      {/* Our Journey Timeline */}
      <Journey />

      {/* Team Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Leadership</h2>
            <p className="lead">
              The passionate individuals driving our mission forward
            </p>
          </div>
          <Team />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Core Values</h2>
          <div className="row g-4">
            {[
              {
                icon: "🌱",
                title: "Sustainability",
                description:
                  "We implement solutions that create lasting change without harming the environment.",
              },
              {
                icon: "🤝",
                title: "Community Partnership",
                description:
                  "We work with local communities to develop solutions that meet their specific needs.",
              },
              {
                icon: "🔍",
                title: "Transparency",
                description:
                  "We maintain open books and regular reporting so donors see exactly how funds are used.",
              },
              {
                icon: "❤️",
                title: "Compassion",
                description:
                  "We serve all people with dignity, regardless of religion, ethnicity, or background.",
              },
              {
                icon: "🌍",
                title: "Environmental Stewardship",
                description:
                  "We protect the Nile ecosystem while helping communities thrive.",
              },
              {
                icon: "✨",
                title: "Innovation",
                description:
                  "We constantly seek better ways to solve complex challenges.",
              },
            ].map((value, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="display-4 mb-3">{value.icon}</div>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Partners</h2>
          <div className="row justify-content-center align-items-center g-4">
            {[
              "../src/assets/logo-2.jpg",
              "../src/assets/10001.svg",
              "../src/assets/10002.svg",
              "../src/assets/logo7.png",
            ].map((logo, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="partner-logo p-4">
                  <img src={logo} alt="Partner Logo" className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}
