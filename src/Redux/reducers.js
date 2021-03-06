// Redux
import {combineReducers} from 'redux';
// Middlewares
import * as asyncInitialState from 'redux-async-initial-state';
// Actions
import ALL_ACTIONS from './ActionTypes';
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
    case ALL_ACTIONS.FILTER_FACT_BY_TEXT:
      return state.map((fact) =>
        fact.text.toUpperCase().includes(action.payload.text.toUpperCase())
          ? {...fact, visible: true}
          : {...fact, visible: false},
      );
    case ALL_ACTIONS.ADD_NEW_FACT:
      return [...state, action.payload];
    case ALL_ACTIONS.REMOVE_MY_FACT:
      return state.filter((fact) => fact._id !== action.payload.id);
    default:
      return state;
  }
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    // FAVOURITES
    case ALL_ACTIONS.FILTER_FAVOURITE_FACT_BY_TEXT:
      const favourites = state.favourites.map((fact) =>
        fact.text.toUpperCase().includes(action.payload.text.toUpperCase())
          ? {...fact, visible: true}
          : {...fact, visible: false},
      );
      return {...state, favourites};
    case ALL_ACTIONS.SAVE_FAVOURITE_FACT:
      return {...state, favourites: [...state.favourites, action.payload.fact]};
    case ALL_ACTIONS.REMOVE_FAVOURITE_FACT:
      return {
        ...state,
        favourites: state.favourites.filter(
          (fact) => fact._id !== action.payload.id,
        ),
      };
    // MY FACTS
    case ALL_ACTIONS.FILTER_MY_FACTS_BY_TEXT:
      const my_facts = state.my_facts.map((fact) =>
        fact.text.toUpperCase().includes(action.payload.text.toUpperCase())
          ? {...fact, visible: true}
          : {...fact, visible: false},
      );
      return {...state, my_facts};
    case ALL_ACTIONS.ADD_NEW_FACT:
      return {...state, my_facts: [...state.my_facts, action.payload]};
    case ALL_ACTIONS.REMOVE_MY_FACT:
      return {
        ...state,
        my_facts: state.my_facts.filter(
          (fact) => fact._id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};

const reducer = asyncInitialState.outerReducer(
  combineReducers({
    facts: factsReducer,
    user_data: userReducer,
    asyncInitialState: asyncInitialState.innerReducer,
  }),
);

export {reducer as default, loadStore};
