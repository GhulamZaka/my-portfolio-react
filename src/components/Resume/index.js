import React from "react";
import Container from "react-bootstrap/Container";

export default function Resume() {
  return (
    <Container>
      <h2>Resume </h2>
      <p>
        Download my{" "}
        <a href="https://drive.google.com/file/d/13RLudJmKZhPavjelQMqMRuTPGX0FPtTp/view?usp=sharing">
          resume
        </a>
      </p>
      <h5>Front-end Proficiencies</h5>
      <p>
        - HTML
        <br />- CSS
        <br />- Javascript
        <br />- JQuery <br />- Responsive Design <br />- React <br />- Bootstrap
      </p>
      <h5>Back-end Proficiencies</h5>
      <p>
        - APIs
        <br />- Node
        <br />- Express
        <br />- MySQL, Sequelize <br />- MongoDB, Mongoose <br />- REST <br />-
        GraphQL
      </p>
    </Container>
  );
}
