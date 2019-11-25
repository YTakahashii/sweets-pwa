// import ActionType from '../actions/LargeCategory/ActionType';
import { LargeCategoryAction } from '../../actions/LargeCategory/Action';
import { LargeCategoryState } from '../../states/LargeCategoryState';
import ActionType from '../../actions/LargeCategory/ActionType';
import { aggregateSmallCategory } from './AggregateSmallCategory';

export const initialState: LargeCategoryState = {
  aggregatedSmallCategory: {},
};

export const largeCategoryReducer = (
  state: LargeCategoryState = initialState,
  action: LargeCategoryAction
): LargeCategoryState => {
  switch (action.type) {
    case ActionType.AGGREGATE_SMALL_CATEGORY:
      return {
        ...state,
        aggregatedSmallCategory: {
          ...state.aggregatedSmallCategory,
          ...aggregateSmallCategory(action.payload.largeCategory, action.payload.smallCategory),
        },
      };
    default:
      return state;
  }
};
