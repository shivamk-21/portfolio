import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="Footer">
      <a
        className="contact"
        href="mailto:2103shivamk@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        ✉️Contact Me
      </a>
      <Link to="home" spy={true} smooth={true} duration={800} className="top">
        Back to Top &#x1F851;
      </Link>
    </div>
  );
};

export default Footer;
