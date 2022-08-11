import React from "react";
import img from "../../assets/images/github.png";
import "./about.css";

function About() {
  return (
    <div className="about">
      <h2> About me</h2>
      <img src={img} alt="" />

      <p>
        Front End web developer with a background in administrative and finance
        management. Trained at the University of California Davis Coding
        Bootcamp as a Full Stack Web Developer. Proficient in Java, CSS and
        HTML. Dedicated to learning additional technologies and coding
        languages. Innovative problem-solver passionate about developing apps;
        focused on mobile-first design and development. Built several websites
        individually and as a group project and deployed into GitHub and Heroku.
      </p>
    </div>
  );
}

export default About;
