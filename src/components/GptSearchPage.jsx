import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import { BG_URL } from '../utils/constant'

const GptSearchPage = () => {
  return (
    <div>
        <div className='absolute -z-10 '>
            <img className='h-screen object-cover md:h-full' src={BG_URL}/>
        </div>
        <div>
        <GptSearchBar/>
        <GptMoviesSuggestions/>
        </div>
    </div>
  )
}

export default GptSearchPage