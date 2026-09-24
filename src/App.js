import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./styles/Global.css";
function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [navBackColours, setNavBackColours] = useState("transparent");
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

    if (currentPage === "home") {
      setNavBackColours("rgba(0,0,0,0)");
    } else if (["projects", "edu", "exp"].includes(currentPage)) {
      setNavBackColours("rgba(2, 21, 52, 1)");
    } else {
      setNavBackColours("rgba(72, 72, 85, 1)");
    }
    setCurrentPage(currentPage);
    setModal(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mark .reveal elements as they scroll into view; the animation is in Global.css
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="App">
      <Nav active={currentPage} navBackColours={navBackColours} />
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
