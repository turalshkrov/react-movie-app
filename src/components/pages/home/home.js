import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';
import MovieItem from '../../components/movie/movie';
import './home.css';
import '../../components/header/header.css';

export default function Home() {
  const [ movies, setMovies ] = useState([]);
  const [ searchValue, setSearchValue ] = useState('star wars');

  const fetchData = () => {
    if (searchValue.length >= 3) {
      fetch(`http://www.omdbapi.com/?apikey=ff1832e2&s=${searchValue}`)
        .then(res => res.json())
        .then(data => setMovies(data.Search))
        .catch(err => console.log(err))
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();
    fetchData();
  }

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
  }
  return (
    <div className='container'>
      <div className='header'>
        <Link to='/'>
          <div className='logo'>
            <h1>OMDb</h1>
          </div>
          </Link>
        <div className='search-box'>
          <form onSubmit={(e) => submitHandler(e)}>
            <input placeholder='Search Movie' onChange={changeHandler}></input>
          </form>
        </div>
        <div className='watchlist-link'>
            <Link to='/watchlist'>Watchlist</Link>
        </div>
      </div>
      <div className='movies'>
        {movies.map(movieData => {
          return(
            <MovieItem data={movieData} key={movieData.imdbID}/>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}
