import ActionType from '../actions/Shop/ActionType';
import { ShopAction } from '../actions/Shop/Action';
import { ShopState } from '../states';
import sample from '../models/samples/Shops';

export const initialState: ShopState = {
  lists: [],
  edits: {},
};

export const shopReducer = (
  state: ShopState = initialState,
  action: ShopAction
): ShopState => {
  switch (action.type) {
    case ActionType.LOAD_SHOPS:
      return {
        ...state,
        lists: sample,
      };
    default:
      return state;
  }
};
