import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondarContainer from './SecondarContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => { 

useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondarContainer/>
    </div> 
  )
}

export default Browse
