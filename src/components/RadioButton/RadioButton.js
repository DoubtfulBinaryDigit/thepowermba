import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './RadioButton.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const RadioButton = ({ name, setFilter, filter }) => {
  const checked = filter === name;

  return (
    <Fragment>
      <label className="label" htmlFor={name}>
        <input
          className="radio"
          type="radio"
          id={name}
          onChange={() => {
            setFilter(name);
          }}
          checked={checked}
        />
        <FontAwesomeIcon icon={faCircle} />
      </label>
      <span className="text">{name}</span>
    </Fragment>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  setFilter: PropTypes.func,
  filter: PropTypes.string
};

RadioButton.defaultProps = {
  setFilter: null,
  filter: null
};
export default RadioButton;
