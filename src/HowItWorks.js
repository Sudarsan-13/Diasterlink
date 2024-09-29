import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HowItWorks.css"; // Import the external CSS file

const HowItWorks = () => {
  return (
    <>
      {/* New Heading and Paragraph above the container */}
      <div className="how-it-works-top-text">
        <p className="how-it-works-paragraph">How disaster link works</p>
        <h2 className="how-it-works-heading">How it works</h2>
      </div>

      <Container fluid className="p-5 how-it-works-container">
        {/* Inner Content */}
        <div className="how-it-works-section-content">
          <Row className="align-items-center justify-content-center">
            {/* Left side: Text content */}
            <Col md={6} className="p-4 text-center text-md-left">
              {/* Box with "01" */}
              <div className="how-it-works-box-style">01</div>

              {/* Large Heading */}
              <h4 className="how-it-works-custom-heading">
                Sign Up & Customize Alerts
              </h4>

              {/* Paragraph */}
              <p className="how-it-works-custom-paragraph">
                Create your profile, set your location, and choose the types of
                alerts that matter most to you.
              </p>

              {/* Button */}
              <Button
                className="how-it-works-custom-button"
                variant="dark"
                size="lg"
              >
                Download App
              </Button>
            </Col>

            {/* Right side: Image */}
            <Col md={6} className="text-center">
              <img
                className="how-it-works-img-fluid"
                src="/Assets/01.png"
                alt="App screenshot"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default HowItWorks;
