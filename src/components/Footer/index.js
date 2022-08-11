import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./footer.css";
import Github from "../../assets/images/github1.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Stack from "../../assets/images/stack-overflow.svg";

export default function Footer() {
  return (
    <Navbar variant="dark" className="footer">
      <Container className="justify-content-center">
        <a href="https://github.com/GhulamZaka" className="icons">
          <img src={Github} alt="github" width="35" height="35" />
        </a>
        <a
          href="https://www.linkedin.com/in/ghulam-zaka-8b6012187/"
          className="icons"
        >
          <img src={Linkedin} alt="github" width="35" height="35" />
        </a>
        <a
          href="https://github.com/GhulamZaka/my-portfolio-react"
          className="icons"
        >
          <img src={Stack} alt="github" width="35" height="35" />
        </a>
      </Container>
    </Navbar>
  );
}
