import React from "react";
import pane from "../../assets/pane.svg";

export const ExperienceCard = ({ item }) => {
  return (
    <div className='expCard'>
      <img src={item.image} className='tshirt' alt={item.id} />
      <img src={pane} className='pane' alt="glass-pane" />
      <div className='desc'>
        <div>{item.title}</div>
        <div>{item.time}</div>
      </div>
    </div>
  );
};
