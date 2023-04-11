import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { getToken } from "../localStorage";

function ProjectDetials({ user }) {
  //Logic Part
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [success, setSucces] = useState(0);
  const { access_token } = getToken();
  const route = `http://127.0.0.1:8000/api/projects/${id}`;
  useEffect(() => {
    async function getData(){
      await axios.get(route).then((res) => {
        setProjects(res.data);
      });
    }
    getData();
  }, [success]);

  //Posting Review
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleReview = async(event, id) => {
    event.preventDefault();
    let comment = document.getElementById("comment-box").value;
    const route = `http://127.0.0.1:8000/api/projects/${id}/vote/`;
    const data = [
      {
        value: selectedOption,
        body: comment,
      },
    ];
    await axios
      .post(route, data, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        console.log("Success");
        setSucces((prev) => prev + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //JSX Part
  return (
    <>
      {projects.map((project, index) => (
        <div id="main" className="flex flex-row-reverse" key={index}>
          <div className="left px-10 py-4 bg-[#20232c] text-white">
            <h1 className="text-3xl py-4">Tools and Stack</h1>
            <div className="tags flex flex-wrap py-4 gap-2">
              {project.tags.map((tag, index) => (
                <p
                  className="bg-[#918ced] py-1 px-5 rounded-full font-semibold"
                  key={index}
                >
                  {tag["name"]}
                </p>
              ))}
            </div>
            <div className="links flex flex-col space-y-1">
              {project.source_link ? (
                <a
                  href={project.source_link}
                  className="text-[#eb92d5] font-semibold"
                  target="_blank"
                >
                  Source Code
                </a>
              ) : (
                ""
              )}
              {project.demo_link ? (
                <a
                  href={project.demo_link}
                  className="text-[#eb92d5] font-semibold"
                  target="_blank"
                >
                  Demo
                </a>
              ) : (
                ""
              )}
            </div>
            <div className="comments py-6 space-y-3">
              <h3 className="text-3xl font-semibold">Feedback</h3>
              <h4 className="text-lg">
                <span className="text-[#edf593] font-semibold">
                  {project.vote_ratio}%
                </span>{" "}
                Positive Feedback ({project.vote_total} Votes)
              </h4>
              <form className="leave-review py-2">
                <div className="like-dislike flex justify-around">
                  <span className="like-btn flex items-center space-x-1">
                    <input
                      type="radio"
                      className=""
                      id="like"
                      value="up"
                      name="like-dislike"
                      checked={selectedOption === "up"}
                      onChange={handleOptionChange}
                    />
                    <i className="far fa-thumbs-up text-4xl" id="like"></i>
                  </span>
                  <span className="dislike-btn flex items-center space-x-1">
                    <input
                      type="radio"
                      className=""
                      id="dislike"
                      name="like-dislike"
                      value="down"
                      checked={selectedOption === "down"}
                      onChange={handleOptionChange}
                    />
                    <i
                      className="far fa-thumbs-down text-4xl"
                      id="dislike"
                    ></i>
                  </span>
                </div>
                <div className="comment-box py-5 text-black font-semibold">
                  <textarea
                    name="comment-box"
                    id="comment-box"
                    cols="50"
                    rows="2"
                    placeholder={
                      user.id == project.owner.id
                        ? "You can't review your own project"
                        : "Write a review here..."
                    }
                    className="focus:outline-none border-2 rounded-md p-2"
                    disabled={user.length == 0 || user.id == project.owner.id}
                  ></textarea>
                  {user.length == 0 ? (
                    <p className="text-2xl text-white">
                      Please{" "}
                      <Link to="/login" className="text-[#eb92d5]">
                        Login
                      </Link>{" "}
                      to Leave a Review
                    </p>
                  ) : (
                    <button
                      className={`bg-[#ffffff] text-lg text-black font-semibold rounded-md py-2 px-4 ${
                        user.length == 0 || user.id == project.owner.id
                          ? "cursor-not-allowed"
                          : ""
                      }`}
                      disabled={user.length == 0 || user.id == project.owner.id}
                      onClick={(event) => handleReview(event, project.id)}
                    >
                      Leave Review
                    </button>
                  )}
                </div>
              </form>

              <div className="comment-display overflow-y-scroll h-[250px] border-4 rounded-md border-[#eb92d5] py-2">
                <ul className="space-y-2">
                  {project.reviews.map((r, index) => (
                    <li
                      className="py-2 px-2 bg-[a3aa] flex justify-between items-center space-x-3"
                      key={index}
                    >
                      <div className="username-comment">
                        <p className="">{r.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="right px-10 py-5 bg-[#20232c] text-white">
            <div className="project-image">
              <img
                src={`http://127.0.0.1:8000${project.featured_image}`}
                alt=""
                className="h-[65vh] w-[920px] shadow-sm"
              />
            </div>
            <div className="username text-2xl my-3 px-1 font-semibold text-[#918ced]">
              <Link to={`/dev-profile/${project.owner.id}`}>
                {project.owner.name}
              </Link>
            </div>
            <div className="project-name">
              <h1 className="text-4xl font-semibold mb-7">{project.title}</h1>
            </div>
            <div className="project-about">
              <h1 className="text-2xl my-1 font-semibold uppercase">
                About the Project
              </h1>
              <p className="about w-[70%]">{project.desc}</p>
            </div>
            <div className="flex space-x-4">
              {user.id === project.owner.id ? (
                <Link
                  to="/add-project"
                  state={{ edit: true, project: project }}
                >
                  <button className="my-10 px-3 py-1 bg-[#1337d6] rounded-full text-white text-xl flex justify-center items-center">
                    🖋️Edit
                  </button>
                </Link>
              ) : (
                ""
              )}
              {user.id === project.owner.id ? (
                <Link
                  to="/delete-project/"
                  state={{ project: project }}
                >
                  <button className="my-10 px-3 py-1 bg-[#ff1212] rounded-full text-white text-xl flex justify-center items-center">
                    🗑️Delete
                  </button>
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectDetials;
