import { createStandardAction } from 'typesafe-actions';
import ActionType from './ActionType';
import { SweetsItem } from '../../infrastructures/models/Sweets';
import { Shop } from '../../infrastructures/models/Shop';
import { LargeCategory, SmallCategory } from '../../infrastructures/models/Category';

export const normalizeSweetsItem = createStandardAction(ActionType.NORMALIZE_SWEETS_ITEM)<{
  sweetsItems: SweetsItem[];
}>();
export const normalizeShop = createStandardAction(ActionType.NORMALIZE_SHOP)<{ shops: Shop[] }>();
export const normalizeLargeCategory = createStandardAction(ActionType.NORMALIZE_LARGE_CATEGORY)<{
  largeCategories: LargeCategory[];
}>();
export const normalizeSmallCategory = createStandardAction(ActionType.NORMALIZE_SMALL_CATEGORY)<{
  smallCategories: SmallCategory[];
}>();
