import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

export type SmallCategoryAction = ActionType<typeof ActionCreators>;
