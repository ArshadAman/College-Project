import axios from "axios";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useLocation } from "react-router-dom";
import { getToken } from "../localStorage";

function AddProject() {
  const [image, setImage] = useState([]);
  let { state } = useLocation();

  const formData = new FormData();
  const UpData = new FormData();
  const add_route = "http://127.0.0.1:8000/api/add-project/";
  const update_route = "http://127.0.0.1:8000/api/update-project/";
  const { access_token } = getToken();

  async function UpdateData(event, id) {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    let source_link = document.getElementById("source").value;
    let demo_link = document.getElementById("demo").value;
    let tags = document.getElementById("tags").value;
    let featured_image;
    if(image){
      featured_image = image[0];
    }
    else{
      featured_image = document.getElementById('image').files[0];
    }
    UpData.append("title", title);
    UpData.append("desc", desc);
    UpData.append("demo_link", demo_link);
    UpData.append("source_link", source_link);
    UpData.append("source_link", source_link);
    UpData.append("tags", tags);
    UpData.append("featured_image", featured_image);
    UpData.append("id", id);

    //Sending Post Request
    await axios
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    let source_link = document.getElementById("source").value;
    let demo_link = document.getElementById("demo").value;
    let tags = document.getElementById("tags").value;
    let featured_image;
    if(image){
      featured_image = image[0];
    }
    else{
      featured_image = document.getElementById('image').files[0];
    }
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("demo_link", demo_link);
    formData.append("source_link", source_link);
    formData.append("source_link", source_link);
    formData.append("tags", tags);
    formData.append("featured_image", featured_image);

    //Sending post request
    if (title.length > 3) {
      await axios
        .post(add_route, formData, {
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
    } else {
      console.log("Title must be greater then 3 characters");
    }
  };

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
          Enter your project detils
        </h1>
        <form className=" rounded space-y-6 bg-[#20232c] border-2 border-[#20232c] p-16 shadow-2xl">
          <div className="">
            <label htmlFor="title">
              <h1 className="text-xl font-semibold text-white">Title</h1>
            </label>
            <input
              type="text"
              placeholder={state ? state.project.title : "Your Project Title"}
              className="py-2 px-5 w-full focus:outline-none border-2 border-[#545580] rounded"
              id="title"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="desc">
              <label htmlFor="desc">
                <h1 className="text-xl font-semibold text-white">Describe Your Project</h1>
              </label>
              <textarea
                name="desc"
                id="desc"
                cols="110"
                rows="8"
                placeholder={
                  state ? state.project.desc : "Describe your Project..."
                }
                className="py-2 px-5 w-full focus:outline-none border-2 border-[#545580] rounded"
              ></textarea>
            </div>
          </div>
          <div className="source">
            <label htmlFor="source">
              <h1 className="text-xl font-semibold text-white">Link to Source Code</h1>
            </label>
            <input
              type="url"
              placeholder={
                state ? state.project.source_link : "Link to your Source Code"
              }
              className="py-2 px-5 w-full focus:outline-none border-2 border-[#545580] rounded"
              id="source"
            />
          </div>
          <div className="work">
            <label htmlFor="work">
              <h1 className="text-xl font-semibold text-white">Link to your Work</h1>
            </label>
            <input
              type="url"
              placeholder={
                state ? state.project.source_link : "Link to your work (Demo)"
              }
              className="py-2 px-5 w-full focus:outline-none border-2 border-[#545580] rounded"
              id="demo"
            />
          </div>
          <div className="tags">
            <label htmlFor="tags">
              <h1 className="text-xl font-semibold text-white">Tags</h1>
            </label>
            <input
              type="text"
              placeholder={
                state
                  ? state.project.tags.map((tag) => tag.name)
                  : 'Tags Separated by " " space'
              }
              className="py-2 px-5 w-full focus:outline-none border-2 border-[#545580] rounded"
              id="tags"
            />
          </div>
          <div className="image w-[100%]">
            <label htmlFor="image">
              <h1 className="text-2xl text-white">Drop your project Thumbnail</h1>
            </label>
            <div
              className="box flex h-56 border-2 border-white border-dotted items-center justify-center space-x-12 rounded-md"
              {...getRootProps()}
            >
              <input id="image" {...getInputProps()} />
              {isDragActive ? (
                <h1 className=" text-white">Drop your image here...</h1>
              ) : (
                <div>
                  <p className="text-white">Drag and drop your image here....</p>
                  <p className="text-center text-white">
                    Or, <span className="underline">browse</span> to upload
                  </p>
                </div>
              )}
            </div>
            <div className="preview py-6">
              {image.map((uploadedFile) => {
                return (
                  <div>
                    <img
                      src={uploadedFile.preview}
                      alt="preview"
                      className="w-full rounded-r-md"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <button
            className="px-3 py-2 w-full bg-blue-700 rounded-md text-white my-2"
            onClick={
              state
                ? (event) => UpdateData(event, state.project.id)
                : handleFormSubmit
            }
          >
            {state ? "Edit Project" : "Add Project"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProject;
