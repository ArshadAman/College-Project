import React from "react";
import Banner from "./Banner";
import devV from "../assets/developers.mp4";
import avatar from "../assets/devpic.png";

function Developers() {
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
      <Banner name="developers'" video={devV} />
      <div className="flex justify-center md:py-20 py-10">
        <div className="cards grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 md:gap-10 gap-6">
          <div className="card w-80 bg-white md:space-y-4 space-y-2">
            <div className="image shadow-md space-y-3 rounded-full backdrop-blur-sm backdrop-filter bg-opacity-10 text-white">
              <img
                src={avatar}
                alt="Developer's Name"
                className="object-cover rounded-full"
                onMouseEnter={() => {
                  showMe("pname", "image1");
                }}
                onMouseLeave={() => {
                  HideMe("pname", "image1");
                }}
                id="image1"
              />

              <a
                href="#"
                className="absolute bottom-[35%] left-[20%] p-3 invisible"
                id="pname"
                onMouseEnter={() => {
                  showMe("pname", "image1");
                }}
                onMouseLeave={() => {
                  HideMe("pname", "image1");
                }}
              >
                <h2 className="text-2xl text-center">Arshad Aman</h2>
                <ul className="flex space-x-2 text-sm">
                  <li>React</li>
                  <li>Django</li>
                  <li>Tailwind CSS</li>
                </ul>
              </a>
            </div>
          </div>

          <div className="card w-80 bg-white space-y-4">
            <div className="image shadow-md space-y-3 rounded-full backdrop-blur-sm backdrop-filter bg-opacity-10 text-white">
              <img
                src={avatar}
                alt="Developer's Name"
                className="object-cover rounded-full"
                onMouseEnter={() => {
                  showMe("pname2", "image2");
                }}
                onMouseLeave={() => {
                  HideMe("pname2", "image2");
                }}
                id="image2"
              />

              <a
                href="#"
                className="absolute bottom-[35%] left-[20%] p-3 invisible"
                id="pname2"
                onMouseEnter={() => {
                  showMe("pname2", "image2");
                }}
                onMouseLeave={() => {
                  HideMe("pname2", "image2");
                }}
              >
                <h2 className="text-2xl text-center">Developer's Name</h2>
                <ul className="flex space-x-2 text-sm">
                  <li>React</li>
                  <li>Django</li>
                  <li>Tailwind CSS</li>
                </ul>
              </a>
            </div>
          </div>

          <div className="card w-80 bg-white space-y-4">
            <div className="image shadow-md space-y-3 rounded-full backdrop-blur-sm backdrop-filter bg-opacity-10 text-white">
              <img
                src={avatar}
                alt="Developer's Name"
                className="object-cover rounded-full"
                onMouseEnter={() => {
                  showMe("pname3", "image3");
                }}
                onMouseLeave={() => {
                  HideMe("pname3", "image3");
                }}
                id="image3"
              />

              <a
                href="#"
                className="absolute bottom-[35%] left-[20%] p-3 invisible"
                id="pname3"
                onMouseEnter={() => {
                  showMe("pname3", "image3");
                }}
                onMouseLeave={() => {
                  HideMe("pname3", "image3");
                }}
              >
                <h2 className="text-2xl text-center">Developer's Name</h2>
                <ul className="flex space-x-2 text-sm">
                  <li>React</li>
                  <li>Django</li>
                  <li>Tailwind CSS</li>
                </ul>
              </a>
            </div>
          </div>

          <div className="card w-80 bg-white space-y-4">
            <div className="image shadow-md space-y-3 rounded-full backdrop-blur-sm backdrop-filter bg-opacity-10 text-white">
              <img
                src={avatar}
                alt="Developer's Name"
                className="object-cover rounded-full"
                onMouseEnter={() => {
                  showMe("pname4", "image4");
                }}
                onMouseLeave={() => {
                  HideMe("pname4", "image4");
                }}
                id="image4"
              />

              <a
                href="#"
                className="absolute bottom-[35%] left-[20%] p-3 invisible"
                id="pname4"
                onMouseEnter={() => {
                  showMe("pname4", "image4");
                }}
                onMouseLeave={() => {
                  HideMe("pname4", "image4");
                }}
              >
                <h2 className="text-2xl text-center">Developer's Name</h2>
                <ul className="flex space-x-2 text-sm">
                  <li>React</li>
                  <li>Django</li>
                  <li>Tailwind CSS</li>
                </ul>
              </a>
            </div>
          </div>

          <div className="card w-80 bg-white space-y-4">
            <div className="image shadow-md space-y-3 rounded-full backdrop-blur-sm backdrop-filter bg-opacity-10 text-white">
              <img
                src={avatar}
                alt="Developer's Name"
                className="object-cover rounded-full"
                onMouseEnter={() => {
                  showMe("pname5", "image5");
                }}
                onMouseLeave={() => {
                  HideMe("pname5", "image5");
                }}
                id="image5"
              />

              <a
                href="#"
                className="absolute bottom-[35%] left-[20%] p-3 invisible"
                id="pname5"
                onMouseEnter={() => {
                  showMe("pname5", "image5");
                }}
                onMouseLeave={() => {
                  HideMe("pname5", "image5");
                }}
              >
                <h2 className="text-2xl text-center">Developer's Name</h2>
                <ul className="flex space-x-2 text-sm">
                  <li>React</li>
                  <li>Django</li>
                  <li>Tailwind CSS</li>
                </ul>
              </a>
            </div>
          </div>

          <div className="card w-80 bg-white space-y-4">
            <div className="image shadow-md space-y-3 rounded-full backdrop-blur-sm backdrop-filter bg-opacity-10 text-white">
              <img
                src={avatar}
                alt="Developer's Name"
                className="object-cover rounded-full"
                onMouseEnter={() => {
                  showMe("pname6", "image6");
                }}
                onMouseLeave={() => {
                  HideMe("pname6", "image6");
                }}
                id="image6"
              />

              <a
                href="#"
                className="absolute bottom-[35%] left-[20%] p-3 invisible"
                id="pname6"
                onMouseEnter={() => {
                  showMe("pname6", "image6");
                }}
                onMouseLeave={() => {
                  HideMe("pname6", "image6");
                }}
              >
                <h2 className="text-2xl text-center">Developer's Name</h2>
                <ul className="flex space-x-2 text-sm">
                  <li>React</li>
                  <li>Django</li>
                  <li>Tailwind CSS</li>
                </ul>
              </a>
            </div>
          </div>

          <div className="card w-80 bg-white space-y-4">
            <div className="image shadow-md space-y-3 rounded-full backdrop-blur-sm backdrop-filter bg-opacity-10 text-white">
              <img
                src={avatar}
                alt="Developer's Name"
                className="object-cover rounded-full"
                onMouseEnter={() => {
                  showMe("pname7", "image7");
                }}
                onMouseLeave={() => {
                  HideMe("pname7", "image7");
                }}
                id="image7"
              />

              <a
                href="#"
                className="absolute bottom-[35%] left-[20%] p-3 invisible"
                id="pname7"
                onMouseEnter={() => {
                  showMe("pname7", "image7");
                }}
                onMouseLeave={() => {
                  HideMe("pname7", "image7");
                }}
              >
                <h2 className="text-2xl text-center">Developer's Name</h2>
                <ul className="flex space-x-2 text-sm">
                  <li>React</li>
                  <li>Django</li>
                  <li>Tailwind CSS</li>
                </ul>
              </a>
            </div>
          </div>

          <div className="card w-80 bg-white space-y-4">
            <div className="image shadow-md space-y-3 rounded-full backdrop-blur-sm backdrop-filter bg-opacity-10 text-white">
              <img
                src={avatar}
                alt="Developer's Name"
                className="object-cover rounded-full"
                onMouseEnter={() => {
                  showMe("pname8", "image8");
                }}
                onMouseLeave={() => {
                  HideMe("pname8", "image8");
                }}
                id="image8"
              />

              <a
                href="#"
                className="absolute bottom-[35%] left-[20%] p-3 invisible"
                id="pname8"
                onMouseEnter={() => {
                  showMe("pname8", "image8");
                }}
                onMouseLeave={() => {
                  HideMe("pname8", "image8");
                }}
              >
                <h2 className="text-2xl text-center">Developer's Name</h2>
                <ul className="flex space-x-2 text-sm">
                  <li>React</li>
                  <li>Django</li>
                  <li>Tailwind CSS</li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Developers;
