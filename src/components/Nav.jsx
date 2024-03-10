import React from "react";
import { Link } from "react-scroll";

const Nav = ({ active }) => {
  return (
    <div>
      <div className="nav">
        <Link
          className="item"
          to="home"
          spy={true}
          smooth={true}
          duration={800}
        >
          {active === "home" ? <b>Home</b> : "Home"}
        </Link>
        <Link
          className="item"
          to="projects"
          spy={true}
          smooth={true}
          duration={800}
        >
          {active === "projects" ? <b>Projects</b> : "Projects"}
        </Link>
        <Link className="item" to="edu" spy={true} smooth={true} duration={800}>
          {active === "edu" ? <b>Education</b> : "Education"}
        </Link>
        <Link className="item" to="exp" spy={true} smooth={true} duration={800}>
          {active === "exp" ? <b>Experience</b> : "Experience"}
        </Link>
        <Link
          className="item"
          to="skills"
          spy={true}
          smooth={true}
          duration={800}
        >
          {active === "skills" ? <b>Skills</b> : "Skills"}
        </Link>
      </div>
    </div>
  );
};

export default Nav;
