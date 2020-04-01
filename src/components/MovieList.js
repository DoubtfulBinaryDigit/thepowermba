import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return movies.map((movie, i) => <Movie key={`${movie.title}-${i}`} movie={movie} />);
};

export default MovieList;
