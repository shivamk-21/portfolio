import React, { useState } from "react";
import Projects from "../features/ProjectsDetials/Projects";

const ProjectsPage = ({ modal, modalChange }) => {
  const [category, setCategory] = useState("ai");
  const openProject = (name) => {
    window.location.href = `#projects`;
    setTimeout(() => {
      modalChange(true);
      setCategory(name);
    }, 100);
  };

  return (
    <>
      {modal && (
        <Projects category={category} close={() => modalChange(false)} />
      )}
      {!modal && (
        <div>
          <div className="projects">
            <p>Projects</p>
            <hr />
            <div className="neo" onClick={() => openProject("ai")}>
              Ai & ML Projects
            </div>
            <div className="neo" onClick={() => openProject("web")}>
              Web Dev Projects
            </div>
            <div className="neo" onClick={() => openProject("rn")}>
              React Native Projects
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsPage;
