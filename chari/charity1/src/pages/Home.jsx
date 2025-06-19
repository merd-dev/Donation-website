import React from "react";
// import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import Hero from "../components/Hero";
import MissionVision from "../components/MissionVision";
import Stats from "../components/Stats";
import Initiatives from "../components/Initiatives";
import Testimonials from "../components/Testimonal";
import Gallery from "../components/Gallery";
import Newsletter from "../components/Newsletter";
import ImpactStories from "../components/ImpactStories"; // New component
import PartnerLogos from "../components/PartnerLogos"; // New component
import VolunteerCTA from "../components/VolunteerCTA"; // New component
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Home() {
  // const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <HeroCarousel />
      {/* Hero Banner */}

      {/* Quick Donation CTA */}
      <section
        className="py-3 text-white"
        style={{ backgroundColor: "#2c3e50" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h4 className="mb-0">
                Emergency: Help feed 500 families this month
              </h4>
            </div>
            <div className="col-md-4 text-md-end mt-2 mt-md-0">
              <button className="btn btn-light btn-lg">Donate Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <MissionVision />

      {/* Impact Stats */}
      <Stats />

      {/* Initiatives Carousel */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our initiatives</h2>
          <Initiatives />
        </div>
      </section>

      <ImpactStories />

      {/* Testimonials */}
      <Testimonials />
      {/* Partner Logos */}
      <PartnerLogos />
      {/* Volunteer CTA */}
      <VolunteerCTA />

      {/* Photo Gallery */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Work in Action</h2>
          <Gallery />
        </div>
      </section>

      {/* Newsletter Signup */}
      <Newsletter />

      <Footer />
      <BackToTop />
    </>
  );
}
