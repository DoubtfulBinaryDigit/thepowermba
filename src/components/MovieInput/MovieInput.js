import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MovieInput.scss';

const MovieInput = ({ addToList }) => {
  const [title, setTitle] = useState('');
  const [genres, setGenres] = useState([]);
  const [currGenre, setCurrGenre] = useState('');

  const addMovie = () => {
    if (title !== '' && genres !== '') {
      const newMovie = { title, genres };
      addToList(newMovie);
      setTitle('');
      setGenres([]);
    }
  };

  const onKeyDown = ({ key, target }) => {
    const newGenre = target.value.trim().toLowerCase();
    const validGenre = newGenre !== '' && newGenre !== 'horror';
    const exists = genres.includes(newGenre);
    if (key === 'Enter') {
      if (validGenre && !exists) {
        setGenres([...genres, newGenre]);
      }
      setCurrGenre('');
    }
  };

  return (
    <div className="movieInputs">
      <div className="movieTitle">
        <input
          className="neu box"
          type="text"
          placeholder="Add a movie..."
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <div className="movieGenre">
          <input
            className="neu box"
            type="text"
            placeholder="#drama, #commedy"
            value={currGenre}
            onKeyDown={onKeyDown}
            onChange={e => setCurrGenre(e.target.value)}
          />
          <p>{genres && genres.map(g => <span key={g}>#{g} </span>)}</p>
        </div>
      </div>
      <button className="neu box add" onClick={addMovie}>
        Add
      </button>
    </div>
  );
};

MovieInput.propTypes = {
  addToList: PropTypes.func
};

MovieInput.defaultProps = { addToList: null };

export default MovieInput;
