import React from "react";
import Nav from "../components/Nav";
const ProjectsPage = () => {
  return (
    <div className="page">
      <Nav active="projects" />
      <div className="projects">
        <p>Projects</p>
        <hr />
        <div>Ai & ML Projects</div>
        <div>Web Dev Projects</div>
        <div>React Native Projects</div>
      </div>
    </div>
  );
};

export default ProjectsPage;
