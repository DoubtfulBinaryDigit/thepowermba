import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieInput from './MovieInput';
import MovieList from './MovieList';
import Filters from './Filters';

const Watchlist = () => {
  const [filter, setFilter] = useState(null);
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);

  return (
    <div>
      <MovieInput addToList={movie => dispatch({ type: 'ADD_MOVIE', payload: movie })} />
      <Filters setFilter={setFilter} />
      <MovieList movies={movies} filter={filter} />
    </div>
  );
};

export default Watchlist;
