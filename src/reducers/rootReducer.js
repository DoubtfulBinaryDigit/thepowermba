import { createStore } from 'redux';
import { removeMovie, toggleWatched } from './reducerFunctions';

const initialState = {
  movies: [
    { title: 'Titanic', genres: ['drama', 'romance'], watched: true },
    { title: 'Alien', genres: ['sciFi', 'horror'], watched: false },
    { title: 'Nothing Hill', genres: ['commedy', 'romance'], watched: false }
  ],
  isLoaded: false
};

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'ADD_MOVIE':
      return { ...state, movies: [payload, ...state.movies] };

    case 'REMOVE_MOVIE':
      const updatedMovies = removeMovie(state.movies, payload);
      return { ...state, movies: updatedMovies };

    case 'TOGGLE_WATCHED':
      const updatedWatched = toggleWatched(state.movies, payload);
      return { ...state, movies: updatedWatched };

    case 'TOGGLE_LOADED':
      return { ...state, isLoaded: !state.isLoaded };

    default:
      return state;
  }
}

export const store = createStore(rootReducer);
