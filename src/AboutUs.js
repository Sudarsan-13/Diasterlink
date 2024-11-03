import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us-section d-flex ">
      {/* Left container for text */}
      <div className="text-container">
        <h1 className="about-title">About Us</h1>
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-text">
          At Disaster Guardian, our mission is to equip communities with the
          tools they need to stay informed, prepared, and protected. We’re
          driven by the belief that knowledge saves lives.
        </p>
        {/* Avatar section */}
        <div className="avatar-section">
          <div className="avatar-group d-flex">
            <img className="avatar-image" src="/Assets/avatar1.png" alt="Avatar 1" />
            <img className="avatar-image" src="/Assets/avartar2.png" alt="Avatar 2" />
            <img className="avatar-image" src="/Assets/avatar3.png" alt="Avatar 3" />
            <img className="avatar-image" src="/Assets/avatar4.png" alt="Avatar 4" />
            <p className="avatar-caption">Empowering<br></br>communities</p>
          </div>
        </div>
      </div>

      {/* Right container for image */}
      <div className="image-container">
        <img className="about-image" src="/Assets/aboutus.png" alt="Group" />
      </div>
    </section>
  );
};

export default AboutUs;
