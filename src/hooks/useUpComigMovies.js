import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addUpComingMovies } from '../utils/movieSlice';

const useUpComigMovies = () => {
    const dispatch = useDispatch();
    const upComing = useSelector((store)=>store.movies.upComingMovies)
    const getUpComingMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS)
        const response = await data.json();
        dispatch(addUpComingMovies(response.results))
    }
    useEffect(()=>{
        !upComing && getUpComingMovies()
    },[])
  
}

export default useUpComigMovies