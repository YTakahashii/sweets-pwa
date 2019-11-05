import ActionType from '../../actions/Shop/ActionType';
import { ShopAction } from '../../actions/Shop/Action';
import { ShopState } from '../../states/ShopState';
import { aggregateSweetsByShop } from './AggregateSweetsByShop';

export const initialState: ShopState = {
  aggregatedSweetsByShop: {},
};

export const shopReducer = (state: ShopState = initialState, action: ShopAction): ShopState => {
  switch (action.type) {
    case ActionType.AGGREGATE_SWEETS_BY_SHOP:
      return {
        ...state,
        aggregatedSweetsByShop: {
          ...state.aggregatedSweetsByShop,
          ...aggregateSweetsByShop(action.payload.shop, action.payload.sweetsItem),
        },
      };
    default:
      return state;
  }
};
