import { createStore } from 'redux';

const initialState = {
  movies: [{ title: 'Interestellar', genres: 'SciFi' }],
  isLoaded: false
};

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'ADD_MOVIE':
      return { ...state, movies: [payload, ...state.movies] };

    case 'REMOVE_MOVIE':
      return { ...state, movies: [...state.movies.filter(m => m.title !== payload.title)] };

    case 'TOGGLE_LOADED':
      return { ...state, isLoaded: !state.isLoaded };

    default:
      return state;
  }
}

export const store = createStore(rootReducer);
