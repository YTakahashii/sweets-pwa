import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

export type LargeCategoryAction = ActionType<typeof ActionCreators>;
