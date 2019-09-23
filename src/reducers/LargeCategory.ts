import ActionType from '../actions/LargeCategory/ActionType';
import { LargeCategoryAction } from '../actions/LargeCategory/Action';
import { LargeCategoryState } from '../states';
import sample from '../models/samples/LargeCategories';

export const initialState: LargeCategoryState = {
  lists: [],
  edits: {},
};

export const largeCategoryReducer = (
  state: LargeCategoryState = initialState,
  action: LargeCategoryAction
): LargeCategoryState => {
  switch (action.type) {
    case ActionType.LOAD_LARGE_CATEGORIES:
      return {
        ...state,
        lists: sample,
      };
    default:
      return state;
  }
};
