import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondarContainer = () => {
  const movies = useSelector((store)=>store.movies)
  console.log(movies);
  
  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
        <div className='-mt-52 relative z-20 pl-12'>
          <MovieList title = {"Now Playing"} movies={movies.nowPlayingMovies}/>
          <MovieList title={"Popular"} movies={movies.popularMovies}/>
        </div>    
    </div>

    )
    
  )
}

export default SecondarContainer