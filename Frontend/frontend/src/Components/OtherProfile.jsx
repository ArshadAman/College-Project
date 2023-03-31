import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { getToken } from "../localStorage";
import edit from "../assets/edit.png";
import HashLoader from "react-spinners/HashLoader";

function Profile() {
  const [userdata, setUserdata] = useState([]);
  const [projects, setProject] = useState([]);
  const { id } = useParams();
  const { access_token } = getToken();
  const route = `http://127.0.0.1:8000/api/users/profile-detail/${id}`;

  const [loading, setLoading] = useState(false);
  const [blur, setBlur] = useState(false);

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
      .get(route, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
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
    <div className={`${blur ? "blur-sm" : "blur-none"} relative`}
    >
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
      style={{ fontFamily: "Raleway"}}
    >
      <div className="banner">
        <img
          src={`https://source.unsplash.com/1600x900/?coding developer dark/`}
          alt=""
          className="w-full h-72"
        />
      </div>

      <div className="profile flex">
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
              <h2 className="text-xl">{userdata.short_intro}</h2>
              <h2 className="text-lg`">@{userdata.username}</h2>
            </div>

            <div className="social_links space-x-6 py-5 flex justify-center">
              <a href={`https://${userdata.social_github}`} target="_blank">
                <i class="fab fa-github text-3xl"></i>
              </a>
              <a href={`https://${userdata.social_linkedin}`} target="_blank">
                <i class="fab fa-linkedin text-3xl text-[#0963bf]"></i>
              </a>
              <a href={`https://${userdata.social_twitter}`} target="_blank">
                <i class="fab fa-twitter text-3xl text-[#1d9bf0]"></i>
              </a>
              <a href={`https://${userdata.social_instagram}`} target="_blank">
                <i class="fab fa-instagram text-3xl text-[#ff3040]"></i>
              </a>
              <a href={`${userdata.social_website}`} target="_blank">
                <i class="fas fa-globe text-3xl"></i>
              </a>
            </div>

            <div className="about">
              <p className="px-16">{userdata.bio}</p>
            </div>
          </div>
        </div>
        <div className="right px-16">
          <div className="heading flex items-center my-8 justify-between">
            <h1 className="text-3xl font-bold">Projects</h1>
            <a
              href={`mailto: ${userdata.email}`}
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Connect
            </a>
          </div>
          <div className="project_cards grid grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div className="card w-72 h-56 relative" key={index}>
                <img
                  src={`http://127.0.0.1:8000${project.featured_image}`}
                  alt=""
                  className="w-72 h-56 rounded-lg"
                />

                <Link
                  to={""}
                  className="absolute top-[40%] left-[40%] right-[50%]"
                >
                  View More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Profile;
