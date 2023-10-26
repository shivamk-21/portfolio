import React from "react";
import Lamp from "../components/Lamp";
const ProjectsPage = () => {
  return (
    <div>
      <Lamp />
      <div className="nav">
        <span className="item">Home</span>
        <span className="item">
          <b>Projects</b>
        </span>
        <span className="item">Education</span>
        <span className="item">Experience</span>
        <span className="item">Skills</span>
      </div>
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
