import React from "react";
import github from "../assets/logos/github.png";
import gmail from "../assets/logos/gmail.png";
import linkedin from "../assets/logos/linkedin.png";
const HomePage = () => {
  return (
    <div>
      <div className="mainData">
        <div className="firstname">Shivam</div>
        <div className="secondname">Kushwaha</div>
        <div className="box">
          <h2>Developer | Data Analyst | Designer </h2>
          <p>
            Final Year Student at IIIT, Naya Raipur with keen interest in
            Development, Data Science and Designing. Thus, work closely with
            these field to make innovative and intuitive design products
          </p>
        </div>
      </div>
      <div className="socails">
        <a
          href="mailto:2103shivamk@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gmail} alt="socails-gmail" className={`gmail`} />
        </a>
        <a
          href="https://www.linkedin.com/in/shivam-kushwaha21/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="socails-linkedin" className={`linkedin`} />
        </a>
        <a
          href="https://github.com/shivamk-21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="socails-github" className={`github`} />
        </a>
      </div>
      <div className="stars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default HomePage;
