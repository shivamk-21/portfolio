import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Lamp from "./components/Lamp";
import "./styles/Dark.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [modal, setModal] = useState(false);
  const handleModalChange = (state) => {
    setModal(state);
  };
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
      if (scrollPosition >= offset - 200) {
        currentPage = page;
      }
    });

    setCurrentPage(currentPage);
    setModal(false);
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
        <ProjectsPage modal={modal} modalChange={handleModalChange} />
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
      <Footer />
    </div>
  );
}

export default App;
