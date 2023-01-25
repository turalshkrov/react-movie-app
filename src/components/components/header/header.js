import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

export default function Header(props) {
    const {
        changeHandler
    } = props;
  return (
    <div className='header'>
        <Link to='/'>
          <div className='logo'>
            <h1>OMDb</h1>
          </div>
          </Link>
        <div className='search-box'>
            <input placeholder='Search Movie' onChange={changeHandler}></input>
        </div>
        <div className='watchlist-link'>
            <Link to='/watchlist'>Watchlist</Link>
        </div>
    </div>
  )
}
