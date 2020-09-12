// Action Types
import ALL_ACTIONS from './ActionTypes';
// Utils
import {generateFactId} from '../Utils/generateFactData';

/**
 * Action for filtering facts by texts which include text.
 * @param {String} text
 * @returns Object with type and payload to dispatch actions.
 */
const filterFactResultsByText = (text) => {
  return {
    type: ALL_ACTIONS.FILTER_FACT_BY_TEXT,
    payload: {text},
  };
};

/**
 * Action for filtering favourite facts by texts which include text.
 * @param {String} text
 * @returns Object with type and payload to dispatch actions.
 */
const filterFavouriteFactsResultsByText = (text) => {
  return {
    type: ALL_ACTIONS.FILTER_FAVOURITE_FACT_BY_TEXT,
    payload: {text},
  };
};

/**
 * Action for filtering my_facts facts by texts which include text.
 * @param {String} text
 * @returns Object with type and payload to dispatch actions.
 */
const filterMyFactsResultsByText = (text) => {
  return {
    type: ALL_ACTIONS.FILTER_MY_FACTS_BY_TEXT,
    payload: {text},
  };
};

/**
 * Action for savinga favourite fact to the logged user.
 * @param {Object} fact
 * @returns Object with type and payload to dispatch actions.
 */
const saveFavouriteFact = (fact) => {
  return {
    type: ALL_ACTIONS.SAVE_FAVOURITE_FACT,
    payload: {fact},
  };
};

/**
 * Action for removing an existing favourite fact to the logged user.
 * @param {String} fact
 * @returns Object with type and payload to dispatch actions.
 */
const removeFavouriteFact = (id) => {
  return {
    type: ALL_ACTIONS.REMOVE_FAVOURITE_FACT,
    payload: {id},
  };
};

/**
 * Action for adding a new fact.
 * @param {String} text String content
 * @param {Object} user Creator
 * @returns Object with type and payload to dispatch actions.
 */
const addNewFact = (text, user) => {
  return {
    type: ALL_ACTIONS.ADD_NEW_FACT,
    payload: {
      text,
      type: 'cat',
      user: {
        name: user.name,
        _id: user._id,
      },
      upvotes: 0,
      userUpvoted: null,
      visible: true,
      _id: generateFactId(),
    },
  };
};

/**
 * Action for removing my fact.
 * @param {Object} fact
 * @returns Object with type and payload to dispatch actions.
 */
const removeMyFact = (id) => {
  return {
    type: ALL_ACTIONS.REMOVE_MY_FACT,
    payload: {
      id,
    },
  };
};

export {
  filterFactResultsByText,
  filterFavouriteFactsResultsByText,
  saveFavouriteFact,
  removeFavouriteFact,
  filterMyFactsResultsByText,
  addNewFact,
  removeMyFact,
};
