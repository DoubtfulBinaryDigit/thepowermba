import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieInput from './MovieInput';
import MovieList from './MovieList';

const Watchlist = props => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);

  return (
    <div>
      <MovieInput addToList={movie => dispatch({ type: 'ADD_MOVIE', payload: movie })} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Watchlist;
