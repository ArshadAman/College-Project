import React, { useState, useEffect } from "react";
import avatar from "../assets/avatar.png";
import Banner from "./Banner";
import projectV from "../assets/project.mp4";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";

function Projects() {
  const [projects, setProjects] = useState([]);
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
      .get(`http://127.0.0.1:8000/api/projects/?page=${page}`)
      .then((res) => {
        setProjects(res.data["results"]);
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
      <Banner name="project" video={projectV} page="project" />
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
        <div
          className={`cards grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 md:gap-10 gap-10 ${
            blur == true ? "blur-sm" : "blur-0"
          }`}
        >
          {projects.map((project, index) => (
            <div
              className="card w-80 bg-white md:space-y-4 space-y-2 border backdrop-blur-sm backdrop-filter bg-opacity-10 pb-2  rounded-md shadow-md"
              key={project.id}
            >
              <div className="image space-y-3 rounded-md text-white">
                <img
                  src={`${project.featured_image}`}
                  alt={project.title}
                  className="object-cover rounded-t-md h-[270px]"
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
                  className="absolute bottom-[50%] left-0 right-0 p-3 invisible"
                  id={`pname${index + 1}`}
                  onMouseEnter={() => {
                    showMe(`pname${index + 1}`, `image${index + 1}`);
                  }}
                  onMouseLeave={() => {
                    HideMe(`pname${index + 1}`, `image${index + 1}`);
                  }}
                >
                  <div className="details">
                    <h2 className="text-2xl text-center">{project.title}</h2>
                    <ul className="flex space-x-2 text-sm justify-center">
                      {project.tags.map((tag, index) => (
                        <li key={index + 1}>{tag.name}</li>
                      ))}
                    </ul>
                  </div>
                </a>
              </div>
              <div className="flex items-center justify-between mx-2">
                <div className="dev flex items-center space-x-2">
                  <img
                    src={
                      project.owner ? `${project.owner.profile_image}` : avatar
                    }
                    alt=""
                    className="rounded-full w-[40px] h-[40px]"
                  />
                  <a href="#" id="dev1">
                    <h2 className="text-md">
                      {project.owner ? project.owner.name : "Unknown"}
                    </h2>
                  </a>
                </div>
                <p className="voteRatio text-right">
                  {project.vote_ratio}% Rated
                </p>
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

export default Projects;
