import React from "react";
import { Link } from "react-router-dom";
import edit from "../assets/edit.png";
import HashLoader from "react-spinners/HashLoader";

function Profile({ user, projects, loading, blur }) {
  // Spinner
  const override = {
    display: "block",
    position: "absolute",
    margin: "0 auto",
    left: "50%",
    right: "50%",
    top: "50%",
    zIndex: 100,
  };


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
    <div>
      <div>
        <HashLoader
          color={`#3e52c6`}
          loading={loading}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <div
        style={{ fontFamily: "Raleway" }}
        className={`${blur ? "blur-sm" : "blur-none"}`}
      >
        <div className="banner">
          <img
            src={`https://source.unsplash.com/1600x900/?coding developer dark/`}
            alt=""
            className="w-full h-72"
          />
        </div>

        <div className="profile flex bg-[#20232c] text-white">
          <div className="left w-1/3">
            <div className="profile_pic relative bottom-20 left-40">
              <img
                src={`http://127.0.0.1:8000${user.profile_image}`}
                alt=""
                className="w-44 h-44 rounded-full border"
                defer
              />
            </div>
            <Link
              to={"/edit-profile/"}
              className="icon relative left-[58%] bottom-32 -mb-48 bg-blue-600 rounded-full p-1 flex items-center justify-center w-9 h-9"
            >
              <img src={edit} alt="" className="w-7 filter invert" />
            </Link>
            <div className="profile_details py-24">
              <div className="heading flex flex-col items-center">
                <h1 className="text-3xl font-semibold">{user.name}</h1>
                <h2 className="text-xl">
                  {user.short_intro ? user.short_intro : ""}
                </h2>
                <h2 className="text-lg`">@{user.username}</h2>
              </div>

              <div className="social_links space-x-6 py-5 flex justify-center">
                {user.social_github && user.social_github != "" ? (
                  <a href={`${user.social_github}`} target="_blank">
                    <i className="fab fa-github text-3xl"></i>
                  </a>
                ) : (
                  ""
                )}
                {user.social_linkedin && user.social_linkedin != "" ? (
                  <a href={`${user.social_linkedin}`} target="_blank">
                    <i className="fab fa-linkedin text-3xl text-[#0963bf]"></i>
                  </a>
                ) : (
                  ""
                )}
                {user.social_twitter && user.social_twitter != "" ? (
                  <a href={`${user.social_twitter}`} target="_blank">
                    <i className="fab fa-twitter text-3xl text-[#1d9bf0]"></i>
                  </a>
                ) : (
                  ""
                )}
                {user.social_instagram && user.social_instagram != "" ? (
                  <a href={`${user.social_instagram}`} target="_blank">
                    <i className="fab fa-instagram text-3xl text-[#ff3040]"></i>
                  </a>
                ) : (
                  ""
                )}
                {user.social_website && user.social_website != "" ? (
                  <a href={`${user.social_website}`} target="_blank">
                    <i className="fas fa-globe text-3xl"></i>
                  </a>
                ) : (
                  ""
                )}
              </div>
              <div className="about">
                {user.bio && user.bio!=""?<p className="px-16">{user.bio}</p>:""
                }
              </div>
            </div>
          </div>
          <div className="right px-16 py-8">
            <div className="heading flex items-center my-8 justify-between">
              <h1 className="text-3xl font-bold">Projects</h1>
            </div>
            <div className="project_cards grid grid-cols-3 gap-4 py-4">
              {projects.map((project, index) => (
                <Link
                  to={`/project-details/${project.id}`}
                  className="card w-72 h-56 relative"
                  key={index}
                >
                  <img
                    src={`http://127.0.0.1:8000${project.featured_image}`}
                    alt=""
                    className="w-72 h-56 rounded-lg"
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
                    className="absolute top-[40%] left-[40%] right-[50%] font-semibold text-white"
                    id={`pname${index+1}`}
                  >
                    View More
                  </Link>
                </Link>
              ))}
            </div>
            <Link to={"/add-project/"}>
              <button className="px-3 py-2 bg-[#3e52c6] rounded-md text-white w-[100%]">
                Add Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
