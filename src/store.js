import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import logger from 'redux-logger';

import users, { usersSagas } from './modules/Users/UsersRedux';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(logger, sagaMiddleware);

const rootReducer = combineReducers({
  users
});

const store = createStore(rootReducer, middleware);

function* rootSaga() {
  yield all([usersSagas()]);
}

sagaMiddleware.run(rootSaga);

export default store;
