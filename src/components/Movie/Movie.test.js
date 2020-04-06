import React from 'react';
import { shallow, mount } from 'enzyme';

import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Movie from './Movie';
import App from '../../App';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
const mockStore = configureStore();

const initialState = {
  movies: [
    { title: 'Titanic', genres: ['drama', 'romance'], watched: true, order: 0 },
    { title: 'Alien', genres: ['sciFi', 'horror'], watched: false, order: 1 },
    { title: 'Nothing Hill', genres: ['comedy', 'romance'], watched: false, order: 2 }
  ],
  loading: true,
  search: ''
};

let store, wrapper;

describe('Movie', () => {
  beforeEach(() => {
    const props = {
      movie: { title: 'Titanic', genres: ['drama', 'romance'], watched: true, order: 0 }
    };
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <App>
            <Movie {...props}/>
          </App>
        </Router>
      </Provider>
    );
  });

  it('renders a movie title', () => {
    expect(wrapper.find('h3')).toHaveLength(1);
  });
});
