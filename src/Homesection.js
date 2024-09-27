import React from "react";
import "./Homesection.css"; // Updated CSS file

const Homesection = () => {
  return (
    <section className="home-section">
      <div className="position-relative">
        {/* Background Image */}
        <img
          src="/assets/home.jpg" // Ensure this image is in the public/assets folder
          className="background-image img-fluid"
          alt="Disaster Safety"
        />

        {/* Overlay Text - Positioned on the left */}
        <div className="overlay-text">
          <h1 className="heading-text">Stay Ahead of Disasters, Stay Safe</h1>
          <p className="para-text">
            Real-time disaster alerts, data analytics, and actionable insights
            to keep you and your loved ones safe.
          </p>
        </div>

        {/* Button in bottom right corner */}
        <div className="button-container">
          <button className="bottom-right-btn">Download App</button>
        </div>
      </div>
    </section>
  );
};

export default Homesection;
