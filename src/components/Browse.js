import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondarContainer from './SecondarContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondarContainer/> 
    </div>
  )
}

export default Browse