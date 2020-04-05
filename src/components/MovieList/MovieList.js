import React from 'react';
import Movie from '../Movie/Movie';
import './MovieList.scss';

const MovieList = ({ movies, filter, search }) => {
  const sortedMovies = movies
    .sort((a, b) => (a.order >= b.order ? -1 : 1))
    .sort((a, b) => (+a.watched >= +b.watched ? 1 : -1));
  const filteredMovies = filter
    ? sortedMovies.filter(m => m.genres.includes(filter))
    : sortedMovies;

  const searchedMovies =
    search !== ''
      ? filteredMovies.filter(m => m.title.toLowerCase().includes(search))
      : filteredMovies;

  return (<div className="list">{searchedMovies.map((movie, i) => <Movie key={`${movie.title}-${i}`} movie={movie} />)}</div>);
};

export default MovieList;
