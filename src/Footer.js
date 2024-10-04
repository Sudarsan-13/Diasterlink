import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="title">Let’s start now</h2>
          <p className="description">
            At Disaster Guardian, our mission is to equip communities with the
            tools they need to stay informed, prepared, and protected. We’re
            driven by the belief that knowledge saves lives.
          </p>
          <div className="app-buttons">
            <a href="#hi" className="app-button">
              <img
                src="/Assets/playstore.png"
                alt="Google Play"
                className="app-icon"
              />
              <span className="app-text">Google Play</span>
            </a>
            <a href="#" className="app-button">
              <img
                src="/Assets/appstore.png"
                alt="App Store"
                className="app-icon"
              />
              <span className="app-text">App Store</span>
            </a>
          </div>
        </div>

        {/* Vertical Line */}
        <div className="vertical-line"></div>

        {/* Right Section */}
        <div className="footer-right">
          <h3 className="links-title">Useful Links</h3>
          <ul className="links-list">
            <li>
              <a href="#" className="link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="link">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="link">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Benefits
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;