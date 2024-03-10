import React, { useState, useEffect } from "react";
import { Link, Element, animateScroll as scroll, scroller } from "react-scroll";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Projects from "./features/ProjectsDetials/Projects";
import Nav from "./components/Nav";
import Lamp from "./components/Lamp";
import "./styles/App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const homePageOffset = document.getElementById("home").offsetTop;
    const projectsPageOffset = document.getElementById("projects").offsetTop;

    if (
      scrollPosition >= homePageOffset &&
      scrollPosition < projectsPageOffset
    ) {
      setCurrentPage("home");
    } else if (scrollPosition >= projectsPageOffset) {
      setCurrentPage("projects");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

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
      <Projects />
    </div>
  );
}

export default App;
