import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const VideoTitle = ({Title,Overview}) => {
  return (
    <div className='w-screen aspect-video pt-[16%] px-16 absolute bg-gradient-to-r from-black bg-opacity-60' >
        <h1 className='text-3xl font-bold text-white'>{Title}</h1>
        <p className='py-6 text-lg w-1/4 text-white'>{Overview}</p>
        <div className=''>
          <button className='mx-2 bg-white text-black p-3 px-10 text-lg w-[10rem] hover:opacity-80 rounded-md'>
            <FontAwesomeIcon icon={faPlay}/>
            Play</button>
          <button className='mx-2 bg-gray-500 text-white p-3 px-10 text-lg  bg-opacity-70 rounded-md'>
            <FontAwesomeIcon icon={faCircleInfo}/>
             {" "}More Info</button>
        </div>
      
    </div>
  )
}

export default VideoTitle