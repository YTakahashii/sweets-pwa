import ActionType from './ActionType';
import { createStandardAction } from 'typesafe-actions';

export const loadSmallCategories = createStandardAction(
  ActionType.LOAD_SMALL_CATEFORIES
)();
