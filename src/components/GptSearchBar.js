import { useSelector } from 'react-redux'
import { lang } from '../utils/languageConstants'
import React, { useRef } from 'react'
import client from '../utils/openai';
//import { R_MOVIES } from '../utils/constants';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const langKey = useSelector(store=>store.config.lang)
  const searchText = useRef(null)
  const diapatch = useDispatch();

  const searchMovieTMDB = async (movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const response = await data.json()
    return response.results;  
  }
  const handleGptSearchClick =async ()=>{
    //console.log(searchText.current.value);
    //Make an API call to GPT API and get movie results
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    try {
      const gptResults = await client.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      const gptMovies = gptResults.choices?.[0]?.message?.content?.split(", ");
      console.log(gptMovies);
      
      const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie))
      const tmdbResults =await Promise.all(promiseArray)
      console.log(tmdbResults);
      
      diapatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}));
    
    } catch (error) {
      console.log("Something Went Wrong");
    }
    
     
  }

  return (
    <div className='pt-[10%] flex justify-center' >
        <form className=' w-1/2 bg-black  grid grid-cols-12'
        onSubmit={(e)=>e.preventDefault()}>
            <input type="text" ref={searchText}
            className=' p-2 m-4 col-span-9'
            placeholder={lang[langKey].gptSerarchPlaceHolder}
            />
            <button 
            className=' bg-red-700 
            text-white 
            col-span-3 
            m-4 
            rounded-md'
            onClick={handleGptSearchClick}>
            {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar