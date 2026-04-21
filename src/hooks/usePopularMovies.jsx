import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addPopularVideo } from '../store/movieSlice';
import { API_OPTIONS } from '../utils/constant';

const usePopularMovies = () => {
  const dispatch= useDispatch()
  
 const getPopularMovies=async()=>{
    
    const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS )
    const res= await data.json();
    dispatch(addPopularVideo(res.results))
 }
 useEffect(()=>{
    getPopularMovies();
 },[])
  
}

export default usePopularMovies