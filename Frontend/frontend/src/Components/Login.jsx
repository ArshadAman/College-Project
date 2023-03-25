import React from "react";
import { Link } from "react-router-dom";
import logbg from '../assets/bglog.png';

function Login() {
  return (
    <div className="bg-white">
      <main
        className="flex justify-center items-center h-[680px] bg-opacity-10 backdrop-filter backdrop-blur-lg"
        style={{
          backgroundImage: `url(${logbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center my-24 bg-black rounded-xl bg-opacity-10 backdrop-filter backdrop-blur-lg ">
          <div className=" rounded-lg w-96 py-5">
            <h1
              className="text-black font-serif text-center mt-4 md:font-bold text-lg"
              style={{ fontFamily: '"Raleway", sans-serif' }}
            >
              Signin to your account
            </h1>
            <form action="">
            <input
              className="mt-4 mx-14 rounded-lg py-1 px-3 focus:outline-none"
              placeholder="Email"
              size={30}
              type="email"
            />
            <input
              className="mt-4 mx-14 rounded-lg py-1 px-3 focus:outline-none"
              placeholder="Password"
              size={30}
              type="password"
            />
            <button
              className="bg-blue-700 ml-14 mt-4 px-28 py-1 rounded-md text-white hover:bg-blue-500"
              style={{ fontFamily: '"Raleway", sans-serif' }}
            >
              Login
            </button>
            </form>
            <h2
              className="text-center text-black text-md mt-4 md:font-bold"
              style={{ fontFamily: '"Raleway", sans-serif' }}
            >
              Create account?{" "}
            </h2>
            <Link to="/signup">
            <button
              className=" flex justify-center bg-blue-700 ml-36 mt-4  px-8 py-1 rounded-md text-white hover:bg-blue-500"
              style={{ fontFamily: '"Raleway", sans-serif' }}
            >
              Signup
            </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
