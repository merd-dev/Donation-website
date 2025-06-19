import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Hero";
// import educationImg from "../src/assets/education.jpg";
// import waterImg from "../src/assets/water.jpg";
// import schoolImg from "../src/assets/school.jpg";

export default function HeroCarousel() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Using reliable image sources with fallbacks
  const carouselItems = [
    {
      image: "../src/assets/education.jpg", // Local image path
      fallbackImage: "https://example.com/education-fallback.jpg",
      title: "Education for Every Child",
      subtitle: "Sponsor a child's education today",
      cta: "Learn More",
      youtubeLink: "https://www.youtube.com/watch?v=HPCW_CSKy3o",
    },
    {
      image: "../src/assets/water.jpg",

      title: "Clean Water Initiative",
      subtitle: "Bringing safe drinking water to communities",
      cta: "Support Now",
    },
    {
      image: "../src/assets/school.jpg",
      fallbackImage:
        "https://images.pexels.com/photos/5726709/pexels-photo-5726709.jpeg",
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
    <>
      <Carousel fade controls={false} indicators={true} interval={5000}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="hero-slide-container">
              {/* Image with fallback handling */}
              <img
                className="hero-image"
                src={item.image}
                alt={item.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = item.fallbackImage;
                }}
              />
              <div className="carousel-caption">
                <h1>{item.title}</h1>
                <p>{item.subtitle}</p>
                <div className="cta-buttons">
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
        <div className="video-modal-overlay">
          <div className="video-modal-content">
            <button
              className="close-button"
              onClick={() => setSelectedVideo(null)}
            >
              ×
            </button>
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(
                  selectedVideo
                )}?autoplay=1`}
                title="YouTube video"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
