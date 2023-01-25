import React from 'react';
import './errorPage.css';
import img from './error.gif'

export default function ErrorPage() {
  return (
    <div className='error-page'>
        <div className='error-text'>
            <h1>Oops!</h1>
            <h3>We can't seem to find the page you're looking for.</h3>
        </div>
        <div className='error-pic'>
            <img src={img}/>
        </div>
    </div>
  )
}
