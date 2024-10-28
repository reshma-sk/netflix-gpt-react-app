import {useEffect} from 'react'
import {API_OPTIONS} from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    //fetch trailer video, make an API call
    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + 
        movieId +
        "/videos?language=en-US",
        API_OPTIONS
      );
      const response = await data.json();
     
      const filerData = response.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filerData.length ? filerData[0] : response.results[0];
      
      dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
      getMovieVideos();
    }, []);
  
}

export default useMovieTrailer