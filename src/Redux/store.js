// Redux
import {createStore, applyMiddleware, compose} from 'redux';
// Middlewares
// import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import * as asyncInitialState from 'redux-async-initial-state';
import logger from 'redux-logger';
// Reducers
import reducer, {loadStore} from './reducers';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      asyncInitialState.middleware(loadStore),
      logger,
      ReduxThunk,
    ),
  ),
);

export default store;
