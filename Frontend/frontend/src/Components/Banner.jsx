import React, {createContext} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Projects from "./Projects";
function Banner({page, tag}) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="image">
      <div className="block-banner flex flex-col items-center justify-center h-[100vh] bg-[#0e1015] w-[100%]">
        <div className="heading text-center mb-24">
        <h1 className="text-[100px] text-[#918cf2] font-black">{page}</h1>
          <h1 className="text-[70px] text-[#fff] font-black">{tag}</h1>
          <p className="text-[#a1a4aa]">Discover other Developers and their project, find inspiration and be the inspiration.</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
