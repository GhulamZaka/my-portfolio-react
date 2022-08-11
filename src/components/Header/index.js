import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";

export default function Header(props) {
  return (
    <Navbar variant="dark" className="head" expand="lg">
      <Container>
        <Navbar.Brand className="title" href="about">
          Ghulam Mustafa Zaka
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end">
          <Nav
            className=" text my-2 my-lg-0 justify-content-end"
            style={{ maxHeight: "120px" }}
            navbarScroll
          >
            <Nav.Link onClick={() => props.setPage("About")}>About Me</Nav.Link>
            <Nav.Link onClick={() => props.setPage("Portfolio")}>
              Portfolio
            </Nav.Link>
            <Nav.Link onClick={() => props.setPage("Contact")}>
              Contact
            </Nav.Link>
            <Nav.Link onClick={() => props.setPage("Resume")}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
