import { createAction, createReducer } from 'redux-act';
import { put, call, takeLatest } from 'redux-saga/effects';

import * as UsersApi from './UsersApi';

const namespace = 'USERS';

export const startFetch = createAction(`${namespace}__FETCH_START`);
export const successFetch = createAction(`${namespace}__FETCH_SUCCESS`);
export const failFetch = createAction(`${namespace}__FETCH_FAIL`);

export function* fetch({ payload: fromId }) {
  try {
    const { data } = yield call(UsersApi.getUsers, fromId);

    yield put(successFetch(data));
  } catch (err) {
    yield put(failFetch(err.message));
  }
}

export function* usersSagas() {
  yield takeLatest(startFetch.getType(), fetch);
}

export const initialState = {
  fetching: false,
  data: undefined,
  error: undefined
};

export default createReducer(
  {
    [startFetch]: state => ({
      ...state,
      fetching: true,
      error: initialState.error
    }),

    [successFetch]: (state, payload) => ({
      ...state,
      fetching: false,
      data: payload
    }),

    [failFetch]: (state, payload) => ({
      ...state,
      fetching: false,
      error: payload
    })
  },
  initialState
);

const getLocalState = state => state.users;

export const getUsers = state => getLocalState(state).data;
export const getUsersFetching = state => getLocalState(state).fetching;
export const getUsersError = state => getLocalState(state).error;
