import React from 'react';
import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='api-link'>
            <a href='https://www.omdbapi.com/' target='_blank' rel="noopener noreferrer">OMDb api</a>
        </div>
        <div className='github-link'>
        <a href='https://github.com/turalshkrov' target='_blank' rel="noopener noreferrer">Github</a>
        </div>
    </div>
  )
}
