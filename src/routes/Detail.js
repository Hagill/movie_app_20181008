import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import './Detail.css';

function Detail() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state === undefined) {
            navigate("/");
        }
        else if (location.state === null) {
            navigate("/");
        }
    });
    
    if (location.state) {
        return (
            <div className='movieDetail'>
              <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
              <div className='movieDetail__D'>
                <h3 className='movieDetail__title'>
                  {location.state.title}
                </h3>
                <h4 className='movieDetail__year'>Year: {location.state.year}</h4>
                <h4 className='movieDetail__language'>Language: {location.state.language}</h4>
                <h4 className='movieDetail__rating'>{location.state.rating} / 10.0</h4>
                <h4 className='movieDetail__runtime'>Runtime: {location.state.runtime} minutes</h4>
                <ul className='movieDetail__genres'>
                  {location.state.genres.map((genre, index) => {
                    return <li key={index} className='movieDetail__genre'>{genre}</li>
                  })}
                </ul>
                <p className='movieDetail_summary'>{location.state.summary}</p>
              </div>
            </div>
          );
        }
    else {
        return null;
    }
}

export default Detail;