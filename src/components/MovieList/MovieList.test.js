import React from 'react';
import { shallow } from 'enzyme';
import MovieList from './MovieList';
import Movie from '../Movie/Movie';

describe('MovieList', () => {
  it('renders', () => {
    shallow(<MovieList />);
  });

  it('renders all cards', () => {
    const props = {
      movies: [
        { title: 'Titanic', genres: ['drama', 'romance'], watched: true, order: 0 },
        { title: 'Alien', genres: ['sciFi', 'horror'], watched: false, order: 1 },
        { title: 'Nothing Hill', genres: ['comedy', 'romance'], watched: false, order: 2 }
      ],
      filter: '',
      search: ''
    };
    const wrapper = shallow(<MovieList {...props} />);
    console.log('wrapper', wrapper);
    expect(wrapper.find(Movie)).toHaveLength(3);
  });
});

