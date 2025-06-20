import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import educationImg from "../assets/education.jpg";
import waterImg from "../assets/water.jpg";
import schoolImg from "../assets/school.jpg";
import "../css/Hero.css";

export default function HeroCarousel() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const carouselItems = [
    {
      image: educationImg,
      title: "Education for Every Child",
      subtitle: "Sponsor a child's education today",
      cta: "Learn More",
      youtubeLink: "https://www.youtube.com/watch?v=HPCW_CSKy3o",
    },
    {
      image: waterImg,
      title: "Clean Water Initiative",
      subtitle: "Bringing safe drinking water to communities",
      cta: "Support Now",
    },
    {
      image: schoolImg,
      title: "Medical Camps",
      subtitle: "Providing healthcare to remote villages",
      cta: "Donate Medical Supplies",
    },
  ];

  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <div className="hero-carousel-container">
      <Carousel fade controls={false} indicators={true} interval={5000}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="hero-slide">
              <img
                className="hero-image"
                src={item.image}
                alt={item.title}
              />
              <div className="hero-content">
                <h1>{item.title}</h1>
                <p>{item.subtitle}</p>
                <div className="hero-buttons">
                  {item.youtubeLink ? (
                    <button
                      className="btn btn-primary"
                      onClick={() => setSelectedVideo(item.youtubeLink)}
                    >
                      {item.cta}
                    </button>
                  ) : (
                    <button className="btn btn-primary">{item.cta}</button>
                  )}
                  <button className="btn btn-outline-light">Our Work</button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {selectedVideo && (
        <div className="video-modal">
          <div className="video-modal-content">
            <button
              className="video-close-btn"
              onClick={() => setSelectedVideo(null)}
            >
              ×
            </button>
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(
                  selectedVideo
                )}?autoplay=1`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}