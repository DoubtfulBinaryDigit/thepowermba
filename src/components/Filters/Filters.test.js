import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';

describe('Filters', () => {
  it('renders', () => {
    shallow(<Filters />);
  });
});
