import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";

function Nav() {
  const [screenPos, setScreenPos] = useState(0);
  const [color, setColor] = useState("");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    function handleScroll() {
      window.addEventListener("scroll", (e) => {
        setScreenPos(Math.round(window.scrollY));
      });
    }
    handleScroll();
  });

  useEffect(() => {
    if (screenPos >= 10) {
      setColor("white");
      setOpacity(0.4);
    } else if (screenPos < 10) {
      setColor("white");
      setOpacity(1);
    }
  }, [screenPos]);

  return (
    <nav
      className={`sticky top-0 z-10 backdrop-filter backdrop-blur-sm bg-opacity-40 bg-[#fff] firefox:bg-opacity-90 text-black`}
      id="nav"
    >
      <div className="upper flex justify-between px-2 py-3 items-center">
        <div className="right">
          {/* <img src={logo} alt="logo" className="h-14 invert-0" /> */}
          <a href="/"><h1 className="text-3xl">DevXplore</h1></a>
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
            <li className="text-sm font-semibold">
            <Link to="/">INBOX</Link>
            </li>
            <button className="text-sm font-semibold"><Link to="/">LOGIN/SIGNUP</Link></button>
            <img src={avatar} alt="avatar" className="h-10" />
          </ul>
          <div className="lines flex flex-col space-y-1 md:hidden">
            <div className="line w-7 h-1 bg-black"></div>
            <div className="line w-7 h-1 bg-black"></div>
            <div className="line w-7 h-1 bg-black"></div>
          </div>
        </div>
      </div>
      <Outlet/>
    </nav>
  );
}

export default Nav;
