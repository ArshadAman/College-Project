import React, { useState, useEffect } from "react";
import avatar from "../assets/avatar.png";
import Banner from "./Banner";
import devV from "../assets/developers.mp4";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";

function Developers() {
  const link = 'http://127.0.0.1:8000/';
  const [developers, setDevelopers] = useState([]);
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [blur, setBlur] = useState(false);

  // Spinner
  const override = {
    display: "block",
    margin: "0 auto",
  };

  const getData = async () => {
    setLoading(true);
    setBlur(true);
    await axios
      .get(`http://127.0.0.1:8000/api/users/get-profile/?page=${page}`)
      .then((res) => {
        setDevelopers(res.data["results"]);
        setLoading(false);
        setBlur(false);
        setNext(res.data["next"]);
        setPrevious(res.data["previous"]);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  function inciPage() {
    setPage((prev) => page + 1);
  }
  function decrePage() {
    setPage((prev) => page - 1);
  }

  function showMe(nameID, imgId) {
    let name = document.getElementById(nameID);
    let image = document.getElementById(imgId);
    name.style.visibility = "visible";
    image.style.filter = "brightness(30%)";
  }
  function HideMe(nameID, imgId) {
    let name = document.getElementById(nameID);
    let image = document.getElementById(imgId);
    image.style.filter = "brightness(100%)";
    name.style.visibility = "hidden";
  }
  return (
    <>
      <Banner name="developers'" video={devV} />
      <div className="flex justify-center items-center md:py-20 py-10">
      <div className="flex items-center absolute z-20 left-[50%] right-[50%]">
          <HashLoader
            color={`#3e52c6`}
            loading={loading}
            cssOverride={override}
            size={90}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        <div className={`cards grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 md:gap-10 gap-6 ${
            blur == true ? "blur-sm" : "blur-0"
          }`}>
          {developers.map((deve, index) => (
          <div className="card w-60 bg-white md:space-y-4 space-y-2" key={index+1}>
            <div className="image shadow-md space-y-3 rounded-full backdrop-blur-sm backdrop-filter bg-opacity-10 text-white">
              <img
                src={`${deve.profile_image}`}
                alt={deve.name}
                className="object-cover rounded-full w-60 h-60"
                onMouseEnter={() => {
                  showMe(`pname${index + 1}`, `image${index + 1}`);
                }}
                onMouseLeave={() => {
                  HideMe(`pname${index + 1}`, `image${index + 1}`);
                }}
                id={`image${index + 1}`}
              />

              <a
                href="#"
                className="absolute bottom-[35%] left-[20%] p-3 invisible"
                id={`pname${index + 1}`}
                onMouseEnter={() => {
                  showMe(`pname${index + 1}`, `image${index + 1}`);
                }}
                onMouseLeave={() => {
                  HideMe(`pname${index + 1}`, `image${index + 1}`);
                }}
              >
                <div className="name flex flex-col items-center">
                <h2 className="text-2xl text-center">{deve.name}</h2>
                <p className="flex space-x-2 text-sm justify-center">
                {deve.short_intro}
                </p>
                </div>
              </a>
            </div>
          </div>
          ))}
        </div>
      </div>
      <div className="btn flex justify-center space-x-6">
        <button
          className={`text-white px-4 py-2 rounded-md ${
            previous == null ? "bg-[#a9a4a7] cursor-not-allowed" : "bg-[#3e52c6]"
          }`}
          onClick={decrePage}
          disabled={previous == null}
        >
          Prev
        </button>
        <button
          className={`text-white px-4 py-2 rounded-md ${
            next == null ? "bg-[#a9a4a7] cursor-not-allowed" : "bg-[#3e52c6]"
          }`}
          onClick={inciPage}
          disabled={next == null}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Developers;
