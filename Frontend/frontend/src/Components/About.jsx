import React from "react";
import svg from "../assets/about.png";

function About() {
  return (
    <div className="" id="about" tabIndex={-1}>
      <h1 className="text-2xl font-semibold text-center" tabIndex={-1}>
        ABOUT US
      </h1>
      <div className="flex items-center pb-5">
        <div className="left px-10 space-y-3 w-[70%]">
          <p>
            DevXplore is a platform that values inclusivity and diversity,
            welcoming developers from all backgrounds and skill levels to join
            and share their projects. With a focus on collaboration and
            community, DevXplore provides an avenue for developers to get
            feedback, learn from each other, and foster professional
            relationships. The platform also features a voting system, where
            fellow developers can upvote or downvote projects based on their
            quality and relevance, ensuring that only the best projects rise to
            the top. In addition, the comment section allows for constructive
            criticism and suggestions, allowing developers to further improve
            their work and grow their skills. Whether you're a seasoned
            professional or just starting out, DevXplore is the perfect place to
            showcase your skills and join a thriving community of developers.
          </p>

          <p>
            At DevXplore, we believe that every developer deserves a platform to
            showcase their talents, learn from others, and contribute to the
            community. Our mission is to create a space where developers of all
            levels can come together to share their projects, receive feedback,
            and improve their skills. Whether you're a beginner or an
            experienced developer, DevXplore offers a supportive and engaging
            environment for you to connect with your peers and advance your
            career. Join us today and become part of a dynamic community that's
            shaping the future of technology.
          </p>
        </div>
        <div className="right w-[20%] border-4 rounded-3xl border-[#545580] py-2 mx-20 shadow-2xl">
          <img src={svg} alt="About US" className="w-[250px] mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default About;
