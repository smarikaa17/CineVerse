import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondarContainer from './SecondarContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpComingMovies from '../hooks/useUpcomingMovies'

const Browse = () => { 

useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpComingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondarContainer/>
    </div> 
  )
}

export default Browse
