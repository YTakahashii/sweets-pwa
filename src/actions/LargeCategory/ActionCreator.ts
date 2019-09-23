import ActionType from './ActionType';
import { createStandardAction } from 'typesafe-actions';

export const loadLargeCategories = createStandardAction(
  ActionType.LOAD_LARGE_CATEGORIES
)();
