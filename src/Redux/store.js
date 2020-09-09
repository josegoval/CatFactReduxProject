// Redux
import {createStore, applyMiddleware, compose} from 'redux';
// Middlewares
// import promiseMiddleware from 'redux-promise';
import * as asyncInitialState from 'redux-async-initial-state';
import logger from 'redux-logger';
// Reducers
import reducer, {loadStore} from './reducers';

export default createStore(
  reducer,
  compose(applyMiddleware(asyncInitialState.middleware(loadStore), logger)),
);
