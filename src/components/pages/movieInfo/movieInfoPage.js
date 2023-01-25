import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import MovieInfo from '../../components/movieInfo/movieInfo';

export default function MovieInfoPage() {
    const [ movie,setMovie ] = useState();
    const params = useParams();
    
    useEffect(() => {
      fetch(`https://www.omdbapi.com/?apikey=ff1832e2&i=${params.id}`)
      .then(res => res.json())
      .then(data => {setMovie(data)
      console.log(data)})
      .catch(err => console.log(err))
      console.log(movie);
    }, [params.id])

  return (
    <div>
      <div className='container'>
        <div className='header'>
          <Link to='/'>
            <div className='logo'>
            <h1>OMDb</h1>
          </div>
          </Link>
        </div>
        {
          movie && <MovieInfo data={movie}/>
        }
        <Footer />
      </div>
    </div>
  )
}
