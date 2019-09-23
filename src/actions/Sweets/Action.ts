import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

export type SweetsAction = ActionType<typeof ActionCreators>;
