import axios from "axios";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { getToken } from "../localStorage";

function ProfileEdit() {
  const [image, setImage] = useState([]);
  const UpData = new FormData();
  const update_route = "http://127.0.0.1:8000/api/users/update-profile/";
  const { access_token } = getToken();

  function UpdateData(event) {
    event.preventDefault();
    let names = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let location = document.getElementById("location").value;
    let short_intro = document.getElementById("short_intro").value;
    let bio = document.getElementById("bio").value;
    let social_linkedin = document.getElementById("social_linkedin").value;
    let social_github = document.getElementById("social_github").value;
    let social_twitter = document.getElementById("social_twitter").value;
    let social_instagram = document.getElementById("social_instagram").value;
    let social_website = document.getElementById("social_website").value;
    let profile_image;
    if(image){
        profile_image = image[0];
    }
    else{
        profile_image=document.getElementById('image').files[0];
    }
    UpData.append("username", username);
    UpData.append("name", names);
    UpData.append("email", email);
    UpData.append("location", location);
    UpData.append("short_intro", short_intro);
    UpData.append("bio", bio);
    UpData.append("profile_image", profile_image);
    UpData.append("linkedin", social_linkedin);
    UpData.append("github", social_github);
    UpData.append("twitter", social_twitter);
    UpData.append("instagram", social_instagram);
    UpData.append("website", social_website);

    //Sending PUT request
    axios
      .put(update_route, UpData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.replace("/profile");
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImage(
        acceptedFiles.map((uploadedFile) =>
          Object.assign(uploadedFile, {
            preview: URL.createObjectURL(uploadedFile),
          })
        )
      );
    },
  });

  return (
    <div className="bg-[#14171f]">
      <div className="box box-border mx-auto w-[62%] pt-4 pb-10">
        <h1 className="text-center my-5 text-4xl underline-offset-8 underline text-white">
          Update your details
        </h1>
        <form className=" rounded space-y-6 bg-[#20232c] border-2 border-[#20232c] p-16 shadow-2xl">
          <div className="image w-[100%] relative">
            <label htmlFor="image">
              <h1 className="text-2xl text-white text-center pb-3">Drop your Profile Picture</h1>
            </label>
            <div
              className="box flex border-2 border-white border-dotted items-center justify-center space-y-2 rounded-full w-44 h-44 mx-auto"
              {...getRootProps()}
            >
              <input id="image" {...getInputProps()} />
              {isDragActive ? (
                <h1 className="text-center text-sm px-4 text-white">
                  Drop your image here...
                </h1>
              ) : (
                <div>
                  <p className="text-center text-sm px-4 text-white">
                    Drag and drop your image here....
                  </p>
                  <p className="text-center text-sm px-4 text-white">
                    Or, <span className="underline">browse</span> to upload
                  </p>
                </div>
              )}
            </div>
            <div className="preview py-6 absolute items-center justify-center space-y-2 mx-auto top-[8px] left-[318px]">
              {image.map((uploadedFile) => {
                return (
                  <div>
                    <img
                      src={uploadedFile.preview}
                      alt="preview"
                      className="rounded-full w-44 h-44"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="name">
            <label htmlFor="name">
              <h1 className="text-xl font-semibold text-white">Name</h1>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="py-2 px-5 w-full focus:outline-none border-2 border-[#545580] rounded"
              id="name"
            />
          </div>
          <div className="username">
            <label htmlFor="username">
              <h1 className="text-xl font-semibold text-white">Username</h1>
            </label>
            <input
              type="text"
              placeholder="Enter Your Username"
              className="py-2 px-5 w-full focus:outline-none border-2 border-[#545580] rounded"
              id="username"
            />
          </div>
          <div className="email">
            <label htmlFor="email">
              <h1 className="text-xl font-semibold text-white">Email</h1>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="py-2 px-5 w-full focus:outline-none border-2 border-[#545580] rounded"
              id="email"
            />
          </div>
          <div className="location">
            <label htmlFor="location">
              <h1 className="text-xl font-semibold text-white">Location</h1>
            </label>
            <input
              type="text"
              placeholder="Where are you?"
              className="py-2 px-5 w-full focus:outline-none border-2 border-[#545580] rounded"
              id="location"
            />
          </div>
          <div className="short_intro">
            <label htmlFor="short_intro">
              <h1 className="text-xl font-semibold text-white">Intro</h1>
            </label>
            <input
              type="text"
              placeholder="You in few"
              className="py-2 px-5 w-full focus:outline-none border-2 border-[#545580] rounded"
              id="short_intro"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="bio">
              <label htmlFor="bio">
                <h1 className="text-xl font-semibold text-white">Bio</h1>
              </label>
              <textarea
                name="bio"
                id="bio"
                cols="110"
                rows="8"
                placeholder={"You in detail..."}
                className="py-2 px-5 w-full focus:outline-none border-2 border-[#545580] rounded"
              ></textarea>
            </div>
          </div>
          <div className="social_linkedin">
            <label htmlFor="social_linkedin">
              <h1 className="text-xl font-semibold text-white">LinkedIn</h1>
            </label>
            <input
              type="url"
              placeholder="Your Linkedin URL"
              className="py-2 px-5 w-full focus:outline-none border-2 border-[#545580] rounded"
              id="social_linkedin"
            />
          </div>
          <div className="social_github">
            <label htmlFor="social_github">
              <h1 className="text-xl font-semibold text-white">GitHub</h1>
            </label>
            <input
              type="url"
              placeholder="Your GitHub URL"
              className="py-2 px-5 w-full focus:outline-none border-2 border-[#545580] rounded"
              id="social_github"
            />
          </div>
          <div className="social_twitter">
            <label htmlFor="social_twitter">
              <h1 className="text-xl font-semibold text-white">Twitter</h1>
            </label>
            <input
              type="url"
              placeholder="Your Twitter URL"
              className="py-2 px-5 w-full focus:outline-none border-2 border-[#545580] rounded"
              id="social_twitter"
            />
          </div>
          <div className="social_instagram">
            <label htmlFor="social_instagram">
              <h1 className="text-xl font-semibold text-white">Instagram</h1>
            </label>
            <input
              type="url"
              placeholder="Your Instagram URL"
              className="py-2 px-5 w-full focus:outline-none border-2 border-[#545580] rounded"
              id="social_instagram"
            />
          </div>
          <div className="social_website">
            <label htmlFor="social_website">
              <h1 className="text-xl font-semibold text-white">Website</h1>
            </label>
            <input
              type="url"
              placeholder="Any other URL"
              className="py-2 px-5 w-full focus:outline-none border-2 border-[#545580] rounded"
              id="social_website"
            />
          </div>
          <button
            className="px-3 py-2 w-full bg-blue-700 rounded-md text-white my-2"
            onClick={UpdateData}
          >
            Confirm Edit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileEdit;
