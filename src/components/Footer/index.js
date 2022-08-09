import React from "react";
import Container from "react-bootstrap/Container";
// import * as Icon from "react-bootstrap-icons";
import Navbar from "react-bootstrap/Navbar";

export default function Footer() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container className="justify-content-center">
        <Navbar.Brand>Footer</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
