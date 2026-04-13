import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constant";

const Login = () => {
  const [isSignInForm, SetisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    SetisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL}/>
      </div>
      <form className="absolute text-white p-12 bg-[#18181B] w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-85">
        <h1 className="font-bold text-3xl py-3 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          type="text"
          placeholder="Full Name"
          className="p-2 my-2 w-full bg-[#3b3b68] "
        />)}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-[#3b3b68] "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-[#3b3b68]"
        />
        <button className="p-3 my-6 bg-[#7C3AED] w-full hover:bg-[#A78BFA] rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2">
          {isSignInForm ? "New to Cineverse?" : "Already Registered?"}{" "}
          <span
            className="cursor-pointer text-[#7C3AED] font-semibold hover:text-[#A78BFA]"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up" : "Sign In"}
          </span>{" "}
          Now
        </p>
      </form>
    </div>
  );
};

export default Login;
