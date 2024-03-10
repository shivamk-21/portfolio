import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import Projects from "./features/ProjectsDetials/Projects";
import Nav from "./components/Nav";
import Lamp from "./components/Lamp";
import "./styles/App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const pageOffsets = {
      home: document.getElementById("home").offsetTop,
      projects: document.getElementById("projects").offsetTop,
      edu: document.getElementById("edu").offsetTop,
      exp: document.getElementById("exp").offsetTop,
      skills: document.getElementById("skills").offsetTop,
    };

    let currentPage = "home";

    Object.entries(pageOffsets).forEach(([page, offset]) => {
      if (scrollPosition >= offset) {
        currentPage = page;
      }
    });

    setCurrentPage(currentPage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Lamp />
      <Nav active={currentPage} />
      <Element className="page" id="home">
        <HomePage />
      </Element>
      <Element className="page" id="projects">
        <ProjectsPage />
      </Element>
      <Element className="page" id="edu">
        <EducationPage />
      </Element>
      <Element className="page" id="exp">
        <ExperiencePage />
      </Element>
      <Element className="page" id="skills">
        <SkillsPage />
      </Element>
      <Projects />
    </div>
  );
}

export default App;
