import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import Users from './Users';

import store from '../../store';

describe('Users', () => {
  it('should render the UsersSearch & UsersList components', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Users />
      </Provider>
    );

    expect(getByTestId('UsersSearch')).not.toBeNull();
    expect(getByTestId('UsersList')).not.toBeNull();
  });
});
