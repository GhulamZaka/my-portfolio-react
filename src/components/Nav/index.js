import React from "react";
import "./nav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navi() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-end">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/about">About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navi;
