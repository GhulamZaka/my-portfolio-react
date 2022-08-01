import React from "react";

import Header from "./components/Header";
import Navi from "./components/Nav";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Navi></Navi>
      <main>
        <div>
          <About></About>
          <Project></Project>
          <Contact></Contact>
          <Resume></Resume>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
