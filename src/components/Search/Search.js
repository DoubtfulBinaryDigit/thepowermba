import React from 'react';
import './Search.scss';

import { useDispatch } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className="searchInput">
      <input
        className="neu box"
        placeholder="Search..."
        type="text"
        onChange={e => dispatch({ type: 'SEARCH', payload: e.target.value.toLowerCase() })}
      />
    </div>
  );
};

export default Search;
