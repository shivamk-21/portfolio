// TODO :Fix and Add a New Footer
// TODO : Add Attribution for all images and icons used
import React from "react";
import { Link } from "react-scroll";
import "../styles/Global.css";

const Footer = () => {
  return (
    <div className='Footer'>
      <a
        className='contact'
        href="mailto:2103shivamk@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shivam Kushwaha
      </a>
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={800}
        className='click'
      >
        Don't Click Me 
      </Link>
    </div>
  );
};

export default Footer;
