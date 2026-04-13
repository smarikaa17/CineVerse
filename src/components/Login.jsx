import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constant";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, SetisSignInForm] = useState(true);
  const [errorMsg, SeterrorMsg] = useState(null)

  const email= useRef(null)
  const password= useRef(null)
  const name= useRef(null)

  const handleButtonClick=()=>{
     const message= checkValidData(email.current.value,password.current.value,name.current.value)
     SeterrorMsg(message)
  }

  const toggleSignInForm = () => {
    SetisSignInForm((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} 
       className="absolute text-white p-12 bg-[#18181B] w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-85">
        <h1 className="font-bold text-3xl py-3 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-[#3b3b68]
          focus:outline-none focus:shadow-[0_0_7px_rgba(124,58,237,0.8)] "
          />
        )}
        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-[#3b3b68]
          focus:outline-none focus:shadow-[0_0_7px_rgba(124,58,237,0.8)]"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-[#3b3b68]
          focus:outline-none focus:shadow-[0_0_7px_rgba(124,58,237,0.8)]"
        />
        <p className="text-red-500 font-semibold text-sm text-center">{errorMsg}</p>

        <button className="p-3 my-6 bg-[#7C3AED] w-full hover:bg-[#A78BFA] rounded-lg " onClick={handleButtonClick}>
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
