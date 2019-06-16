import React from 'react';

import UsersSearchContainer from './UsersSearch/UsersSearchContainer';
import UsersListContainer from './UsersList/UsersListContainer';

import './Users.css';

function Users() {
  return (
    <div className="Users__container" data-testid="Users">
      <UsersSearchContainer />
      <UsersListContainer />
    </div>
  );
}

export default Users;
