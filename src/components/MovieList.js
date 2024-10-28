import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
  if(movies === null) return;

  return (
    <div className='px-6'>
      <h1  className="text-2xl text-white md:text-4xl font-medium px-10 py-4">{title}</h1>
      <div className="flex md:px-10 px-2 overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth ref={scrollContainer}">
        <div className="flex relative w-36 md:w-52 flex-shrink-0  ">
          {movies?.map((movie)=>{
            return <MovieCard key={movie.id} path={movie.poster_path}/>
          })}
          
        </div>
      </div>
    </div>
  );
};

export default MovieList;