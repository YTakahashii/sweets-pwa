import { createStandardAction } from 'typesafe-actions';
import ActionType from './ActionType';

export const loadData = createStandardAction(ActionType.LOAD_DATA)();
