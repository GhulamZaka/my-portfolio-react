import React from "react";
import avatar from "../../assets/images/avatar.jpg";
import Container from "react-bootstrap/Container";
import Avatar from "react-avatar";
import "./about.css";

export default function About() {
  return (
    <Container className="about" expand="lg">
      <h2> About me</h2>
      <Avatar src={avatar} size="150" round={true} />
      <p>
        Front End web developer with a background in administrative and finance
        management. Trained at the University of California Davis Coding
        Bootcamp as a Full Stack Web Developer. Proficient in Java, CSS and
        HTML. Dedicated to learning additional technologies and coding
        languages. Innovative problem-solver passionate about developing apps;
        focused on mobile-first design and development. Built several websites
        individually and as a group project and deployed into GitHub and Heroku.
      </p>
    </Container>
  );
}
