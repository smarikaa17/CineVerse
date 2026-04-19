import React from "react";
import hero from "../utils/Hero.png";
import avatar from "../utils/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropdown";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";

const Header = () => {
     const navigate= useNavigate()
     const dispatch= useDispatch();
     const user = useSelector((state) => state?.user?.users);
     console.log("This is user",typeof user, user)
     const [open, setOpen] = useState(false);
  
      useEffect(() => {
 
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-[black] z-10 flex justify-between">
      <img className="w-36" src={hero} alt="logo" />
      { user!=null &&(
        <div
          className="flex  items-center cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <img className="h-16 text-center" src={avatar} alt="avatar" />
          <FontAwesomeIcon icon={faCaretDown} className="pr-5" />
        </div>
     ) }
      {open && <ProfileDropdown />}
    </div>
  );
};

export default Header;
