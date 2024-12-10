import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTopRatedMovies } from '../utils/movieSlice';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRated = useSelector((store)=>store.movies.topRatedMovies)
  const getTopRatedMovies = async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS) 
    const response = await data.json()
    console.log(response);
    dispatch(addTopRatedMovies(response.results)) 
  }
  useEffect(()=>{
    !topRated && getTopRatedMovies()
  },[])
  
}

export default useTopRatedMovies;