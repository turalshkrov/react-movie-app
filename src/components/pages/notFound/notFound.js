import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import './notFound.css';

export default function NotFound() {
  return (
    <div className='container'>
      <div className='header'>
          <Link to='/'>
            <div className='logo'>
            <h1>OMDb</h1>
          </div>
          </Link>
        </div>
      <div className='not-found'>
        <h1>Oops!</h1>
        <h3>We can't seem to find the page you're looking for.</h3>
        <p>
          Error code: 404
        </p>
      </div>
      <Footer />
    </div>
  )
}
