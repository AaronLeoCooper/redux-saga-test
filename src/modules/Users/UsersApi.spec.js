import axios from 'axios';

import { getUsers } from './UsersApi';

jest.mock('axios', () => {
  const get = jest.fn().mockResolvedValue({});

  return {
    create: () => ({
      get
    })
  };
});

describe('UsersApi', () => {
  const api = axios.create();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getUsers', () => {
    const response = {
      data: [{ id: '1' }]
    };

    it('should return a promise', function*() {
      expect.hasAssertions();

      api.get.mockResolvedValueOnce(response);

      const result = yield getUsers();

      expect(result).toEqual(response);
      expect(api.get).toHaveBeenCalledWith('/users?since=1');
    });
  });
});
