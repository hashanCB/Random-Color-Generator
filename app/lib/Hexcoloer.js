import React from "react";

const Hexcoloer = (min, max) => {
  let rangom = Math.random() * (max - min);
  rangom = Math.floor(rangom);
  rangom = rangom.toString(16);
  return rangom;
};

export default Hexcoloer;
