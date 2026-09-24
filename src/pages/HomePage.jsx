import React from "react";
import github from "../assets/logos/github.png";
import gmail from "../assets/logos/gmail.png";
import linkedin from "../assets/logos/linkedin.png";
import "../styles/HomePage.css";
const HomePage = () => {
  return (
    <div>
      <div className="mainData">
        <div className="firstname">Shivam</div>
        <div className="secondname">Kushwaha</div>
        <div className="box">
          <h2>AI/ML Engineer | Developer | Designer </h2>
          <p>
            M.Tech student at IIT Bhilai with keen interest in AI, Full-Stack
            Development and Design. Thus, work closely with these fields to make
            innovative and intuitive products
          </p>
        </div>
      </div>
      <div className="socails">
        <a
          href="mailto:2103shivamk@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gmail} alt="socails-gmail" className='gmail' />
        </a>
        <a
          href="https://www.linkedin.com/in/shivam-kushwaha21/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="socails-linkedin" className='linkedin' />
        </a>
        <a
          href="https://github.com/shivamk-21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="socails-github" className='github' />
        </a>
      </div>
      <div className="stars">
        <span></span>
        <span></span>
        {/* <span></span> */}
        <span></span>
        <span></span>
        {/* <span></span> */}
        <span></span>
        <span></span>
        {/* <span></span> */}
        <span></span>
      </div>
    </div>
  );
};

export default HomePage;
