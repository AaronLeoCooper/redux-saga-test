import React from 'react';
import { render } from '@testing-library/react';

import UsersList from './UsersList';

describe('UsersList', () => {
  const renderUsersList = (props = {}) => render(<UsersList {...props} />);

  it('should render no user items or spinner when no data is passed', () => {
    const { queryByTestId } = renderUsersList();

    expect(queryByTestId('UsersList__userItem')).toBeNull();
    expect(queryByTestId('UsersList__spinner')).toBeNull();
  });

  it('should render a spinner when fetching is true', () => {
    const { queryByTestId } = renderUsersList({
      fetching: true
    });

    expect(queryByTestId('UsersList__spinner')).not.toBeNull();
  });

  it('should render user items when users are provided', () => {
    const { queryAllByTestId } = renderUsersList({
      users: [{ id: 1 }, { id: 2 }, { id: 3 }]
    });

    expect(queryAllByTestId('UsersList__userItem')).toHaveLength(3);
  });
});
