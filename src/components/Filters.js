import React, { Fragment } from 'react';

const Filters = ({ setFilter }) => {
  const filters = ['horror', 'romance', 'comedy'];
  return (
    <div>
      <div>
        {filters.map(f => (
          <Fragment>
            <label for={f}>{f}</label>
            <input type="radio" id={f} onChange={() => setFilter(f)} />
          </Fragment>
        ))}
      </div>
      <button onClick={() => setFilter(null)}>Reset</button>
    </div>
  );
};

export default Filters;
