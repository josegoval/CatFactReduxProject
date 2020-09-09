// Redux
import {combineReducers} from 'redux';
// Middlewares
import * as asyncInitialState from 'redux-async-initial-state';
// Actions
// Fetching data
import {getFacts} from '../Utils/fetchFactsData';

// Initial States
// const INITIAL_STATE_OF_FACTS = getFacts();
const INITIAL_STATE_OF_USER_DATA = {
  name: {
    first: 'Default First Name',
    last: 'Default Last Name',
  },
  _id: 'defaultID',
  favourites: [],
  my_facts: [],
};

const loadStore = () => {
  return new Promise((resolve) => {
    getFacts().then((facts) => {
      resolve({
        facts,
        user_data: INITIAL_STATE_OF_USER_DATA,
      });
    });
  });
};

// Reducers
const factsReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const userReducer = (state = {}, action) => {
  return state;
};

const reducer = asyncInitialState.outerReducer(
  combineReducers({
    facts: factsReducer,
    user_data: userReducer,
    asyncInitialState: asyncInitialState.innerReducer,
  }),
);

export {reducer as default, loadStore};
