import React from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../store/userSlice'

const Body = () => { 

  const dispatch = useDispatch();
    useEffect(() => {
      
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      console.log("user:", user)
      const {uid,email,displayName} = user;
      dispatch(addUser({uid, email, displayName}));

    } else {
      // User is signed out
      dispatch(removeUser())
     
    }
    
  });
   return () => unsubscribe(); 
    }, [])
    
  
  return (
    <>

    </>

  )
}

export default Body
