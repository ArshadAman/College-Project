import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import { getToken, removeToken } from "../localStorage";
import axios from "axios";

function Nav(props) {
  const [screenPos, setScreenPos] = useState(0);
  const [Sterm, setSterm] = useState("");
  const { access_token } = getToken();

  const handleLogout = (event) => {
    event.preventDefault();
    removeToken();
  };

  useEffect(() => {
    function handleScroll() {
      window.addEventListener("scroll", (e) => {
        setScreenPos(Math.round(window.scrollY));
      });
    }
    handleScroll();
  });

  const handleEnter = () => {
    let btn = document.getElementById("search-btn");
    window.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        btn.click();
      }
    });
  };
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
            <Link
              to="/search"
              state={{ search: Sterm }}
              id="search-btn"
              className="hidden"
            >
              <i className="fas fa-search fa-lg bg-[#3e52c6] text-[#fff] border px-[8px] py-[10px] outline-none rounded-full"></i>
            </Link>
          </form>
        </div>
        <div className="left flex items-center space-x-3">
          <ul className="lg:flex space-x-5 items-center hidden">
            <li className={`text-sm font-semibold `}>
              <Link
                to="/"
                className="hover:bg-[#545580] py-1 px-2 hover:text-white rounded-md"
              >
                HOME
              </Link>
            </li>
            <li className="text-sm font-semibold ">
              <Link
                to="/projects"
                className="hover:bg-[#545580] py-1 px-2 hover:text-white rounded-md"
              >
                PROJECTS
              </Link>
            </li>
            <li className="text-sm font-semibold ">
              <Link
                to="/developers"
                className="hover:bg-[#545580] py-1 px-2 hover:text-white rounded-md"
              >
                DEVELOPERS
              </Link>
            </li>
            {access_token ? (
              <>
                <button
                  className="text-sm font-semibold hover:bg-[#545580] py-1 px-2 hover:text-white rounded-md"
                  onClick={handleLogout}
                >
                  LOGOUT
                </button>
                <Link to="/profile" state={{access_token:access_token}}>
                  <img src={`http://127.0.0.1:8000${props.user.profile_image}`} alt="avatar" className="h-11 w-11 rounded-full" />
                </Link>
              </>
            ) : (
              <>
                <button className="text-sm font-semibold ">
                  <Link
                    to="/login"
                    className="hover:bg-[#545580] py-1 px-2 hover:text-white rounded-md"
                  >
                    LOGIN
                  </Link>
                </button>
                <button className="text-sm font-semibold ">
                  <Link
                    to="/signup"
                    className="hover:bg-[#545580] py-1 px-2 hover:text-white rounded-md"
                  >
                    REGISTER
                  </Link>
                </button>
              </>
            )}
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
