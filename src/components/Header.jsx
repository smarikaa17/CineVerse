import React from "react";
import hero from "../utils/Hero.png";
import avatar from "../utils/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropdown";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { toggleGPTSearchView } from "../store/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../store/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.gpt.showGPTSearch);

  const user = useSelector((state) => state?.user?.users);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-full z-10  absolute px-8  bg-gradient-to-b from-black  flex justify-between">
      <img className="w-40 " src={hero} alt="logo" />
      {user != null && (
        <div className="flex items-center">
          {search && (
            <select
              className="p-2 px-3 mr-5 bg-[#8a65ca] text-white rounded-lg"
              onClick={handleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-3 m-2 text-base text-white bg-[#8a65ca] rounded-lg"
            onClick={handleGptSearchClick}
          >
            {search ? (
              "Home Page"
            ) : (
              <>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                {" "}Search
              </>
            )}
          </button>
          <div
            className="flex  items-center cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            <img className="h-[5rem] text-center" src={avatar} alt="avatar" />
            <FontAwesomeIcon icon={faCaretDown} className="pr-5" />
          </div>
        </div>
      )}
      {open && <ProfileDropdown />}
    </div>
  );
};

export default Header;
