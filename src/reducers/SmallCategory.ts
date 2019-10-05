import ActionType from '../actions/SmallCategory/ActionType';
import { SmallCategoryAction } from '../actions/SmallCategory/Action';
import { SmallCategoryState } from '../states';
import sample from '../models/samples/SmallCategories';

export const initialState: SmallCategoryState = {
  lists: [],
  edits: {
    aggregatedSweetsBySmCategory: {},
  },
};

export const smallCategoryReducer = (
  state: SmallCategoryState = initialState,
  action: SmallCategoryAction
): SmallCategoryState => {
  switch (action.type) {
    case ActionType.LOAD_SMALL_CATEFORIES:
      return {
        ...state,
        lists: sample,
      };
    case ActionType.AGGREGATE_SWEETS_BY_SMALL_CATEGORY_SUCCESS:
      return {
        ...state,
        edits: {
          ...state.edits,
          aggregatedSweetsBySmCategory: action.payload,
        },
      };
    default:
      return state;
  }
};
