import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './Movie.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Movie = ({ movie }) => {
  const { title, genres, watched } = movie;
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [movieTitle, setMovieTitle] = useState(title);

  const saveEdition = () => {
    if (movieTitle.trim() !== '' && movieTitle !== title) {
      const editedMovie = movie;
      editedMovie.newTitle = movieTitle;
      dispatch({ type: 'EDIT_MOVIE', payload: editedMovie });
    }
    setEditMode(false);
  };

  return (
    <div className="box card">
      <div className="checkbox">
        <input
          type="checkbox"
          id={'watched-' + title}
          checked={watched}
          onChange={() => dispatch({ type: 'TOGGLE_WATCHED', payload: movie })}
        />
        <label htmlFor={'watched-' + title} />
      </div>

      <div className="data">
        {editMode ? (
          <input type="text" onChange={e => setMovieTitle(e.target.value)} />
        ) : (
          <h3>{title}</h3>
        )}
        <p>{genres && genres.map(g => <span key={g}>#{g} </span>)}</p>
      </div>

      <div className="neu editButtons">
        {editMode ? (
          <button className="neu iconButton saveIcon" onClick={saveEdition}>
            <FontAwesomeIcon icon={faCheckCircle} />
          </button>
        ) : (
          <button className="neu iconButton editIcon" onClick={() => setEditMode(true)}>
            <FontAwesomeIcon icon={faPen} />
          </button>
        )}
        <button
          className="neu iconButton closeIcon"
          onClick={() => dispatch({ type: 'REMOVE_MOVIE', payload: movie })}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default Movie;

/* heckbox that shows if movie is watched or not.
Movie name.
Genres.
Delete button. */