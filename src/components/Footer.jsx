// TODO : Add Attribution for all images and icons used
import React from "react";
import { animateScroll } from "react-scroll";
import github from "../assets/logos/github.png";
import gmail from "../assets/logos/gmail.png";
import linkedin from "../assets/logos/linkedin.png";
import "../styles/Global.css";

const links = [
  [gmail, "Email", "mailto:2103shivamk@gmail.com"],
  [linkedin, "LinkedIn", "https://www.linkedin.com/in/shivam-kushwaha21/"],
  [github, "GitHub", "https://github.com/shivamk-21", "mono"],
];

// Labels are hidden on phones to keep the footer on one line; aria-labels keep them accessible
const Footer = () => {
  return (
    <footer className="Footer">
      <span className="footer-copy">
        © {new Date().getFullYear()} Shivam Kushwaha
      </span>
      <nav className="footer-links" aria-label="Contact">
        {links.map(([icon, label, href, mono]) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={mono} src={icon} alt="" />
            <span>{label}</span>
          </a>
        ))}
      </nav>
      <button
        className="click"
        aria-label="Don't Click Me: back to top"
        onClick={() => animateScroll.scrollToTop({ duration: 800 })}
      >
        <span>Don't Click Me </span>↑
      </button>
    </footer>
  );
};

export default Footer;
