import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Health from "../assets/Initiatives/Health.jpg";
import Food from "../assets/Initiatives/Food.jpg";
import Education from "../assets/Initiatives/Education.jpg";
import "../css/initiatives.css";

import FoodService from "./FoodServices";
import HealthService from "./HealthServices";
import EducationService from "./EducationServices";

const Initiatives = () => {
  const isMobile = window.innerWidth <= 768;

  const [card, setCard] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.slow,
  });

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSlideClick = (type, index) => {
    if (card.goToSlide === index) {
      setSelectedComponent((prev) => (prev === type ? null : type));
    }
    setCard({ ...card, goToSlide: index });
  };

  const InCards = [
    {
      key: uuidv4(),
      content: (
        <div className="slide-container">
          <img src={Education} alt="Education Initiative" />
          <div className="slide-text">
            <h3>Education Initiative</h3>
            <p>Supporting underprivileged children's education</p>
          </div>
        </div>
      ),
      type: "education",
    },
    {
      key: uuidv4(),
      content: (
        <div className="slide-container">
          <img src={Health} alt="Health Initiative" />
          <div className="slide-text">
            <h3>Health Initiative</h3>
            <p>Providing healthcare to those in need</p>
          </div>
        </div>
      ),
      type: "health",
    },
    {
      key: uuidv4(),
      content: (
        <div className="slide-container">
          <img src={Food} alt="Food Initiative" />
          <div className="slide-text">
            <h3>Food Initiative</h3>
            <p>Fighting hunger in our communities</p>
          </div>
        </div>
      ),
      type: "food",
    },
  ].map((slide, index) => ({
    ...slide,
    onClick: () => handleSlideClick(slide.type, index),
  }));

  const onRight = () => {
    setCard({ ...card, goToSlide: card.goToSlide + 1 });
  };

  const onLeft = () => {
    setCard({ ...card, goToSlide: card.goToSlide - 1 });
  };

  return (
    <div className="Initiatives">
      <div className="title">
        <h3 className="text-center">
          <span>Donation</span> Packages
        </h3>
      </div>

      <div className="initiative-cards">
        <Carousel
          slides={InCards}
          goToSlide={card.goToSlide}
          offsetRadius={card.offsetRadius}
          showNavigation={card.showNavigation}
          animationConfig={card.config}
        />
      </div>

      <div className="arrows">
        <svg
          onClick={onLeft}
          xmlns="http://www.w3.org/2000/svg"
          width={isMobile ? "30" : "40"}
          height={isMobile ? "30" : "40"}
          fill="currentColor"
          className="leftarr bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
        <svg
          onClick={onRight}
          xmlns="http://www.w3.org/2000/svg"
          width={isMobile ? "30" : "40"}
          height={isMobile ? "30" : "40"}
          fill="currentColor"
          className="rightarr bi bi-arrow-right-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
        </svg>
      </div>

      {/* Component display below the carousel */}
      <div style={{ marginTop: "40px" }}>
        {selectedComponent === "education" && <EducationService />}
        {selectedComponent === "health" && <HealthService />}
        {selectedComponent === "food" && <FoodService />}
      </div>
    </div>
  );
};

export default Initiatives;
