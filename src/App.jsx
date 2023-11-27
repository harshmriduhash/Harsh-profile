// App.js

import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
      <div>
        <Navbar />
        <Hero name="home" />
        <About name="about" />
        <Skills name="skills" />
        <Hireme name="hireme" />
        <Project name="projects" />
        <Contact name="contact" />
        <Footer />
      </div>
  );
};

export default App;
