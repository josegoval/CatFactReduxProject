// Redux
import {combineReducers} from 'redux';
// Actions
// Fetching data
import {getFacts} from '../Utils/fetchFactsData';

const INITIAL_STATE_OF_FACTS = getFacts();

const factsReducer = (state = INITIAL_STATE_OF_FACTS, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const userReducer = (state = 'wholap', action) => {
  return state;
};

export default combineReducers({
  facts: factsReducer,
  user: userReducer,
});
