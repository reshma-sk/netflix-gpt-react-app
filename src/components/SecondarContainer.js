import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondarContainer = () => {
  const movies = useSelector((store)=>store.movies)
  console.log(movies);
  
  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
        <div className='mt-0 md:-mt-52 relative z-20 pl-4 md:pl-12'>
          <MovieList title = {"Now Playing"} movies={movies.nowPlayingMovies}/>
          <MovieList title={"Popular"} movies={movies.popularMovies}/>
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
          <MovieList title={"Upcoming"} movies={movies.upComingMovies}/>
        </div>    
    </div>

    )
    
  )
}

export default SecondarContainer