import React from "react";
import "./RealTimeSection.css"; 

const RealTimeSection = () => {
  return (
    <div className="real-time-container">
      <div className="real-time-row align-items-center">
      
        <div className="real-time-col-lg-6 real-time-text-section">
          <h2 className="real-time-title">Real-Time Data</h2>
          <h4 className="real-time-subtitle">Track Disasters in Real-Time</h4>
          <p className="real-time-description">
            Monitor live data streams, view interactive maps, and stay ahead of
            every disaster happening around you. See it, understand it, and act
            fast.
          </p>
        </div>

        
        <div className="real-time-col-lg-6 real-time-col-md-6 real-time-col-sm-12 real-time-image-section img-fluid">
          <div className="real-time-img-container">
            <img
              src="/Assets/homeimg2.png"
              alt="Data Dashboard"
              className="real-time-img1 img-fluid"
            />
            <img
              src="/Assets/homeimg1.png"
              alt="Analytics Chart"
              className="real-time-img2 img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeSection;
