import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

function Profile() {
  const [userdata, setUserdata] = useState([]);
  const [projects, setProject] = useState([]);
  const { id } = useParams();
  const route = `http://127.0.0.1:8000/api/users/profile-detail/${id}`;

  const [loading, setLoading] = useState(false);
  const [blur, setBlur] = useState(false);

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

  const getData = async () => {
    setLoading(true);
    setBlur(true);
    await axios
      .get(route)
      .then((res) => {
        setUserdata(res.data[0]);
        setProject(res.data[1]);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
    setBlur(false);
  };

  useEffect(() => {
    getData();
  }, [0]);

  return (
    <div className={`${blur ? "blur-sm" : "blur-none"} relative`}>
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
      <div style={{ fontFamily: "Raleway" }}>
        <div className="banner">
          <img
            src={`https://source.unsplash.com/1600x900/?coding developer dark/`}
            alt=""
            className="w-full h-72"
          />
        </div>

        <div className="profile flex bg-[#20232c] text-white">
          <div className="left w-1/3">
            <div className="profile_pic relative bottom-20 left-40 -mb-40">
              <img
                src={`http://127.0.0.1:8000${userdata.profile_image}`}
                alt=""
                className="w-44 h-44 rounded-full border"
                defer
              />
            </div>
            <div className="profile_details py-24">
              <div className="heading flex flex-col items-center">
                <h1 className="text-3xl font-semibold">{userdata.name}</h1>
                <h2 className="text-xl px-6 py-3">{userdata.short_intro}</h2>
                <h2 className="text-lg`">@{userdata.username}</h2>
              </div>

              <div className="social_links space-x-6 py-5 flex justify-center">
              {userdata.social_github && userdata.social_github != "" ? (
                  <a href={`${userdata.social_github}`} target="_blank">
                    <i className="fab fa-github text-3xl"></i>
                  </a>
                ) : (
                  ""
                )}
                {userdata.social_linkedin && userdata.social_linkedin != "" ? (
                  <a href={`${userdata.social_linkedin}`} target="_blank">
                    <i className="fab fa-linkedin text-3xl text-[#0963bf]"></i>
                  </a>
                ) : (
                  ""
                )}
                {userdata.social_twitter && userdata.social_twitter != "" ? (
                  <a href={`${userdata.social_twitter}`} target="_blank">
                    <i className="fab fa-twitter text-3xl text-[#1d9bf0]"></i>
                  </a>
                ) : (
                  ""
                )}
                {userdata.social_instagram && userdata.social_instagram != "" ? (
                  <a href={`${userdata.social_instagram}`} target="_blank">
                    <i className="fab fa-instagram text-3xl text-[#ff3040]"></i>
                  </a>
                ) : (
                  ""
                )}
                {userdata.social_website && userdata.social_website != "" ? (
                  <a href={`${userdata.social_website}`} target="_blank">
                    <i className="fas fa-globe text-3xl"></i>
                  </a>
                ) : (
                  ""
                )}
              </div>

              <div className="about">
                <p className="px-6 py-5">{userdata.bio}</p>
              </div>
            </div>
          </div>
          <div className="right px-16 pb-9">
            <div className="heading flex items-center my-8 justify-between">
              <h1 className="text-3xl font-bold">Projects</h1>
              <button
                href={`mailto: ${userdata.email}`}
                onClick={() => window.location = `mailto:${userdata.email}`}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Connect
              </button>
            </div>
            <div className="project_cards grid grid-cols-3 gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
