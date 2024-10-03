import React, { useEffect } from "react";
import "./Homesection.css";
import ScrollReveal from "scrollreveal";

const Homesection = () => {
  useEffect(() => {

    ScrollReveal().reveal(".heading-text", {
      origin: "top",
      distance: "50px",
      duration: 800,
      delay: 200,
      easing: "ease-in-out",
      opacity: 0,
      
    });

    ScrollReveal().reveal(".para-text", {
      origin: "left",
      distance: "40px",
      duration: 800,
      delay: 250,
      easing: "ease-in-out",
     
    });

    ScrollReveal().reveal(".background-image", {
      opacity: 0, // Start with opacity 0
      duration: 1200,
      delay: 100, 
      easing: "ease-in-out",
     
    });

    ScrollReveal().reveal(".animate", {
      origin: "bottom",
      distance: "50px",
      duration: 900,
      delay: 600, // Slightly delayed after the paragraph
      easing: "ease-in-out",
      opacity: 0,
      
    });
  }, []);

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
          <button className="animate">
            <span>Download App</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Homesection;
