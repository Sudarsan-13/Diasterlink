import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css"; // Link to your custom CSS

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false); // State to manage navbar collapse

  const handleToggle = () => setExpanded(!expanded); // Toggle state
  const handleLinkClick = () => setExpanded(false); // Close on link click

  return (
    <Navbar
      expand="lg"
      className={`py-3 navbar-custom ${expanded ? "bg-blur" : ""}`}
    >
      <Container fluid>
        <Navbar.Brand href="#">Brand</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
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
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
