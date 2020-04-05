import React, { Fragment } from 'react';
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

export default RadioButton;
