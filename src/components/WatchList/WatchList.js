import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './WatchList.scss';

import MovieInput from '../MovieInput/MovieInput';
import MovieList from '../MovieList/MovieList';
import Filters from '../Filters/Filters';
import Search from '../Search/Search';
import Loader from '../Loader/Loader';

const WatchList = ({ match }) => {
  const [filter, setFilter] = useState(null);

  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const movies = useSelector(state => state.movies);
  const search = useSelector(state => state.search);

  const urlGenre = match && match.params.g;

  useEffect(() => {
    if (loading) {
      setTimeout(() => dispatch({ type: 'TOGGLE_LOADED' }), 3000);
    }
  }, [loading]);

  useEffect(() => {
    if (urlGenre) {
      setFilter(urlGenre);
    }
  }, [urlGenre]);

  return (
    <div className="main">
      <div className="actions">
        <MovieInput addToList={movie => dispatch({ type: 'ADD_MOVIE', payload: movie })} />
        <Search />
        <Filters setFilter={setFilter} filter={filter} />
      </div>
      <div className="feed">
      {loading ? <Loader /> : <MovieList movies={movies} filter={filter} search={search} />}
      </div>
    </div>
  );
};

export default WatchList;
