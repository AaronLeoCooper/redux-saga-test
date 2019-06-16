import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render the Users component', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('Users')).not.toBeNull();
  });
});
