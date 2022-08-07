import React from "react";
import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
import "./about.css";

function About() {
  return (
    <Typography
      className="description"
      bgcolor="primary.main"
      color="primary.contrastText"
    >
      Front End web developer with a background in administrative and finance
      management. Trained at the University of California Davis Coding Bootcamp
      as a Full Stack Web Developer. Proficient in Java, CSS and HTML. Dedicated
      to learning additional technologies and coding languages. Innovative
      problem-solver passionate about developing apps; focused on mobile-first
      design and development. Built several websites individually and as a group
      project and deployed into GitHub and Heroku.
    </Typography>
  );
}

export default About;
