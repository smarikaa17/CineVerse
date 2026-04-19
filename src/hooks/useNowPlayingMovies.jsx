import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovie } from '../store/movieSlice'
import {API_OPTIONS} from "../utils/constant"

const useNowPlayingMovies = () => {
    //fetch data from TMDB API and update store
   const dispatch= useDispatch()

  const getNowPlayingMovies= async()=>{
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)
     const res= await data.json();
     console.log(res?.results)
     dispatch(addNowPlayingMovie(res?.results)) 
  }

  useEffect(()=>{
   getNowPlayingMovies()
  },[])
 
}

export default useNowPlayingMovies