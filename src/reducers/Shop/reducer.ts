// import ActionType from '../actions/Shop/ActionType';
import { ShopAction } from '../../actions/Shop/Action';
import { ShopState } from '../../states/ShopState';

export const initialState: ShopState = {};

export const shopReducer = (state: ShopState = initialState, action: ShopAction): ShopState => {
  switch (action.type) {
    default:
      return state;
  }
};
