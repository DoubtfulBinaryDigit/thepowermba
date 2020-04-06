import { rootReducer } from './rootReducer';

describe('rootReducer', () => {
  it('reducer for ADD_MOVIE', () => {
    let state = { movies: [] };
    state = rootReducer(state, {
      type: 'ADD_MOVIE',
      payload: { title: 'Titanic', genres: ['drama', 'romance'], watched: true, order: 0 }
    });
    expect(state).toEqual({
      movies: [{ title: 'Titanic', genres: ['drama', 'romance'], watched: true, order: 0 }],
      loading: true
    });
  });

  it('reducer for REMOVE_MOVIE', () => {
    let state = {
      movies: [
        { title: 'Titanic', genres: ['drama', 'romance'], watched: true, order: 0 },
        { title: 'Alien', genres: ['sciFi', 'horror'], watched: false, order: 1 },
        { title: 'Nothing Hill', genres: ['comedy', 'romance'], watched: false, order: 2 }
      ]
    };
    state = rootReducer(state, {
      type: 'REMOVE_MOVIE',
      payload: { title: 'Titanic', genres: ['drama', 'romance'], watched: true, order: 0 }
    });
    expect(state).toEqual({
      movies: [
        { title: 'Nothing Hill', genres: ['comedy', 'romance'], watched: false, order: 0 },
        { title: 'Alien', genres: ['sciFi', 'horror'], watched: false, order: 1 }
      ],
      loading: true
    });
  });

  it('reducer for EDIT_MOVIE', () => {
    let state = {
      movies: [{ title: 'Titanic', genres: ['drama', 'romance'], watched: true, order: 0 }]
    };
    state = rootReducer(state, {
      type: 'EDIT_MOVIE',
      payload: {
        title: 'Titanic',
        newTitle: 'Casablanca',
        genres: ['drama', 'romance'],
        watched: true,
        order: 0
      }
    });
    expect(state).toEqual({
      movies: [{ title: 'Casablanca', genres: ['drama', 'romance'], watched: true, order: 0 }],
      loading: true
    });
  });

  it('reducer for TOGGLE_WATCHED', () => {
    let state = {
      movies: [{ title: 'Titanic', genres: ['drama', 'romance'], watched: false, order: 0 }]
    };
    state = rootReducer(state, {
      type: 'TOGGLE_WATCHED',
      payload: {
        title: 'Titanic',
        genres: ['drama', 'romance'],
        watched: false,
        order: 0
      }
    });
    expect(state).toEqual({
      movies: [{ title: 'Titanic', genres: ['drama', 'romance'], watched: true, order: 0 }]
    });
  });

  it('reducer for SEARCH', () => {
    let state = { search: '' };
    state = rootReducer(state, {
      type: 'SEARCH',
      payload: 'alien'
    });
    expect(state).toEqual({
      search: 'alien',
      loading: true
    });
  });

  it('reducer for TOGGLE_LOADED', () => {
    let state = { loading: false };
    state = rootReducer(state, { type: 'TOGGLE_LOADED' });
    expect(state).toEqual({ loading: true });
  });
});
