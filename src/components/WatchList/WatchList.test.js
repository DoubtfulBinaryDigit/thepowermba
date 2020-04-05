import React from 'react';
import { shallow } from 'enzyme';
import WatchList from './WatchList';

describe('WatchList', () => {
  it('renders', () => {
    shallow(<WatchList />);
  });
});
