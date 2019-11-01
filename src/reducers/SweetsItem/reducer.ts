// import ActionType from '../actions/Sweets/ActionType';
import { SweetsAction } from '../../actions/Sweets/Action';
import { SweetsItemState } from '../../states/SweetsItemState';

export const initialState: SweetsItemState = {};

export const sweetsReducer = (state: SweetsItemState = initialState, action: SweetsAction): SweetsItemState => {
  switch (action.type) {
    default:
      return state;
  }
};
