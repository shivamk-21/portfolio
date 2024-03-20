import React from "react";
import { useConText } from "../../context/Theme";

export const Projectcard = ({ title, description, link, image }) => {
  const { themes } = useConText();
  return (
    <>
      <div className={`${themes} head`}>
        <p>{title}</p>
      </div>
      <div className={`${themes} expBoard`}>
        <h1>About Project</h1>
        <h3>Project Link : {link}</h3>
        <h3>{description}</h3>
        <img src={image} alt="ProjectLogo" />
      </div>
    </>
  );
};
