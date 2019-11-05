import { ActionType } from 'typesafe-actions';
import * as ActionCreators from './ActionCreator';

export type AppAction = ActionType<typeof ActionCreators>;
