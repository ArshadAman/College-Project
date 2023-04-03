import React from "react";
import { Link, Navigate } from "react-router-dom";
import logbg from "../assets/bglog.jpg";
import devX from "../assets/devXplore.jpg";
import axios from "axios";

function Signup() {
  const route = "http://127.0.0.1:8000/api/users/signup/";

  const handleSignup = async (event) => {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let c_password = document.getElementById("cpassword").value;
    if (password != c_password) {
      console.log("Password does't match");
    } else {
      axios
        .post(route, {
          username: username,
          name: name,
          email: email,
          password: password,
        })
        .then(
          (response) => {
            console.log(response.data);
          },
          (error) => {
            console.log(error);
          }
        );
    }
    window.location.replace("/login");
  };

  return (
    <div className="bg-[#0e1015]">
      <main
        className={`flex justify-center items-center h-[680px] bg-opacity-10 backdrop-filter backdrop-blur-lg`}
        style={{
          backgroundImage: `url(${logbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center my-24 bg-[#CBE4DE] rounded-xl bg-opacity-10 backdrop-filter backdrop-blur-lg ">
          <div className=" rounded-lg w-96 py-5">
            <div className="">
              <img src={devX} alt="" className="w-20 mx-auto" />
            </div>
            <h1
              className="text-white font-serif text-center mt-4 md:font-bold text-lg"
              style={{ fontFamily: '"Raleway", sans-serif' }}
            >
              Create a new developer account
            </h1>
            <form action="">
              <input
                className="mt-4 mx-14 rounded-lg  py-1 px-3 focus:outline-none "
                autoFocus
                placeholder="Name"
                size={30}
                type="text"
                id="name"
                required
              />
              <input
                className="mt-4 mx-14 rounded-lg py-1 px-3 focus:outline-none"
                placeholder="Email"
                size={30}
                type="email"
                id="email"
                required
              />
              <input
                className="mt-4 mx-14 rounded-lg py-1 px-3 focus:outline-none"
                placeholder="Username"
                size={30}
                type="text"
                id="username"
                required
              />
              <ul className="pl-2 mt-1">
                <li className="text-xs text-white ml-16 mr-12 list-disc">
                  Usernames can only contain alphanumeric characters (A-Z, 0-9)
                  and ("@").
                </li>
              </ul>
              <input
                className="mt-4 mx-14 rounded-lg py-1 px-3 focus:outline-none"
                placeholder="Password"
                size={30}
                type="password"
                id="password"
                required
              />
              <ul className="pl-2 mt-1">
                <li className="text-xs text-white ml-16 mr-12 list-disc">
                  password must contain at least 8 characters.
                </li>
                <li className="text-xs text-white ml-16 mr-12 list-disc">
                  A mixture of letters and numbers{" "}
                </li>
                <li className="text-xs text-white ml-16 mr-12 list-disc">
                  Inclusion of at least one special character, e.g., ! @ # ? ].
                </li>
              </ul>
              <input
                className="mt-2 mx-14 rounded-lg py-1 px-3 focus:outline-none"
                placeholder="Confirm Password"
                size={30}
                type="password"
                id="cpassword"
                required
              />
              <button
                className="bg-[#0E8388] ml-14 mt-4 px-28 py-1 rounded-md text-white hover:bg-[#0e6e71]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </form>
            <h2
              className="text-center text-white text-md mt-4 md:font-bold"
              style={{ fontFamily: '"Raleway", sans-serif' }}
            >
              Already have an account?{" "}
            </h2>
            <Link to="/login">
              <button
                className=" flex justify-center bg-[#2E4F4F] ml-36 mt-4  px-8 py-1 rounded-md text-white hover:bg-[#2b5e5e]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Log In
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signup;
