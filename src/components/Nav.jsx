import React, { useState } from "react";
import { Link } from "react-scroll";
import { useConText } from "../context/Theme";

const Nav = ({ active }) => {
  const { themes } = useConText();
  // const [showhamburger, setShowHamburger] = useState(false);
  // const handleHamburger = () => {
  //   setShowHamburger(!showhamburger);
  // };
  return (
    <>
      <div className={`${themes} web_nav`}>
        <div className={`${themes} nav`}>
          <Link
            className={`${themes} item`}
            to="home"
            spy={true}
            smooth={true}
            duration={800}
          >
            {active === "home" ? <b>Home</b> : "Home"}
          </Link>
          <Link
            className={`${themes} item`}
            to="projects"
            spy={true}
            smooth={true}
            duration={800}
          >
            {active === "projects" ? <b>Projects</b> : "Projects"}
          </Link>
          <Link
            className={`${themes} item`}
            to="edu"
            spy={true}
            smooth={true}
            duration={800}
          >
            {active === "edu" ? <b>Education</b> : "Education"}
          </Link>
          <Link
            className={`${themes} item`}
            to="exp"
            spy={true}
            smooth={true}
            duration={800}
          >
            {active === "exp" ? <b>Experience</b> : "Experience"}
          </Link>
          <Link
            className={`${themes} item`}
            to="skills"
            spy={true}
            smooth={true}
            duration={800}
          >
            {active === "skills" ? <b>Skills</b> : "Skills"}
          </Link>
        </div>
      </div>
      {/* <div className={`${themes} mob_nav`}>
        <div className={`${themes} glowBar glow`} />
        <div className={`${themes} nav`}>
          <div className={`${themes} dropDown`} onClick={handleHamburger}>
            &equiv;
          </div>
          {!showhamburger && (
            <div className={`${themes} item`}>
              {active === "home" ? (
                <b>Home</b>
              ) : active === "projects" ? (
                <b>Projects</b>
              ) : active === "edu" ? (
                <b>Education</b>
              ) : active === "exp" ? (
                <b>Experience</b>
              ) : active === "skills" ? (
                <b>Skills</b>
              ) : (
                "Unknown"
              )}
            </div>
          )}
          {showhamburger && (
            <div className={`${themes} hamburger`}>
              <Link
                onClick={() => setShowHamburger(false)}
                className={`${themes} item`}
                to="home"
                spy={true}
                smooth={true}
                duration={800}
              >
                {active === "home" ? <b>Home</b> : "Home"}
              </Link>
              <hr />
              <Link
                onClick={() => setShowHamburger(false)}
                className={`${themes} item`}
                to="projects"
                spy={true}
                smooth={true}
                duration={800}
              >
                {active === "projects" ? <b>Projects</b> : "Projects"}
              </Link>
              <hr />
              <Link
                onClick={() => setShowHamburger(false)}
                className={`${themes} item`}
                to="edu"
                spy={true}
                smooth={true}
                duration={800}
              >
                {active === "edu" ? <b>Education</b> : "Education"}
              </Link>
              <hr />
              <Link
                onClick={() => setShowHamburger(false)}
                className={`${themes} item`}
                to="exp"
                spy={true}
                smooth={true}
                duration={800}
              >
                {active === "exp" ? <b>Experience</b> : "Experience"}
              </Link>
              <hr />
              <Link
                onClick={() => setShowHamburger(false)}
                className={`${themes} item`}
                to="skills"
                spy={true}
                smooth={true}
                duration={800}
              >
                {active === "skills" ? <b>Skills</b> : "Skills"}
              </Link>
            </div>
          )}
        </div>
      </div> */}
    </>
  );
};

export default Nav;
