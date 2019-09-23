import ActionType from './ActionType';
import { createStandardAction } from 'typesafe-actions';

export const loadShops = createStandardAction(ActionType.LOAD_SHOPS)();
