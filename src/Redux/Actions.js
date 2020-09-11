import ALL_ACTIONS from './ActionTypes';

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

export {
  filterFactResultsByText,
  filterFavouriteFactsResultsByText,
  saveFavouriteFact,
  removeFavouriteFact,
};
