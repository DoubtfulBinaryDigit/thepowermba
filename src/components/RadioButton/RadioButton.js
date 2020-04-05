import React, { Fragment } from 'react';
import './RadioButton.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


const RadioButton = ({ name, setFilter, filter }) => {
  const checked = filter === name;
  console.log('RadioButton', filter, name, checked);
  return (
    <Fragment>
      <input
        className="radio"
        type="radio"
        id={name}
        onChange={() => {setFilter(name)}}
        checked={checked}
      />
      <label className="label" htmlFor={name}>
        <div className="indicator"></div>
        <span className="text">{name}</span>
      </label>
    </Fragment>
  );
};

export default RadioButton;
