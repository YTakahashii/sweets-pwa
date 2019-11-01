import { EntitiesAction } from '../../actions/Entities/Action';
import { Entities } from '../../states/Entities';
import ActionType from '../../actions/Entities/ActionType';
import { normalizeSweetsItem, normalizeShops, normalizeLargeCategories, normalizeSmallCategories } from './normalizer';

const initialState: Entities = {
  sweets: {},
  shop: {},
  largeCategory: {},
  smallCategory: {},
};

export const entitiesReducer = (state: Entities = initialState, action: EntitiesAction): Entities => {
  switch (action.type) {
    case ActionType.NORMALIZE_SWEETS_ITEM:
      return {
        ...state,
        sweets: {
          ...state.sweets,
          ...normalizeSweetsItem(action.payload.sweetsItems),
        },
      };
    case ActionType.NORMALIZE_SHOP:
      return {
        ...state,
        shop: {
          ...state.shop,
          ...normalizeShops(action.payload.shops),
        },
      };
    case ActionType.NORMALIZE_LARGE_CATEGORY:
      return {
        ...state,
        largeCategory: {
          ...state.largeCategory,
          ...normalizeLargeCategories(action.payload.largeCategories),
        },
      };
    case ActionType.NORMALIZE_SMALL_CATEGORY:
      return {
        ...state,
        smallCategory: {
          ...state.smallCategory,
          ...normalizeSmallCategories(action.payload.smallCategories),
        },
      };
    default:
      return state;
  }
};
