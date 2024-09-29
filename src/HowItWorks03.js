import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HowItWorks03.css"; // Import the external CSS file

const HowItWorks03 = () => {
  return (
    <>
      {/* Second Section: Box on the left of the image with a new background color */}
      <Container fluid className="p-5 how-it-works-new-container">
        <div className="how-it-works-new-section-content">
          <Row className="align-items-center justify-content-center">
            {/* Left side: Box content */}
            <Col md={4} className="text-center">
              <div className="how-it-works-box-style">03</div>
            </Col>

            {/* Middle side: Image */}
            <Col md={4} className="text-center how-it-works-img-col">
              <img
                className="how-it-works-img-fluid"
                src="/Assets/02.png"
                alt="App screenshot"
              />
            </Col>

            {/* Right side: Text content */}
            <Col md={4} className="p-4 text-center text-md-left">
              <h4 className="how-it-works-custom-heading">
                Analyze Detailed Data
              </h4>
              <p className="how-it-works-custom-paragraph">
                Access detailed maps, trends, and forecasts to understand the
                impact of disasters and make informed decisions.
              </p>
              <Button
                className="how-it-works-custom-button"
                variant="dark"
                size="lg"
              >
                Download App
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default HowItWorks03;
