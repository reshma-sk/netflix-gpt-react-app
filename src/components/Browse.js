import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondarContainer from './SecondarContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComigMovies from '../hooks/useUpComigMovies';

const Browse = () => {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies();//fetchin data from tmdb api and put it into tore
  usePopularMovies();
  useTopRatedMovies();
  useUpComigMovies();
  
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondarContainer />
        </>
      )}
    </div>
  );
}
export default Browse