import { ActionType } from 'typesafe-actions';
import * as ActionCreators from './ActionCreator';

export type EntitiesAction = ActionType<typeof ActionCreators>;
