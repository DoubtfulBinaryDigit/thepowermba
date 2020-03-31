import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieInput from './MovieInput';
import MovieList from './MovieList';

const Watchlist = props => {
  return (
    <div>
      <MovieInput />
      <MovieList />
    </div>
  );
};

export default Watchlist;
