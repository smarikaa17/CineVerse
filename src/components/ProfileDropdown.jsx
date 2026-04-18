import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'

const ProfileDropdown = () => {
      
    const navigate= useNavigate();
     const handleSignOut=()=>{
         signOut(auth).then(() => {
        navigate('/')
    }).catch((error) => {
      // An error happened.
      navigate("")
    });
      }
  return (
        <div className="absolute right-9 top-16 mt-3 w-56 bg-[#0B0B0F] border border-[#27272A] rounded-md shadow-lg opacity-80">
              <div className="p-3 text-[#cdc2e0] hover:bg-[#27272A]  hover:text-[#A78BFA] cursor-pointer">
                <FontAwesomeIcon icon={faPencil}/> Manage Profiles
              </div>
              <div className="p-3 text-[#cdc2e0] hover:bg-[#27272A]  hover:text-[#A78BFA] cursor-pointer">
               <FontAwesomeIcon icon={faUser}/> Account
              </div>
              <div className="border-t border-[#3b3b58]"></div>
              <button onClick={handleSignOut} className=" w-full p-3 text-[#cdc2e0] hover:bg-[#27272A]  hover:text-[#A78BFA] text-center cursor-pointer" >
                Sign out of Cineverse
              </button>
            </div>
  )
}

export default ProfileDropdown