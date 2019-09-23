import ActionType from '../actions/SmallCategory/ActionType';
import { SmallCategoryAction } from '../actions/SmallCategory/Action';
import { SmallCategoryState } from '../states';
import sample from '../models/samples/SmallCategories';

export const initialState: SmallCategoryState = {
  lists: [],
  edits: {},
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
    default:
      return state;
  }
};
