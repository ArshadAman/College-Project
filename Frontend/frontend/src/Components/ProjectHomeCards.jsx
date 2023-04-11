import React, { useState, useEffect } from "react";
import axios from "axios";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";

function ProjectHomeCards({ user }) {
  //UseState and useEffect
  const [projects, setProjects] = useState([]);
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function getData(){
      await axios.get("http://127.0.0.1:8000/api/top-rated-projects/").then((res) => {
        setProjects(res.data);
      });
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData(){
      await axios.get("http://127.0.0.1:8000/api/users/top-profile/").then((res) => {
        setDevs(res.data);
      });
    }
    getData();
  }, []);

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
    <div className="flex flex-col items-center justify-center md:py-20 py-10 bg-[#20232c]">
      <h1 className="text-5xl text-center pb-12 text-[#fff]">
        Top Projects and Developers
      </h1>
      <div className="cards grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 md:gap-10 gap-10">
        {projects.map((project, index) => (
          <Link
            to={`/project-details/${project.id}`}
            className="card w-80 bg-[#fff] md:space-y-4 text-[#fff] space-y-2 font-semibold pb-2 backdrop-blur-sm backdrop-filter bg-opacity-10 rounded-md shadow-md"
            key={project.id}
          >
            <div className="image space-y-3 rounded-md text-white">
              <img
                src={`http://127.0.0.1:8000${project.featured_image}`}
                alt={project.title}
                className="oobject-cover w-full rounded-t-md h-[270px]"
                onMouseEnter={() => {
                  showMe(`pname${index + 1}`, `image${index + 1}`);
                }}
                onMouseLeave={() => {
                  HideMe(`pname${index + 1}`, `image${index + 1}`);
                }}
                id={`image${index + 1}`}
              />

              <Link
                to={`/project-details/${project.id}`}
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
                    {project.tags.slice(0,3).map((tag, index) => (
                      <li key={index + 1}>{tag.name}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            </div>
            <div className="flex items-center justify-between mx-2">
              <Link
                to={`${
                  user.id === project.owner.id
                    ? "/profile"
                    : `/dev-profile/${project.owner.id}`
                }`}
              >
                <div className="dev flex items-center space-x-2">
                  <img
                    src={
                      project.owner
                        ? `http://127.0.0.1:8000${project.owner.profile_image}`
                        : avatar
                    }
                    alt=""
                    className="rounded-full w-[40px] h-[40px]"
                  />
                  <Link
                    to={`${
                      user.id === project.owner.id
                        ? "/profile"
                        : `/dev-profile/${project.owner.id}`
                    }`}
                    id="dev1"
                  >
                    <h2 className="text-md">
                      {project.owner ? project.owner.name : "Unknown"}
                    </h2>
                  </Link>
                </div>
              </Link>
              <p className="voteRatio text-right">
                {project.vote_ratio}% Rated
              </p>
            </div>
          </Link>
        ))}

        {devs.map((dev, index) => (
          <Link
            to={`${user.id === dev.id ? "/profile" : `/dev-profile/${dev.id}`}`}
            className="flex justify-center"
          >
            <div
              className="card w-52 md:space-y-4 my-10 backdrop-blur-sm text-white backdrop-filter bg-opacity-100 rounded-full"
              key={dev.id}
            >
              <div className="image shadow-md space-y-3 rounded-full backdrop-blur-sm backdrop-filter bg-opacity-10 text-white">
                <img
                  src={`http://127.0.0.1:8000${dev.profile_image}`}
                  alt={dev.name}
                  className="object-cover w-52 h-52 rounded-full"
                  onMouseEnter={() => {
                    showMe(`dpname${index + 2}`, `dimage${index + 2}`);
                  }}
                  onMouseLeave={() => {
                    HideMe(`dpname${index + 2}`, `dimage${index + 2}`);
                  }}
                  id={`dimage${index + 2}`}
                />

                <Link
                  to={`${
                    user.id === dev.id ? "/profile" : `/dev-profile/${dev.id}`
                  }`}
                  className="absolute  left-[50%] top-[45%] transform translate-x-[-50%] translate-y-[-50%] w-full invisible"
                  id={`dpname${index + 2}`}
                  onMouseEnter={() => {
                    showMe(`dpname${index + 2}`, `dimage${index + 2}`);
                  }}
                  onMouseLeave={() => {
                    HideMe(`dpname${index + 2}`, `dimage${index + 2}`);
                  }}
                >
                  <div className="text-center flex flex-col justify-center font-semibold">
                    <h2 className="text-xl text-center">{dev.name}</h2>
                    <p className="text-sm text-center">{dev.short_intro?dev.short_intro.slice(0,60):""}...</p>
                  </div>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProjectHomeCards;
