import React from "react";
const Nav = ({ active }) => {
  return (
    <div>
      <div className="nav">
        <a className="item" href="#home">
          {active === "home" ? <b>Home</b> : "Home"}
        </a>
        <a className="item" href="#projects">
          {active === "projects" ? <b>Projects</b> : "Projects"}
        </a>
        <a className="item" href="#edu">
          {active === "education" ? <b>Education</b> : "Education"}
        </a>
        <a className="item" href="#exp">
          {active === "experience" ? <b>Experience</b> : "Experience"}
        </a>
        <a className="item" href="#skills">
          {active === "skills" ? <b>Education</b> : "Skills"}
        </a>
      </div>
    </div>
  );
};

export default Nav;
