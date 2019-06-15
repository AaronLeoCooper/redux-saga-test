import React from 'react';

import UsersSearchContainer from './UsersSearch/UsersSearchContainer';
import UsersListContainer from './UsersList/UsersListContainer';

import './Users.css';

function Users() {
  return (
    <div className="Users__container">
      <UsersSearchContainer />
      <UsersListContainer />
    </div>
  );
}

export default Users;
