export const addMovie = (movies, movie) => {
  movie.order = movies.length;
  const newMovies = [movie, ...movies];
  return [...newMovies];
};

export const removeMovie = (movies, movie) => {
  const filteredMovies = movies.filter(m => m.title !== movie.title);

  const sortedMovies = filteredMovies.sort((a, b) => (a.order >= b.order ? -1 : 1));
  const newMovies = sortedMovies.map((m, i) => {
    m.order = i;
    return m;
  });
  return [...newMovies];
};

export const editedMovie = (movies, movie) => {
  const newMovies = movies.map(m => {
    if (m.title === movie.title) {
      m.title = movie.newTitle;
    }
    return m;
  });
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
