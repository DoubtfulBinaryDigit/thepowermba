import React from 'react';
import { shallow } from 'enzyme';
import MovieInput from './MovieInput';

describe('MovieInput', () => {
  it('renders', () => {
    shallow(<MovieInput />);
  });
});
