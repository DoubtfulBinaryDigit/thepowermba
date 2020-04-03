import React, { useState } from 'react';

const MovieInput = ({ addToList }) => {
  const [title, setTitle] = useState('');
  const [genres, setGenres] = useState([]);
  const [currGenre, setCurrGenre] = useState('');

  const addMovie = () => {
    if (title !== '' && genres !== '') {
      addToList({ title, genres });
      setTitle('');
      setGenres([]);
    }
  };

  const onKeyDown = ({ key, target }) => {
    const newGenre = target.value.trim().toLowerCase();
    const validGenre = newGenre !== '' && newGenre !== 'horror';
    const exists = genres.includes(newGenre);
    if (key === 'Enter' && validGenre && !exists) {
      setGenres([...genres, newGenre]);
    }
    setCurrGenre('');
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
      </div>
      <div className="movieGenre">
        <input
          className="neu box"
          type="text"
          placeholder="#drama, #commedy"
          value={currGenre}
          onKeyDown={onKeyDown}
          onChange={e => setCurrGenre(e.target.value)}
        />
        <p>{genres && genres.map(g => <span>#{g} </span>)}</p>
      </div>
      <button className="neu box add" onClick={addMovie}>
        Add
      </button>
    </div>
  );
};

export default MovieInput;
