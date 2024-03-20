import React from "react";
import Lamp from "../assets/Lamp.png";
import Rope from "../assets/rope.png";
import Bulb from "../assets/bulb.svg";
import { useConText } from "../context/Theme";
const LampComp = ({toggle}) => {
  const { themes } = useConText();
  return (
    <div className={`${themes} themeChange`} onClick={toggle}>
      <img src={Bulb} alt="lamp" className={`${themes} bulb glow`} />
      <img src={Rope} alt="lamp" className={`${themes} rope`} />
      <img src={Lamp} alt="lamp" className={`${themes} lamp`} />
    </div>
  );
};

export default LampComp;
