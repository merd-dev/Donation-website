import React from "react";
import "../css/map.css"; // Import the CSS file

function Map() {
  return (
    <div className="map-section">
      <div className="map-container">
        <iframe
          className="map-iframe"
          loading="lazy"
          src="https://maps.google.com/maps?q=Harar%2C%20Ethiopia&amp;t=m&amp;z=18&amp;output=embed&amp;iwloc=near"
          title="Harar, Ethiopia"
          aria-label="Harar, Ethiopia"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
