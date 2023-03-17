import React, { useState, useEffect } from "react";
import avatar from "../assets/avatar.png";
import Banner from "./Banner";
import projectV from "../assets/project.mp4";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/projects/").then((res) => {
      setProjects(res.data['results']);
      console.log(res.data['results'])
    });
  }, 0);

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
      <Banner name="project" video={projectV} />
      <div className="flex justify-center md:py-20 py-10">
        <div className="cards grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 md:gap-10 gap-10">
          {projects.map((project, index) => (
            <div
              className="card w-80 bg-white md:space-y-4 space-y-2"
              key={project.id}
            >
              <div className="image shadow-md space-y-3 rounded-md backdrop-blur-sm backdrop-filter bg-opacity-10 text-white">
                <img
                  src={`${project.featured_image}`}
                  alt={project.title}
                  className="object-cover rounded-md h-[270px]"
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
                  className="absolute bottom-[40%] left-0 right-0 p-3 invisible"
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
              <div className="dev flex items-center space-x-2">
                    <img src={project.owner ? `${project.owner.profile_image}` : avatar} alt="" className="h-8 rounded-full w-[40px] h-[40px]" />
                    <a href="#" id="dev1">
                    <h2 className="text-md">{project.owner ? project.owner.name : 'Unknown'}</h2>
                    </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
