import React, { useState } from 'react';

const MovieInput = ({ addToList }) => {
  const [title, setTitle] = useState('');
  const [genres, setGenres] = useState('');

  const addMovie = () => {
    if (title !== '' && genres !== '') {
      addToList({ title, genres });
      setTitle('');
      setGenres('');
    }
  };

  return (
    <div className="">
      <input
        className="neu box"
        type="text"
        placeholder="Add a movie..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        className="neu box"
        type="text"
        placeholder="#drama, #commedy"
        value={genres}
        onChange={e => setGenres(e.target.value)}
      ></input>
      <button className="neu box add" onClick={addMovie}>
        Add
      </button>
    </div>
  );
};

export default MovieInput;
