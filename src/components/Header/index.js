import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Navi from "./components/Nav";

export default function Header(props) {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Ghulam Mustafa Zaka</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link onClick={() => props.setPage("About")}>About</Nav.Link>
          <Nav.Link onClick={() => props.setPage("Portfolio")}>
            Portfolio
          </Nav.Link>
          <Nav.Link onClick={() => props.setPage("Contact")}>Contact</Nav.Link>
          <Nav.Link onClick={() => props.setPage("Resume")}>Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
