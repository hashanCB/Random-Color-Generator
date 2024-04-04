"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Hexcoloer from "./lib/Hexcoloer";
import RGB from "./lib/RGB";

export default function Home() {
  const [coloerNow, setColoerNow] = useState();
  const [hexvalue, setHexvalue] = useState(false);
  const [rgbvalue, setRgbvalue] = useState(true);

  useEffect(() => {
    coloerhander();
  }, []);
  // console.log(coloerNow);
  const coloerhander = () => {
    if (hexvalue) {
      const rr = Hexcoloer(0, 225);
      const gg = Hexcoloer(0, 225);
      const bb = Hexcoloer(0, 225);
      const hexValues = `#${rr}${gg}${bb}`;
      setColoerNow(hexValues);
    } else if (rgbvalue) {
      const rgbnewss = RGB(0, 255);
      setColoerNow(rgbnewss);
      console.log(rgbvalue);
    }
  };
  return (
    <>
      <div
        className={`h-screen w-full flex flex-col justify-center items-center`}
        style={
          rgbvalue
            ? { background: `${coloerNow}` }
            : { backgroundColor: `${coloerNow}` }
        }
      >
        <div className=" flex gap-3 ">
          <button
            className={
              hexvalue
                ? " bg-green-300 border-2 border-red-400 text-white  p-3 rounded-md"
                : "text-white bg-red-600 p-3 rounded-md"
            }
            onClick={() => {
              setHexvalue(true);
              setRgbvalue(false);
            }}
          >
            HEX
          </button>
          <button
            className={
              rgbvalue
                ? " bg-green-300 border-2 border-red-400 text-white  p-3 rounded-md"
                : "text-white bg-red-600 p-3 rounded-md"
            }
            onClick={() => {
              setHexvalue(false);
              setRgbvalue(true);
            }}
          >
            RGB
          </button>
          <button
            className=" text-white bg-red-600 p-3 rounded-md"
            onClick={() => coloerhander()}
          >
            RANDOM COLOER
          </button>
        </div>

        <div>
          <h1 className=" text-white mt-10">COLOER CODE : {coloerNow} </h1>
        </div>
      </div>
    </>
  );
}
