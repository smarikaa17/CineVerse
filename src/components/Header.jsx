import React from "react";
import hero from "../utils/Hero.png";
import avatar from "../utils/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {

  const user = useSelector((state) => state?.user?.users);
  console.log("This is user",typeof user, user)
  const [open, setOpen] = useState(false);
  
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
