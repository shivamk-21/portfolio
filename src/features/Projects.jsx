import React from "react";
import Lamp from "../components/Lamp";
const Projects = () => {
  return (
    <div>
      <Lamp />
      <div className="nav">
        <span className="item">
          <b>Back</b>
        </span>
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

export default Projects;
