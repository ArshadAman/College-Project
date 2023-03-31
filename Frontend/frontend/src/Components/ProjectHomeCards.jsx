import React, {useState, useEffect} from "react";
import axios from "axios";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";

function ProjectHomeCards({user}) {
  //UseState and useEffect
  const [projects, setProjects] = useState([]);
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/top-rated-projects/").then((res) => {
      setProjects(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/users/top-profile/").then((res) => {
      setDevs(res.data);
    });
  }, []);

  function showMe(nameID, imgId){
    let name = document.getElementById(nameID);
    let image = document.getElementById(imgId);
    name.style.visibility ="visible";
    image.style.filter = "brightness(30%)"
  }
  function HideMe(nameID, imgId){
    let name = document.getElementById(nameID);
    let image = document.getElementById(imgId);
    image.style.filter = "brightness(100%)"
    name.style.visibility ="hidden";
  }
  return (
    <div className="flex flex-col items-center justify-center md:py-20 py-10">
      <h1 className="text-3xl text-center pb-12">Top Projects and Developers</h1>
      <div className="cards grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 md:gap-10 gap-6">
      {projects.map((project, index) => (
            <div
            className="card w-80 bg-white md:space-y-4 space-y-2 border backdrop-blur-sm backdrop-filter bg-opacity-10 pb-2  rounded-md shadow-md"
            key={project.id}
          >
            <div className="image space-y-3 rounded-md text-white">
              <img
                src={`http://127.0.0.1:8000${project.featured_image}`}
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

              <Link to={''}
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
              </Link>
            </div>
            <div className="flex items-center justify-between mx-2">
              <Link to={`${user.id === project.owner.id?'/profile':`/dev-profile/${project.owner.id}`}`}>
              <div className="dev flex items-center space-x-2">
                <img
                  src={
                    project.owner ? `http://127.0.0.1:8000${project.owner.profile_image}` : avatar
                  }
                  alt=""
                  className="rounded-full w-[40px] h-[40px]"
                />
                <Link to={`${user.id === project.owner.id?'/profile':`/dev-profile/${project.owner.id}`}`} id="dev1">
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
          </div>
          ))}
      
      
      {devs.map((dev, index)=>(
        <Link to={`${user.id === dev.id?'/profile':`/dev-profile/${dev.id}`}`}>
            <div className="card w-64 bg-white md:space-y-4 my-10" key={index+2}>
            <div className="image shadow-md space-y-3 rounded-full backdrop-blur-sm backdrop-filter bg-opacity-10 text-white">
              <img
                src={`http://127.0.0.1:8000${dev.profile_image}`}
                alt={dev.name}
                className="object-cover w-64 h-64 rounded-full"
                onMouseEnter={() => {
                  showMe(`dpname${index + 2}`, `dimage${index+2}`);
                }}
                onMouseLeave={() => {
                  HideMe(`dpname${index + 2}`, `dimage${index+2}`);
                }}
                id={`dimage${index+2}`}
              />

              <Link
                to={`${user.id === dev.id?'/profile':`/dev-profile/${dev.id}`}`}
                className="absolute bottom-[35%] left-[20%] p-3 invisible"
                id={`dpname${index + 2}`}
                onMouseEnter={() => {
                  showMe(`dpname${index + 2}`, `dimage${index+2}`);
                }}
                onMouseLeave={() => {
                  HideMe(`dpname${index + 2}`, `dimage${index+2}`);
                }}
              >
                <h2 className="text-2xl text-center">{dev.name}</h2>
                <div className="flex space-x-2 text-sm justify-center">
                  <p>{dev.short_intro}</p>
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
