import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeSearchKey } from '../../../redux/actions/actions';
import Footer from '../../components/footer/footer';
import MovieItem from '../../components/movie/movie';
import ErrorPage from '../../components/errorPage/errorPage';
import '../../components/header/header.css'
import './home.css';

export default function Home() {
  const [ response, setResponse ] = useState(false);
  const [ movies, setMovies ] = useState([]);
  const searchKey = useSelector(state => state.searchReducer.searchKey);

  const dispatch = useDispatch()

  const fetchData = () => {
    if (searchKey.length >= 3) {
      fetch(`https://www.omdbapi.com/?apikey=ff1832e2&s=${searchKey}`)
        .then(res => res.json())
        .then(data => {
          setMovies(data.Search)
          setResponse(data.Response)
          console.log(data.Response);
        })
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
    dispatch(changeSearchKey(e.target.value));
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
        {response == 'True' ? movies.map(movieData => {
          return(
            <MovieItem data={movieData} key={movieData.imdbID}/>
          )
        }) : <ErrorPage />}
      </div>
      <Footer />
    </div>
  )
}
