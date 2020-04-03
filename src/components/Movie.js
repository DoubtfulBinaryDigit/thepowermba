import React from 'react';
import { useDispatch } from 'react-redux';

const Movie = ({ movie }) => {
  const { title, genres, watched } = movie;
  const dispatch = useDispatch();

  return (
    <div className="box card">
      <div className="checkbox">
        <input type="checkbox" id={'watched-' + title} checked={watched} onChange={() => dispatch({ type: 'TOGGLE_WATCHED', payload: movie })}/>
        <label for={'watched-' + title} />
      </div>
      <div className="data">
        <h3>{title}</h3>
        <p>{genres && genres.map(g => <span>#{g} </span>)}</p>
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
