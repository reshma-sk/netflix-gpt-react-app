import React,{useRef} from 'react'
import { lang } from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import client from '../utils/openai'
import { addGptMovieResult } from '../utils/gptSlice'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const langkey = useSelector((store)=>store.config.lang);
  const searchText = useRef(null)

  const searchMovieTMDB = async (movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const response = await data.json()
    console.log(response.result);
    
    return response.results;  
  }

  const handleGptSearchClick = async ()=>{
    //console.log(searchText.current.value);
    //make an API call GPT API and get movie Results
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
      const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie))//it will give you 5 promises(an array of promises)
      const tmdbResults = await Promise.all(promiseArray)
      console.log(tmdbResults);
      dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}));
    
    } catch (error) {
      console.log("Something Went Wrong");
    }  
    
  }

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full bg-black md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langkey].gptSerarchPlaceHolder}
          className="p-2 m-4 col-span-9"
        />
        <button
          className="text-white bg-red-700 col-span-3 p-2 m-4 rounded-md"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar