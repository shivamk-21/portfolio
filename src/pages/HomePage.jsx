import React from "react";
// import cube from "../assets/cube.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
const HomePage = () => {
  return (
    <div>
      <div className="mainData">
        <div>Shivam Kushwaha</div>
        <hr />
        <h2>Developer | Data Analyst | Designer </h2>
        <p>
          Hii Everyone,
          <br />
          <br />
          <br /> I am a Pre-Final Year Student at IIIT, Naya Raipur and have a
          keen interest in Development, Data Science and Designing. Thus, work
          closely with these field to make innovative and intuitive deisgn
          products
        </p>
      </div>
      <div className="socails">
        <a
          href="https://www.linkedin.com/in/shivam-kushwaha21/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="socails-linkedin" className="linkedin" />
        </a>
        <a
          href="https://github.com/shivamk-21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="socails-github" className="github" />
        </a>
        <a
          href="mailto:2103shivamk@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gmail} alt="socails-gmail" className="gmail" />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
