import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondarContainer from './SecondarContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  
  return (
    <div>
      <Header/>
      {
        showGptSearch ? (
          <GptSearch/>
        ):
        <>
        (
          <MainContainer/>
          <SecondarContainer/>
        )
        </>  
      }  
    </div>
  )
}

export default Browse