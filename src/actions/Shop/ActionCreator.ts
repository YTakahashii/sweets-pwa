import ActionType from './ActionType';
import { createStandardAction } from 'typesafe-actions';
import { EntitySweetsItem, EntityShop } from '../../states/Entities';

export const loadShops = createStandardAction(ActionType.LOAD_SHOPS)();

export const aggregateSweetsByShop = createStandardAction(ActionType.AGGREGATE_SWEETS_BY_SHOP)<{
  sweetsItem: EntitySweetsItem;
  shop: EntityShop;
}>();
