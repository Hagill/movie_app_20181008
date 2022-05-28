import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom';

function Movie({title, year, summary, poster, genres, language, rating, runtime}) {
    return (
        <div className='movie'>
            <Link to="/movie-detail" state={{ year, title, summary, poster, genres, language, rating, runtime}}>
                 <img src={poster} alt={title} title={title} />
                <div className='movie__data'>
                    <h3 className='movie__title'>{title}</h3>
                    <h4 className='movie__language'>Language: {language}</h4>
                    <h4 className='movie__rating'>{rating} / 10.0 </h4>
                    <h4 className='movie__runtime'>Runtime: {runtime}minutes</h4>
                    <h5 className='movie__year'>{year}</h5>
                     <ul className='movie__genres'>
                        {genres.map((genre, index) => {
                         return <li key={index} className='movie__genre'>{genre}</li>
                        })}
                    </ul>
                     <p className='movie_summary'>{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    language: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired
};

export default Movie;