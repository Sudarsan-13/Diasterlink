import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css"; // Link to your custom CSS

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false); // State to manage navbar collapse
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width

  const handleResize = () => setWindowWidth(window.innerWidth);

  // Add event listener to track window resize
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => setExpanded(!expanded); // Toggle state
  const handleLinkClick = () => setExpanded(false); // Close on link click

  return (
    <>
      {/* Navbar Component */}
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

          {/* Only show Navbar.Toggle when screen width is less than 991px */}
          {windowWidth <= 991 ? (
            <Navbar.Toggle
              aria-controls="offcanvas-navbar"
              onClick={handleToggle}
            />
          ) : (
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          )}

          {/* Hide Navbar.Collapse on smaller screens */}
          {windowWidth > 991 && (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto nav-elements">
                <Nav.Link href="#home" onClick={handleLinkClick}>
                  Home
                </Nav.Link>
                <Nav.Link href="#about" onClick={handleLinkClick}>
                  About Us
                </Nav.Link>
                <Nav.Link href="#how-it-works" onClick={handleLinkClick}>
                  How it Works
                </Nav.Link>
                <Nav.Link href="#features" onClick={handleLinkClick}>
                  Features
                </Nav.Link>
                <Nav.Link href="#benefits" onClick={handleLinkClick}>
                  Benefits
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>

      {/* Off-canvas menu for smaller screens (below 991px) */}
      {windowWidth <= 991 && (
        <div className={`offcanvas-nav ${expanded ? "offcanvas-show" : ""}`}>
          <Nav className="nav-elements">
            <Nav.Link href="#home" onClick={handleLinkClick}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={handleLinkClick}>
              About Us
            </Nav.Link>
            <Nav.Link href="#how-it-works" onClick={handleLinkClick}>
              How it Works
            </Nav.Link>
            <Nav.Link href="#features" onClick={handleLinkClick}>
              Features
            </Nav.Link>
            <Nav.Link href="#benefits" onClick={handleLinkClick}>
              Benefits
            </Nav.Link>
          </Nav>
        </div>
      )}

      {/* Backdrop for off-canvas menu */}
      {expanded && windowWidth <= 991 && (
        <div className="offcanvas-backdrop" onClick={handleToggle}></div>
      )}

      {/* Main content sections */}
      <div className={expanded ? "blur-content" : ""}>
        
      </div>
    </>
  );
};

export default CustomNavbar;
