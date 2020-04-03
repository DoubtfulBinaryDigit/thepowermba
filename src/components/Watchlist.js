import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieInput from './MovieInput';
import MovieList from './MovieList';
import Filters from './Filters';
import Search from './Search';

const Watchlist = () => {
  const [filter, setFilter] = useState(null);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);

  return (
    <div>
      <MovieInput addToList={movie => dispatch({ type: 'ADD_MOVIE', payload: movie })} />
      <Search setSearch={setSearch} />
      <Filters setFilter={setFilter} />
      <MovieList movies={movies} filter={filter} search={search} />
    </div>
  );
};

export default Watchlist;
