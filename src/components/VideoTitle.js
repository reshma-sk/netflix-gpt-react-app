import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black'>
      <h1 className='font-bold text-3xl text-white'>{title}</h1>
      <p className='py-6 w-1/4 text-lg text-white'>{overview}</p>
      <div className='my-4'>
        <button className='bg-white text-black text-lg hover:bg-opacity-50 rounded-lg px-12  py-1 w-13'>▷ Play</button>
        <button className='bg-gray-700 text-white text-lg  rounded-lg px-12 hover:bg-opacity-50 py-1 w-13 mx-4'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle