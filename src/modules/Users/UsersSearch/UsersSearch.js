import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

import './UsersSearch.css';

function UsersSearch({ startFetch }) {
  const onChange = ({ target: { value } }) => startFetch(value);

  return (
    <div className="UsersSearch__container">
      <Input placeholder="Search from user ID" onBlur={onChange} />
    </div>
  );
}

UsersSearch.propTypes = {
  startFetch: PropTypes.func.isRequired
};

export default UsersSearch;
