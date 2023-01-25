import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromList } from '../../../redux/actions/actions';
import Footer from '../../components/footer/footer';
import './watchlist.css'

export default function Watchlist() {
  const dispatch = useDispatch()
  const movies = useSelector(state => state.listReducer.movies);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(movies));
  }, [movies]);

  return (
    <div className='container'>
      <div className='header'>
          <Link to='/'>
            <div className='logo'>
            <h1>OMDb</h1>
          </div>
          </Link>
        </div>
        <div className='watchlist-title'>
          <h2>Your Watchlist</h2>
        </div>
        <div className='watchlist'>
          {movies.map((movie) => {
            return (
              <div key={movie} className='watchlist-item'>
                <p>{movie}</p>
                  <a onClick={() => {dispatch(removeFromList(movie))}} className='remove-watchlist'><i className="fa-solid fa-xmark"></i></a>
              </div>
          )
          })}
        </div>
        <Footer />
    </div>
  )
}
