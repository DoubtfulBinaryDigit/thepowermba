import React from 'react';
import { shallow } from 'enzyme';
import Movie from './Movie';

describe('Movie', () => {
  it('renders', () => {
    shallow(<Movie />);
  });
});
