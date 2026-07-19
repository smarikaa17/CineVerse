import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constant";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { Eye, EyeOff } from "lucide-react";
import PasswordSrengthChecker from "./PasswordSrengthChecker";
import toast from "react-hot-toast";
import { LoaderCircle } from "lucide-react";

const Login = () => {
  //store
  const dispatch = useDispatch();

  //local states
  const [isSignInForm, SetisSignInForm] = useState(true);
  const [errorMsg, SeterrorMsg] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  //form fields
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const confirmPassword = useRef(null);

  //sign in/up action
  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      !isSignInForm ? confirmPassword.current.value : null,
    );
    //validation erros are here
    SeterrorMsg(message);
    toast.error(message);  //
    if (message) return;
    //else write signin and signup logic

    setIsLoading(true);
    if (!isSignInForm) {
      //signUp logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, { displayName: name.current.value });
        })
        .then(() => {
          // Profile updated!
          const { uid, email, displayName } = auth.currentUser;
          dispatch(addUser({ uid, email, displayName }));
          toast.success("successfully signed up");
        })
        .catch((error) => {
          //API level errors are here
          SeterrorMsg(error.message);
          toast.error("an error occured");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      //signin logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          const { uid, email, displayName } = user;
          toast.success("successfully signed in");
        })
        .catch((error) => {
          if (error.message.includes("Error (auth/invalid-credential)")) { 
            SeterrorMsg("Invalid Email or Password.");
            toast.error("Invalid Email or Password.");
          } else {
            SeterrorMsg("An error occured"); 
            toast.error("An error occured!");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const toggleSignInForm = () => {
    SetisSignInForm((prev) => !prev);

    setPass("");
    setConfirmPass("");
    SeterrorMsg(null);

    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
    if (name.current) name.current.value = "";
    if (confirmPassword.current) confirmPassword.current.value = "";
  };

  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute bg-gradient-to-b from-black ">
        <img src={BG_URL} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute text-white p-12 bg-[#18181B] left-1/2 top-32 -translate-x-1/2 bg-opacity-85"
        style={{ width: isSignInForm ? "25%" : "30%" }}
      >
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
        <div
          className="flex items-center justify-between w-full p-2 my-2 bg-[#3b3b68] focus-within:shadow-[0_0_7px_rgba(124,58,237,0.8)]
         "
        >
          <input
            ref={password}
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className=" w-full bg-[#3b3b68] focus:outline-none "
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button
            onClick={() => setShowPass(!showPass)}
            className=" cursor-pointer  "
          >
            {showPass === true ? <EyeOff /> : <Eye />}
          </button>
        </div>
        {!isSignInForm && (
          <div
            className="flex items-center justify-between w-full p-2 my-4 bg-[#3b3b68] focus-within:shadow-[0_0_7px_rgba(124,58,237,0.8)]
         "
          >
            <input
              ref={confirmPassword}
              type={showConfirmPass ? "text" : "password"}
              placeholder="confirm password"
              className=" w-full bg-[#3b3b68] focus:outline-none "
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            <button
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className=" cursor-pointer  "
            >
              {showConfirmPass === true ? <EyeOff /> : <Eye />}
            </button>
          </div>
        )}
        {!isSignInForm && <PasswordSrengthChecker pass={pass} />}
        <p className="text-red-500 text-center">{errorMsg}</p>
        <button
          className="p-3 my-6 bg-[#7C3AED] w-full hover:bg-[#A78BFA] rounded-lg "
          onClick={handleButtonClick}
          disabled={isloading}
        >
          {isloading ? (
            <LoaderCircle className="mx-auto h-5 w-5 animate-spin" />
          ) : isSignInForm ? (
            "Sign In"
          ) : (
            "Sign Up"
          )}
        </button>

        <p className="py-1 text-center">
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
