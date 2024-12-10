import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from '../utils/movieSlice'
import { useEffect } from "react";
import { API_OPTIONS } from '../utils/constants'

function useNowPlayingMovies() {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies)
     const getNowPlayingMovies = async () => {
       const data = await fetch(
         "https://api.themoviedb.org/3/movie/now_playing?page=1",
         API_OPTIONS
       );
       const response = await data.json();
       
       dispatch(addNowPlayingMovies(response.results));
     };
     useEffect(() => {
      //if(!nowPlayingMovies) getNowPlayingMovies();
      !nowPlayingMovies && getNowPlayingMovies();
     }, []);
  
  
}

export default useNowPlayingMovies