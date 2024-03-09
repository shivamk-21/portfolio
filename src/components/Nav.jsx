import React from "react";
const Nav = ({ active }) => {
  return (
    <div>
      <div className="nav">
        <span className="item">{active === "home" ? <b>Home</b> : "Home"}</span>
        <span className="item">
          {active === "projects" ? <b>Projects</b> : "Projects"}
        </span>
        <span className="item">
          {active === "education" ? <b>Education</b> : "Education"}
        </span>
        <span className="item">
          {active === "experience" ? <b>Experience</b> : "Experience"}
        </span>
        <span className="item">
          {active === "skills" ? <b>Education</b> : "Skills"}
        </span>
      </div>
    </div>
  );
};

export default Nav;
