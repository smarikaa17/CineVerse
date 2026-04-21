import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondarContainer = () => {
  //getting data from store
  const Movies= useSelector(state=> state?.movie?.movies)
  const popularMov= useSelector(state=> state?.movie?.popularMovies)
  return (
    <div className=' bg-black '>
      <div className='-mt-20 pl-12 relative z-10'>
      <MovieList title={"Now Playing"} Movies={Movies}/>
       <MovieList title={"Trending"} Movies={Movies}/>
       <MovieList title={"Popular"} Movies={popularMov}/>
       <MovieList title={"Upcoming Movies"} Movies={Movies}/>
       <MovieList title={"Horror Movies"} Movies={Movies}/>
    </div>
    </div>
  )
}

export default SecondarContainer