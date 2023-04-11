import React, { useState, useEffect } from "react";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import { Link } from "react-router-dom";
import Banner from "./Banner";

function Developers({ user }) {
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
      .get(`http://127.0.0.1:8000/api/users/get-profiles/?page=${page}`)
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
      <Banner
        name="developers'"
        page={"Developers"}
        tag={"Get to know Incredible Developers"}
      />
      <div className="flex justify-center items-center md:py-20 py-10 bg-[#20232c]">
        <div className="flex items-center absolute z-20 left-[50%] right-[50%]">
          <HashLoader
            color={`#3e52c6`}
            loading={loading}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        <div
          className={`cards grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 md:gap-10 gap-6 ${
            blur == true ? "blur-sm" : "blur-0"
          }`}
        >
          {developers.map((deve, index) => (
            <Link
              to={`${
                user.id === deve.id ? "/profile" : `/dev-profile/${deve.id}`
              }`}
              className="card w-52 bg-[#65d1ae] md:space-y-4 my-10 backdrop-blur-sm text-white backdrop-filter bg-opacity-100 rounded-full"
              key={index + 1}
            >
              <div className="image shadow-md space-y-3 rounded-full backdrop-blur-sm backdrop-filter bg-opacity-10 text-white">
                <img
                  src={`${deve.profile_image}`}
                  alt={deve.name}
                  className="object-cover w-52 h-52 rounded-full"
                  onMouseEnter={() => {
                    showMe(`pname${index + 1}`, `image${index + 1}`);
                  }}
                  onMouseLeave={() => {
                    HideMe(`pname${index + 1}`, `image${index + 1}`);
                  }}
                  id={`image${index + 1}`}
                />

                <Link
                  to={`${
                    user.id === deve.id ? "/profile" : `/dev-profile/${deve.id}`
                  }`}
                  className="absolute  left-[50%] top-[45%] transform translate-x-[-50%] translate-y-[-50%] w-full invisible"
                  id={`pname${index + 1}`}
                  onMouseEnter={() => {
                    showMe(`pname${index + 1}`, `image${index + 1}`);
                  }}
                  onMouseLeave={() => {
                    HideMe(`pname${index + 1}`, `image${index + 1}`);
                  }}
                >
                  <div className="text-center flex flex-col justify-center font-semibold">
                    <h2 className="text-xl text-center">{deve.name}</h2>
                    <p className="text-sm text-center">{deve.short_intro?deve.short_intro.slice(0,60):""}...</p>
                  </div>
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="btn flex justify-center space-x-6 py-8 bg-[#20232c]">
        <button
          className={`text-black font-semibold px-4 py-2 rounded-md ${
            previous == null
              ? "bg-[#a9a4a7] cursor-not-allowed"
              : "bg-[#eb92d5]"
          }`}
          onClick={decrePage}
          disabled={previous == null}
        >
          Prev
        </button>
        <button
          className={`text-black font-semibold px-4 py-2 rounded-md ${
            next == null ? "bg-[#a9a4a7] cursor-not-allowed" : "bg-[#eb92d5]"
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
