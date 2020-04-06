import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';
import RadioButton from '../RadioButton/RadioButton'

const Filters = ({ setFilter, filter }) => {
  const filters = ['horror', 'romance', 'comedy'];
  return (
    <div className="filterInputs">
      <div className="radioInputs">
        {filters.map(f => (
          <RadioButton key={f} name={f} setFilter={setFilter} filter={filter} />
        ))}
      </div>
      <button className="neu box" onClick={() => setFilter(null)}>
        Reset
      </button>
    </div>
  );
};

Filters.propTypes = {
  setFilter: PropTypes.func,
  filter: PropTypes.string
};

Filters.defaultProps = {
  setFilter:null,
  filter: null
};

export default Filters;
