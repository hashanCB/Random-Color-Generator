import React from "react";

const RGB = (min, max) => {
  let rr = Math.random() * (max - min);
  rr = Math.floor(rr);
  let gg = Math.random() * (max - min);
  gg = Math.floor(gg);
  let bb = Math.random() * (max - min);
  bb = Math.floor(bb);
  const RGB = `rgb(${rr},${gg},${bb})`;
  return RGB;
};

export default RGB;
