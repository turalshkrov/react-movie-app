import React from 'react';
import { Link } from 'react-router-dom';
import ErrorPage from '../../components/errorPage/errorPage';
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
      <ErrorPage />
      <Footer />
    </div>
  )
}
