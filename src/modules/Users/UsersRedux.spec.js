import { put, call, takeLatest } from 'redux-saga/effects';

import * as UsersApi from './UsersApi';

import usersReducer, {
  initialState,
  startFetch,
  successFetch,
  failFetch,
  fetch,
  usersSagas
} from './UsersRedux';

jest.mock('./UsersApi');

describe('UsersRedux', () => {
  describe('usersReducer', () => {
    it('should set fetching: true and reset error when startFetch is dispatched', () => {
      const state = { ...initialState, error: 'Test error' };

      const result = usersReducer(state, startFetch());

      expect(result).toEqual({
        fetching: true,
        data: undefined,
        error: undefined
      });
    });

    it('should set fetching: false and update data when successFetch is dispatched', () => {
      const state = { ...initialState, fetching: true };

      const payload = [{ id: '1' }];

      const result = usersReducer(state, successFetch(payload));

      expect(result).toEqual({
        fetching: false,
        data: payload,
        error: undefined
      });
    });

    it('should set fetching: false and update error when failFetch is dispatched', () => {
      const state = { ...initialState, fetching: true };

      const payload = 'Test error';

      const result = usersReducer(state, failFetch(payload));

      expect(result).toEqual({
        fetching: false,
        data: undefined,
        error: payload
      });
    });

    it('should return state unmodified when an unrecognised action is dispatched', () => {
      const result = usersReducer(undefined, { type: 'UNKNOWN_ACTION' });

      expect(result).toEqual(initialState);
    });
  });

  describe('fetch', () => {
    it('should dispatch successFetch on successful API response', () => {
      const generator = fetch({ payload: '10' });

      expect(generator.next().value).toEqual(call(UsersApi.getUsers, '10'));

      expect(generator.next({ data: [{ id: '1' }] }).value).toEqual(
        put(successFetch([{ id: '1' }]))
      );

      expect(generator.next().done).toBe(true);
    });

    it('should dispatch failFetch on failed API response', () => {
      const generator = fetch({ payload: '10' });

      expect(generator.next().value).toEqual(call(UsersApi.getUsers, '10'));

      expect(generator.throw(new Error('Test error')).value).toEqual(
        put(failFetch('Test error'))
      );

      expect(generator.next().done).toBe(true);
    });
  });

  describe('usersSagas', () => {
    it('should takeLatest of fetch when startFetch is dispatched', () => {
      const generator = usersSagas();

      expect(generator.next().value).toEqual(
        takeLatest(startFetch.getType(), fetch)
      );

      expect(generator.next().done).toBe(true);
    });
  });
});
