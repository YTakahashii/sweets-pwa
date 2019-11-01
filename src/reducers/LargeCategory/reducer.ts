// import ActionType from '../actions/LargeCategory/ActionType';
import { LargeCategoryAction } from '../../actions/LargeCategory/Action';
import { LargeCategoryState } from '../../states/LargeCategoryState';

export const initialState: LargeCategoryState = {};

export const largeCategoryReducer = (
  state: LargeCategoryState = initialState,
  action: LargeCategoryAction
): LargeCategoryState => {
  switch (action.type) {
    default:
      return state;
  }
};
