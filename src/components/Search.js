import React from 'react';

const Search = ({ setSearch }) => {
  return (
    <div>
      <input type="text" onChange={e => setSearch(e.target.value.toLowerCase())} />
    </div>
  );
};
export default Search;
