import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

//함수형 컴포넌트로 작성 
function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <Link to={{ pathname: '/movie-detail', state: { year, title, summary, poster, genres } }}>
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="movie__genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.prototype = { 
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,//포스터 이미지 저장
    genres : PropTypes.arrayOf(PropTypes.string).isRequired, 
};//id는 자료형이 Number이고 유효성 체크 

export default Movie;  