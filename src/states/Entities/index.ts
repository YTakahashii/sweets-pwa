import { SweetsItem } from '../../infrastructures/models/Sweets';
import { Shop } from '../../infrastructures/models/Shop';
import { LargeCategory, SmallCategory } from '../../infrastructures/models/Category';

export type Entities = {
  sweets: EntitySweetsItem;
  shop: EntityShop;
  largeCategory: EntityLargeCategory;
  smallCategory: EntitySmallCategory;
};

export type EntitySweetsItem = {
  [sweetsId: string]: SweetsItem;
};

export type EntityShop = {
  [shopId: string]: Shop;
};

export type EntityLargeCategory = {
  [largeCategoryId: string]: LargeCategory;
};

export type EntitySmallCategory = {
  [smallCategoryId: string]: SmallCategory;
};
