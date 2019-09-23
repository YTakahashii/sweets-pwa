import ActionType from '../actions/Sweets/ActionType';
import { SweetsAction } from '../actions/Sweets/Action';
import { SweetsState } from '../states';
import sample from '../models/samples/Sweets';

export const initialState: SweetsState = {
  lists: [],
  edits: {},
};

export const sweetsReducer = (
  state: SweetsState = initialState,
  action: SweetsAction
): SweetsState => {
  switch (action.type) {
    case ActionType.LOAD_SWEETS:
      return {
        ...state,
        lists: sample,
      };
    default:
      return state;
  }
};
