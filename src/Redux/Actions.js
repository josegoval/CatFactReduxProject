import ALL_ACTIONS from './ActionTypes';

/**
 * Action for filtering facts by texts which include text
 * @param {String} text
 * @return Object with type and payload to dispatch actions.
 */
const filterFactResultsByText = (text) => {
  return {
    type: ALL_ACTIONS.FILTER_FACT_BY_TEXT,
    payload: {text},
  };
};

export {filterFactResultsByText};
