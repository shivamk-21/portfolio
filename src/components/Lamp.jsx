import React from "react";
import Lamp from "../assets/Lamp.png";
import Rope from "../assets/rope.png";
import Bulb from "../assets/bulb.svg";
const LampComp = () => {
  return (
    <div className="themeChange">
      <img src={Bulb} alt="lamp" className="bulb glow" />
      <img src={Rope} alt="lamp" className="rope" />
      <img src={Lamp} alt="lamp" className="lamp" />
    </div>
  );
};

export default LampComp;
