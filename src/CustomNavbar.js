import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

const CustomNavbar = ({
  homeRef,
  aboutRef,
  howItWorksRef,
  featuresRef,
  benefitsRef,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => setWindowWidth(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="ONE">
      <>
        <Navbar expand="lg" className="py-3 navbar-custom">
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                src="/Assets/logo.png"
                alt="Logo"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              DisasterLink
            </Navbar.Brand>

            {windowWidth <= 991 ? (
              <Navbar.Toggle
                aria-controls="offcanvas-navbar"
                onClick={handleToggle}
              />
            ) : (
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            )}

            {windowWidth > 991 && (
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto nav-elements">
                  <Nav.Link href="#home" onClick={() => scrollToRef(homeRef)}>
                    Home
                  </Nav.Link>
                  <Nav.Link href="#about" onClick={() => scrollToRef(aboutRef)}>
                    About Us
                  </Nav.Link>
                  <Nav.Link
                    href="#how-it-works"
                    onClick={() => scrollToRef(howItWorksRef)}
                  >
                    How it Works
                  </Nav.Link>
                  <Nav.Link
                    href="#features"
                    onClick={() => scrollToRef(featuresRef)}
                  >
                    Features
                  </Nav.Link>
                  <Nav.Link
                    href="#benefits"
                    onClick={() => scrollToRef(benefitsRef)}
                  >
                    Benefits
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            )}
          </Container>
        </Navbar>

        {windowWidth <= 991 && (
          <div className={`offcanvas-nav ${expanded ? "offcanvas-show" : ""}`}>
            <Nav className="nav-elements">
              <Nav.Link
                href="#home"
                onClick={() => {
                  scrollToRef(homeRef);
                  handleLinkClick();
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                onClick={() => {
                  scrollToRef(aboutRef);
                  handleLinkClick();
                }}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="#how-it-works"
                onClick={() => {
                  scrollToRef(howItWorksRef);
                  handleLinkClick();
                }}
              >
                How it Works
              </Nav.Link>
              <Nav.Link
                href="#features"
                onClick={() => {
                  scrollToRef(featuresRef);
                  handleLinkClick();
                }}
              >
                Features
              </Nav.Link>
              <Nav.Link
                href="#benefits"
                onClick={() => {
                  scrollToRef(benefitsRef);
                  handleLinkClick();
                }}
              >
                Benefits
              </Nav.Link>
            </Nav>
          </div>
        )}

        {expanded && windowWidth <= 991 && (
          <div className="offcanvas-backdrop" onClick={handleToggle}></div>
        )}

        <div className={expanded ? "blur-content" : ""}></div>
      </>
    </div>
  );
};

export default CustomNavbar;
