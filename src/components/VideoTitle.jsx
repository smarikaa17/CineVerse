import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const VideoTitle = ({Title,Overview}) => {
  return (
    <div className='pt-36 px-12' >
        <h1 className='text-3xl font-bold'>{Title}</h1>
        <p className='py-6 text-lg w-1/4'>{Overview}</p>
        <div className=''>
          <button className='mx-2 bg-gray-500 text-white p-4 px-10 text-lg opacity-50 rounded-md'>
            <FontAwesomeIcon icon={faPlay}/>
            Play</button>
          <button className='mx-2 bg-gray-500 text-white p-4 px-10 text-lg opacity-50 rounded-md'>More Info</button>
        </div>
      
    </div>
  )
}

export default VideoTitle