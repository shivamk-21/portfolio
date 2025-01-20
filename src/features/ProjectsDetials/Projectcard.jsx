import React from "react";

export const Projectcard = ({ title, description, link, image }) => {
  return (
    <>
      <div className='head'>
        <p>{title}</p>
      </div>
      <div className='expBoard'>
        <h1>About Project</h1>
        <h3>Project Link : {link}</h3>
        <h3>{description}</h3>
        <img src={image} alt="ProjectLogo" />
      </div>
    </>
  );
};
