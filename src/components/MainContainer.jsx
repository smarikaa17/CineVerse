import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const Movies= useSelector(state=>state?.movie?.movies)
     if(!Movies) return
     
    const mainMovie = Movies[0]
    const{title,overview,id}= mainMovie
    
  return (
    <div>  
        <VideoTitle Title={title} Overview={overview}/>
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer

