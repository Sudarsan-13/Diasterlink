import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HowItWorks04.css"; // Import the external CSS file

const HowItWorks = () => {
  return (
    <>
      <Container fluid className="p-5 how-it-works-container4">
        {/* Inner Content */}
        <div className="how-it-works-section-content4">
          <Row className="align-items-center justify-content-center">
            {/* Left side: Text content */}
            <Col md={6} className="p-4 text-center text-md-left">
              {/* Box with "01" */}
              <div className="how-it-works-box-style">04</div>

              {/* Large Heading */}
              <h4 className="how-it-works-custom-heading">Take Action</h4>

              {/* Paragraph */}
              <p className="how-it-works-custom-paragraph">
                Use verified evacuation routes and resource centers to respond
                effectively in times of crisis.
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
