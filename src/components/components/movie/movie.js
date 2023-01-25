import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToList, removeFromList } from '../../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import './movie.css';

export default function MovieItem(props) {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.listReducer.movies);
  const { data } = props;
  const [ clicked, setClicked ] = useState(movies.indexOf(data.Title) < 0 ? false : true);

  const  clickToggle = (e) => {
    if (movies.indexOf(data.Title) < 0) {
      dispatch(addToList(data.Title));
      setClicked(true);
    } else {
      dispatch(removeFromList(data.Title));
      setClicked(false);
    }
  }

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(movies));
  }, [movies]);

  return (
    <div className='movie-card'>
      <div className='card-poster'>
        <img src={data.Poster} />
      </div>
      <div className='movie-title'>
        <Link to={`/movies/${data.imdbID}`} className='movie-link'>{data.Title}</Link>
        <a onClick={(e) => {clickToggle(e)}} className={clicked ? 'add-to-list done' : 'add-to-list'}>{clicked ? 'Watchlisted' : `+ Watchlist`}</a>
      </div>
    </div>
  )
}
