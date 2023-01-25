import React from 'react';
import Footer from '../footer/footer';
import './movieInfo.css'

export default function MovieInfo(props) {
  const {
    data
  } = props;

  return (
    <div className='movie-info'>
        <div className='movie-info-title'>
            <h1>{data.Title}</h1>
                <span>{data.Year}</span>
                <span>{data.Runtime}</span>
                <span>{data.Genre}</span>
        </div>
        <div className='movie-info-body'>
            <div className='poster'>
                <img src={data.Poster}/>
            </div>
            <div className='movie-main-info'>
                <ul className='movie-ratings'>
                    {data.Ratings.map(rating => {
                        return(
                            <li key={rating.Source}>{rating.Source} - {rating.Value}</li>
                        )
                    })}
                </ul>
                <p className='movie-crew'>Director:<br/>{data.Director}</p>
                <p className='movie-crew'>Writer:<br/>{data.Writer}</p>
                <p className='movie-crew'>Stars:<br/>{data.Actors}</p>
            </div>
        </div>
        <p className='plot'>{data.Plot}</p>
    </div>
  )
}
