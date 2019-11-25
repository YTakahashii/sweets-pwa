import ActionType from './ActionType';
import { createStandardAction } from 'typesafe-actions';
import { EntityLargeCategory, EntitySmallCategory } from '../../states/Entities';

export const loadLargeCategories = createStandardAction(ActionType.LOAD_LARGE_CATEGORIES)();

export const aggregateSmallCategory = createStandardAction(ActionType.AGGREGATE_SMALL_CATEGORY)<{
  largeCategory: EntityLargeCategory;
  smallCategory: EntitySmallCategory;
}>();
