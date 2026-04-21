import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import { BG_URL } from '../utils/constant'

const GptSearchPage = () => {
  return (
    <div>
        <div className='absolute -z-10 '>
            <img src={BG_URL}/>
        </div>
        <GptSearchBar/>
        <GptMoviesSuggestions/>
    </div>
  )
}

export default GptSearchPage