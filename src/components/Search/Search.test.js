import React from 'react';
import { shallow, mount } from 'enzyme';

import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Search from './Search';
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

describe('Search', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Search />
      </Provider>
    );
  });

  it('renders an input', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });
});
