import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondarContainer from './SecondarContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpComingMovies from '../hooks/useUpcomingMovies'
import GptSearchPage from './GptSearchPage'
import { useSelector } from 'react-redux'

const Browse = () => { 
const showGPTSearch= useSelector(state=>state.gpt.showGPTSearch)
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpComingMovies();

  return (
    <div>
      <Header/>
       {showGPTSearch ?( <GptSearchPage/>)
       :(
        <>
        <MainContainer/>
      <SecondarContainer/>
        </>
       )
          }
     
      
    </div> 
  )
}

export default Browse
