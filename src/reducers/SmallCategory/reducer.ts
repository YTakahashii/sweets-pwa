import ActionType from '../../actions/SmallCategory/ActionType';
import { SmallCategoryAction } from '../../actions/SmallCategory/Action';
import { SmallCategoryState } from '../../states/SmallCategoryState';
import { aggregateSweetsBySmallCategory } from './AggregateSweetsBySmallCategory';

export const initialState: SmallCategoryState = {
  aggregatedSweetsId: {},
};

export const smallCategoryReducer = (
  state: SmallCategoryState = initialState,
  action: SmallCategoryAction
): SmallCategoryState => {
  switch (action.type) {
    case ActionType.AGGREGATE_SWEETS_BY_SMALL_CATEGORY:
      return {
        ...state,
        aggregatedSweetsId: {
          ...state.aggregatedSweetsId,
          ...aggregateSweetsBySmallCategory(action.payload.sweetsItem, action.payload.smallCategory),
        },
      };
    default:
      return state;
  }
};
