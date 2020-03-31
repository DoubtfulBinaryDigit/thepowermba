import { createStore } from "redux";

const initialState = {
  movies: [],
  isLoaded: false
};

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_MOVIE":
      return { ...state, movies: [...payload] };
    
    case "TOGGLE_LOADED":
      return { ...state, isLoaded: !state.isLoaded };
    default:
      return state;
  }
}

export const store = createStore(rootReducer);