import React from 'react'
import { BG_IMG } from '../utils/constants'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className='h-screen object-cover md:w-screen' src={BG_IMG} alt="background-img" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
}

export default GptSearch