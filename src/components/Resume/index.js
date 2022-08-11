import React from "react";
import Container from "react-bootstrap/Container";

function Resume() {
  return (
    <Container>
      <h2>Resume </h2>
      <p>
        Download my{" "}
        <a href="https://drive.google.com/file/d/1lmpSIpUUGb7t-uO6UV0-_gyMU08kG5m6/view?usp=sharing">
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

export default Resume;
