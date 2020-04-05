import { createStore } from 'redux';
import { addMovie, removeMovie, editedMovie, toggleWatched } from './reducerFunctions';

const initialState = {
  movies: [
    { title: 'Titanic', genres: ['drama', 'romance'], watched: true, order: 0 },
    { title: 'Alien', genres: ['sciFi', 'horror'], watched: false, order: 1 },
    { title: 'Nothing Hill', genres: ['comedy', 'romance'], watched: false, order: 2 },
  ],
  loading: true,
  search: ''
};

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'ADD_MOVIE':
      const addedMovies = addMovie(state.movies, payload);
      return { ...state, loading: true, movies: addedMovies };

    case 'REMOVE_MOVIE':
      const updatedMovies = removeMovie(state.movies, payload);
      return { ...state, loading: true, movies: updatedMovies };

    case 'EDIT_MOVIE':
      const editedMovies = editedMovie(state.movies, payload);
      return { ...state, loading: true, movies: editedMovies };

    case 'TOGGLE_WATCHED':
      const updatedWatched = toggleWatched(state.movies, payload);
      return { ...state, movies: updatedWatched };

    case 'SEARCH':
      return { ...state, loading: true, search: payload };

    case 'TOGGLE_LOADED':
      return { ...state, loading: !state.loading };

    default:
      return state;
  }
}

export const store = createStore(rootReducer);
