import ActionType from './ActionType';
import { createStandardAction } from 'typesafe-actions';
import { SweetsItem } from '../../infrastructures/models';

export const loadSweets = createStandardAction(ActionType.LOAD_SWEETS)();
export const registerFavoriteSweets = createStandardAction(ActionType.REGISTER_FAVORITE_SWEETS)<{
  id: SweetsItem['id'];
}>();
export const unregisterFavoriteSweets = createStandardAction(ActionType.UNREGISTER_FAVORITE_SWEETS)<{
  id: SweetsItem['id'];
}>();
