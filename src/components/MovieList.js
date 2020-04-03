import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies, filter }) => {
  const sortedMovies = movies.sort((a, b) => (+a.watched >= +b.watched ? 1 : -1));
  const filteredMovies = filter ? sortedMovies.filter(m => m.genres.includes(filter)) : sortedMovies;

  return filteredMovies.map((movie, i) => <Movie key={`${movie.title}-${i}`} movie={movie} />);
};

export default MovieList;
