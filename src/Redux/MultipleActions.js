// Action Types
import * as Actions from './Actions';

export const removeFactFromEverywhere = (id) => {
  return (dispatch) => {
    dispatch(Actions.removeFavouriteFact(id));
    dispatch(Actions.removeMyFact(id));
  };
};
