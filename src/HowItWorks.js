import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HowItWorks.css"; // Import the combined external CSS file

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const HowItWorks = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const x1 = useMotionValue(0);
  const y1 = useMotionValue(0);
  const x2 = useMotionValue(0);
  const y2 = useMotionValue(0);

  const xSpring1 = useSpring(x1, { stiffness: 300, damping: 20 });
  const ySpring1 = useSpring(y1, { stiffness: 300, damping: 20 });
  const xSpring2 = useSpring(x2, { stiffness: 300, damping: 20 });
  const ySpring2 = useSpring(y2, { stiffness: 300, damping: 20 });

  const transform1 = useMotionTemplate`rotateX(${xSpring1}deg) rotateY(${ySpring1}deg)`;
  const transform2 = useMotionTemplate`rotateX(${xSpring2}deg) rotateY(${ySpring2}deg)`;

  const handleMouseMove = (e, x, y) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = (x, y) => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
         {/* New Heading and Paragraph above the container */}  {" "}
      <div className="how-it-works-top-text">
           {" "}
        <p className="how-it-works-paragraph">How disaster link works</p>   {" "}
        <h2 className="how-it-works-heading">How it works</h2>  {" "}
      </div>
        {" "}
      <Container fluid className="p-5 how-it-works-container">
            {/* First Section */}   {" "}
        <motion.div
          className="how-it-works-section-content"
          ref={ref1}
          onMouseMove={(e) => handleMouseMove(e, x1, y1)}
          onMouseLeave={() => handleMouseLeave(x1, y1)}
          style={{
            transformStyle: "preserve-3d",
            transform: transform1,
            transition: "transform 0.1s ease", // Fast transition
          }}
        >
              {" "}
          <Row className="align-items-center justify-content-center">
                  {/* Left side: Text content */}     {" "}
            <Col md={6} className="p-4 text-center text-md-left">
                     <div className="box-style">01</div>      {" "}
              <h4 className="custom-heading">Sign Up & Customize Alerts</h4> 
                  {" "}
              <p className="custom-paragraph">
                        Create your profile, set your location, and
                choose the types of         alerts that matter most to
                you.       {" "}
              </p>
                    {" "}
              <Button className="custom-button" variant="dark" size="lg">
                        Download App       {" "}
              </Button>
                   {" "}
            </Col>
                  {/* Right side: Image */}     {" "}
            <Col md={6} className="text-center">
                    {" "}
              <img
                className="img img-fluid"
                src="/Assets/01.png"
                alt="App screenshot"
              />
                   {" "}
            </Col>
                {" "}
          </Row>
             {" "}
        </motion.div>
          {" "}
      </Container>
        {" "}
      <Container fluid className="p-5 how-it-works-container">
            {/* Second Section */}   {" "}
        <motion.div
          className="section-content"
          ref={ref2}
          onMouseMove={(e) => handleMouseMove(e, x2, y2)}
          onMouseLeave={() => handleMouseLeave(x2, y2)}
          style={{
            transformStyle: "preserve-3d",
            transform: transform2,
            transition: "transform 0.1s ease", // Fast transition
          }}
        >
              {" "}
          <Row className="align-items-center justify-content-center">
                  {/* Right side: Text content */}     {" "}
            <Col md={6} className="p-4 text-center text-md-left order-md-2">
                     <div className="box-style">02</div>      {" "}
              <h4 className="custom-heading">Get Real-Time Updates</h4>    
               {" "}
              <p className="custom-paragraph">
                        Receive live alerts on natural disasters
                affecting your area         through SMS, email, or push
                notifications.       {" "}
              </p>
                    {" "}
              <Button className="custom-button" variant="dark" size="lg">
                        Download App       {" "}
              </Button>
                   {" "}
            </Col>
                  {/* Left side: Image */}     {" "}
            <Col md={6} className="text-center order-md-1">
                    {" "}
              <img
                className="img-fluid img"
                src="/Assets/01.png"
                alt="App screenshot"
              />
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

export default HowItWorks;
