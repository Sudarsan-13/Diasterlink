import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HowItWorks02.css"; // Import the external CSS file

const HowItWorks02 = () => {
  return (
    <Container fluid className="p-5 how-it-works-reversed-container">
      <div className="section-content">
        <Row className="align-items-center justify-content-center">
          {/* Right side: Text content (will be on top on smaller screens) */}
          <Col md={6} className="p-4 text-center text-md-left order-md-2">
            {/* Box with "01" */}
            <div className="box-style">02</div>

            {/* Large Heading */}
            <h4 className="custom-heading">Get Real-Time Updates</h4>

            {/* Paragraph */}
            <p className="custom-paragraph">
              Receive live alerts on natural disasters affecting your area
              through SMS, email, or push notifications.
            </p>

            {/* Button */}
            <Button className="custom-button" variant="dark" size="lg">
              Download App
            </Button>
          </Col>

          {/* Left side: Image */}
          <Col md={6} className="text-center order-md-1">
            <img
              className="img-fluid img"
              src="/Assets/01.png"
              alt="App screenshot"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default HowItWorks02;
