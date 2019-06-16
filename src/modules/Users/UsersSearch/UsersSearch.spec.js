import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import UsersSearch from './UsersSearch';

describe('UsersSearch', () => {
  it('should call startFetch with a value when the input is blurred', () => {
    const startFetch = jest.fn();

    const { getByPlaceholderText } = render(
      <UsersSearch startFetch={startFetch} />
    );

    fireEvent.blur(getByPlaceholderText('Search from user ID'), {
      target: { value: '120' }
    });

    expect(startFetch).toHaveBeenCalledTimes(1);
    expect(startFetch).toHaveBeenCalledWith('120');
  });
});
