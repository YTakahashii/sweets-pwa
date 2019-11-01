import ActionType from './ActionType';
import { createStandardAction } from 'typesafe-actions';
import { EntitySweetsItem, EntitySmallCategory } from '../../states/Entities';

export const loadSmallCategories = createStandardAction(ActionType.LOAD_SMALL_CATEFORIES)();

export const aggregateSweetsBySmallCategory = createStandardAction(ActionType.AGGREGATE_SWEETS_BY_SMALL_CATEGORY)<{
  sweetsItem: EntitySweetsItem;
  smallCategory: EntitySmallCategory;
}>();
