import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

export type ShopAction = ActionType<typeof ActionCreators>;
