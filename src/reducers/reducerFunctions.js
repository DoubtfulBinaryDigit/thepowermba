export const removeMovie = (movies, movie) => {
  const newMovies = movies.filter(m => m.title !== movie.title);
  return [...newMovies];
};

export const toggleWatched = (movies, movie) => {
  const newMovies = movies.map(m => {
    if (m.title === movie.title) {
      m.watched = !movie.watched;
    }
    return m;
  });
  return [...newMovies];
};
