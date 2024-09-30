import React from "react";
import "./Homesection.css"; 

const Homesection = () => {
  return (
    <section className="home-section container">
      <div className="position-relative">
    
        <img
          src="/Assets/home.png" 
          className="background-image img-fluid"
          alt="Disaster Safety"
        />

      
        <div className="overlay-text">
          <h1 className="heading-text">Stay Ahead of Disasters, Stay Safe</h1>
          <p className="para-text">
            Real-time disaster alerts, data analytics, and actionable insights
            to keep you and your loved ones safe.
          </p>
        </div>

       
        <div className="button-container">
          <button className="bottom-right-btn">Download App</button>
        </div>
      </div>
    </section>
  );
};

export default Homesection;
