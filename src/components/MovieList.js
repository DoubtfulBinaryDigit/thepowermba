import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return movies.map(movie => <Movie movie={movie} />);
};

export default MovieList;
