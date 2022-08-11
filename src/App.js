import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//importing sections from components
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const [activePage, active] = useState("About");
  //rendering different sections while about page is not active
  function display() {
    switch (activePage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Project />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  }

  return (
    <div>
      <Header setPage={active} />
      <main className="App" expand="lg">
        {display()}
      </main>
      <Footer />
    </div>
  );
}
