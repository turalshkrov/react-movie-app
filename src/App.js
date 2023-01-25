import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/home';
import MovieInfoPage from './components/pages/movieInfo/movieInfoPage';
import NotFound from './components/pages/notFound/notFound';
import Watchlist from './components/pages/watchlist/watchlist';
import './index.css'

function App() {
  return (
    <BrowserRouter basename='/react-movie-app'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/movies' element={<Home />}></Route>
        <Route path='/watchlist' element={<Watchlist />}></Route>
        <Route path='/movies/:id' element={<MovieInfoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
