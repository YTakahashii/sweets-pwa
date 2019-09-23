import ActionType from './ActionType';
import { createStandardAction } from 'typesafe-actions';

export const loadSweets = createStandardAction(ActionType.LOAD_SWEETS)();
