import React, {createContext} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Projects from "./Projects";
function Banner({page, tag}) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="image">
      {/* <video
        src={props.video}
        autoPlay={true}
        loop={true}
        muted={true}
        className="w-[100%] md:h-[600px] object-cover brightness-50"
      ></video> */}
      {/* <div className="search">
        <form className="space-x-2 hidden md:block" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={`Search by ${props.name} name`}
            size={60}
            className="px-8 py-[12px] outline-none absolute bottom-[50%] opacity-80 left-[31%] rounded"
          />
          <button className="bg-[#3e52c6] text-white px-8 py-[12px] outline-none absolute bottom-[50%] md:left-[67%] rounded backdrop-filter backdrop-blur-lg opacity-70">
            Search
          </button>
        </form>
        <form
          className="space-x-2 md:hidden flex justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder={`Search by ${props.name} name`}
            size={30}
            className="px-2 py-[12px] outline-none absolute bottom-[70%] opacity-80  rounded"
          />
          <button to="/projects" params={{ testvalue: "hello" }} className="bg-[#ffffff] px-8 py-[10px] outline-none absolute bottom-[62%] right-[35%] rounded backdrop-filter backdrop-blur-lg opacity-70">
            Search
          </button>
        </form>
      </div> */}
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
