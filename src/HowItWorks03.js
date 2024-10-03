import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HowItWorks03.css";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const HowItWorks03 = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
        {" "}
      <Container fluid className="p-5 how-it-works-new-container">
           {" "}
        <motion.div
          className="how-it-works-new-section-content"
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
            transform,
            transition: "transform 0.1s ease", // Fast transition
          }}
        >
              {" "}
          <Row className="align-items-center justify-content-center">
                  {/* Left side: Box content */}     {" "}
            <Col md={4} className="text-center">
                     <div className="how-it-works-box-style">03</div> 
                 {" "}
            </Col>
                  {/* Middle side: Image */}     {" "}
            <Col md={4} className="text-center how-it-works-img-col">
                    {" "}
              <img
                className="img-fluid img"
                src="/Assets/02.png"
                alt="App screenshot"
              />
                   {" "}
            </Col>
                  {/* Right side: Text content */}     {" "}
            <Col md={4} className="p-4 text-center text-md-left">
                    {" "}
              <h4 className="custom-heading">
                        Analyze Detailed Data       {" "}
              </h4>
                    {" "}
              <p className="custom-paragraph">
                        Access detailed maps, trends, and forecasts to
                understand the         impact of disasters and make
                informed decisions.       {" "}
              </p>
                    {" "}
              <Button className="custom-button" variant="dark" size="lg">
                        Download App       {" "}
              </Button>
                   {" "}
            </Col>
                {" "}
          </Row>
             {" "}
        </motion.div>
          {" "}
      </Container>
       {" "}
    </>
  );
};

export default HowItWorks03;
