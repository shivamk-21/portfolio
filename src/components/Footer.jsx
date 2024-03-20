import React from "react";
import { Link } from "react-scroll";
import { useConText } from "../context/Theme";

const Footer = () => {
  const { themes } = useConText();
  return (
    <div className={`${themes} Footer`}>
      <a
        className={`${themes} contact`}
        href="mailto:2103shivamk@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        ✉️Contact Me
      </a>
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={800}
        className={`${themes} top`}
      >
        Back to Top &#x1F851;
      </Link>
    </div>
  );
};

export default Footer;
