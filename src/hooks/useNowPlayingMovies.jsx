import { useDispatch } from "react-redux"
import {addNowPlayingMovie} from "./../store/movieSlice"
import { useEffect } from "react";
import {API_OPTIONS} from "./../utils/constant"


const useNowPlayingMovies=()=>{  
   
   //store dispatch
 const dispatch= useDispatch()

 //first define the method that calls the api and store the data came from api to store slice
  const getNowPlayingMovies= async()=>{
    
    //api call statement below
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS) 
    //converts the returned promise into json
     const res= await data.json();
     //dispatches the data(json) into the store (global state)
     dispatch(addNowPlayingMovie(res?.results)) 
  }
useEffect(() => {
  //called the api call method defined up above and it will be called for every render
getNowPlayingMovies();
}, [])

};

export default useNowPlayingMovies;


