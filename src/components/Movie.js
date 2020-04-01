import React from 'react';
import { useDispatch } from 'react-redux';

const Movie = ({ movie }) => {
  const { title, genres, watched } = movie;
  const dispatch = useDispatch();

  return (
    <div className="box card">
      <div className="data">
        <h3>{title}</h3>
        <p>{genres}</p>
      </div>
      <button
        className="neu remove"
        onClick={() => dispatch({ type: 'REMOVE_MOVIE', payload: movie })}
      >
        <div id="close">
          <div class="c c1">
            <div class="c c2"></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Movie;

/* heckbox that shows if movie is watched or not.
Movie name.
Genres.
Delete button. */
