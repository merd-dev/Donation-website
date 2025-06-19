import React, { useState } from "react";

export default function VolunteerCTA() {
  const [showVideo, setShowVideo] = useState(false);

  // Example YouTube URL (replace with your actual video URL)
  const youtubeUrl = "https://youtu.be/HPCW_CSKy3o?feature=shared";

  // Function to extract video ID from any YouTube URL format
  const getYouTubeId = (url) => {
    // Handle youtu.be links
    if (url.includes("youtu.be/")) {
      return url.split("youtu.be/")[1].split("?")[0];
    }
    // Handle regular YouTube links
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(youtubeUrl);

  return (
    <>
      <section
        className="py-5 text-white"
        style={{ backgroundColor: "#2c3e50" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="mb-3">Become a Volunteer</h2>
              <p className="lead mb-0">
                Join our team of changemakers and make a direct impact in Nile
                communities
              </p>
            </div>
            <div className="col-md-4 text-md-end mt-4 mt-md-0">
              <button className="btn btn-light btn-lg px-4 me-2">
                Apply Now
              </button>
              <button
                className="btn btn-outline-light btn-lg px-4"
                onClick={() => setShowVideo(true)}
                disabled={!videoId}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && videoId && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "90%",
              maxWidth: "1000px",
              position: "relative",
            }}
          >
            <button
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setShowVideo(false)}
            >
              ×
            </button>

            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Volunteer Information Video"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
