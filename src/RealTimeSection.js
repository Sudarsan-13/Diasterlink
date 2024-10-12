import React from "react";
import "./RealTimeSection.css"; // Import the updated CSS file

const RealTimeSection = () => {
  return (
    <div className="container real-time-section">
      <div className="row align-items-center">
        {/* Left text section */}
        <div className="col-lg-6 text-section">
          <h2 className="section-title">Real-Time Data</h2>
          <h4 className="section-subtitle">Track Disasters in Real-Time</h4>
          <p className="section-description">
            Monitor live data streams, view interactive maps, and stay ahead of
            every disaster happening around you. See it, understand it, and act
            fast.
          </p>
        </div>

        {/* Right image section */}
        <div className="col-lg-6 image-section">
          <div className="img-container">
            <img
              src="/Assets/homeimg2.png"
              alt="Data Dashboard"
              className="img1"
            />
            <img
              src="/Assets/homeimg1.png"
              alt="Analytics Chart"
              className="img2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeSection;
