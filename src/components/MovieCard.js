import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({path}) => {
  if(!path) return;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={IMG_CDN_URL + path} alt="Movie Card" />
    </div>
  );
}

export default MovieCard