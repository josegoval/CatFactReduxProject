// Action Types
import * as Actions from './Actions';
// Redux
import Store from './store';

export const removeFactFromEverywhere = (id) => {
  return (dispatch) => {
    dispatch(Actions.removeFavouriteFact(id));
    dispatch(Actions.removeMyFact(id));
  };
};
