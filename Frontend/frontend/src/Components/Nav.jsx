import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import avatar from "../assets/avatar.png";

function Nav() {
  const [screenPos, setScreenPos] = useState(0);
  const [Sterm, setSterm] = useState("");

  useEffect(() => {
    function handleScroll() {
      window.addEventListener("scroll", (e) => {
        setScreenPos(Math.round(window.scrollY));
      });
    }
    handleScroll();
  });

  const handleEnter = () =>{
    let btn = document.getElementById("search-btn");
    window.addEventListener("keydown", (event)=>{
      if (event.key === 'Enter') {
        btn.click();
      }
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleInput = (event) => {
    setSterm(event.target.value);
  };

  useEffect(() => {
    if (screenPos >= 10) {
    } else if (screenPos < 10) {
    }
  }, [screenPos]);

  return (
    <nav
      className={`sticky top-0 z-10 backdrop-filter backdrop-blur-sm bg-opacity-40 bg-[#fff] firefox:bg-opacity-90 text-black`}
      id="nav"
    >
      <div className="flex justify-between px-2 py-3 items-center">
        <div className="right">
          <a href="/">
            <h1 className="text-3xl">DevXplore</h1>
          </a>
        </div>
        <div className="middle">
          <form
            className="space-x-2 hidden md:block ml-36"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder={`Search your favorite developer and projects`}
              size={60}
              className="px-8 py-[10px] outline-none border-2 rounded"
              onChange={handleInput}
              onKeyDown={handleEnter}
            />
            <Link to="/search" state={{ search: Sterm }} id="search-btn">
              <i className="fas fa-search fa-lg bg-[#3e52c6] text-[#fff] borderz px-[8px] py-[10px] outline-none rounded-full"></i>
            </Link>
          </form>
        </div>
        <div className="left flex items-center space-x-3">
          <ul className="lg:flex space-x-5 items-center hidden">
            <li className={`text-sm font-semibold`}>
              <Link to="/">HOME</Link>
            </li>
            <li className="text-sm font-semibold">
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li className="text-sm font-semibold">
              <Link to="/developers">DEVELOPERS</Link>
            </li>
            <button className="text-sm font-semibold">
              <Link to="/login">LOGIN</Link>
            </button>
            <img src={avatar} alt="avatar" className="h-10" />
          </ul>
          <div className="lines flex flex-col space-y-1 md:hidden">
            <div className="line w-7 h-1 bg-black"></div>
            <div className="line w-7 h-1 bg-black"></div>
            <div className="line w-7 h-1 bg-black"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
