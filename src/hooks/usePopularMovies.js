import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from '../utils/movieSlice'
import { useEffect } from "react";
import { API_OPTIONS } from '../utils/constants'

function usePopularMovies() {
    const dispatch = useDispatch();

    const popularMovies = useSelector((store)=>store.movies.popularMovies)
     const getPopularMovies = async () => {
       const data = await fetch(
         "https://api.themoviedb.org/3/movie/popular?page=1",
         API_OPTIONS
       );
       const response = await data.json();
       
       dispatch(addPopularMovies(response.results));
     };
     useEffect(() => {
      !popularMovies && getPopularMovies();
     }, []);
  
  
}

export default usePopularMovies