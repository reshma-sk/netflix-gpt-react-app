import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({path}) => {
  if(!path) return;
  return (
    <img className="mr-5  rounded-md hover:scale-125 delay-150 scroll-smooth hover:duration-150 hover:transition-all" 
    src={IMG_CDN_URL + path} alt="Movie Card" />
    
  )
}

export default MovieCard