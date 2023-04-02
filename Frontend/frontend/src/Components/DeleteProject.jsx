import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getToken } from "../localStorage";
import axios from "axios";

function DeleteProject() {
  let { state } = useLocation();
  const { access_token } = getToken();
  const delete_route = "http://127.0.0.1:8000/api/delete-project/delete/";
  const formData = new FormData();

  const handleDelete = (event, id, title) => {
    event.preventDefault();
    formData.append("id", id);
    let input_val = document.getElementById("p-title").value
    console.log(input_val)
    if (input_val=== title) {
      axios
        .post(delete_route, formData, {
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
    else{
        console.log("Title mismatch!!!");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-red-100 h-[500px] w-[500px] mx-auto my-12">
      <h1 className="text-3xl text-center">
        This action is not reversible. Still want to delete?
      </h1>
      <h1 className="text-xl text-center my-5">
        Type the Project name to delete: {state.project.title}
      </h1>
      <input
        type="text"
        className="px-3 focus:outline-none my-7 py-4 w-[80%] mx-10"
        id="p-title"
      />
      <button
        className={`px-3 py-4 w-[80%] mx-10 bg-red-600 text-white font-semibold rounded-md`}
        onClick={(event) => handleDelete(event, state.project.id, state.project.title)}
      >
        I Confirm
      </button>
    </div>
  );
}

export default DeleteProject;
