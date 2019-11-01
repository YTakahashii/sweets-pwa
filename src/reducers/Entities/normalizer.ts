import { normalize, schema } from 'normalizr';
import { SweetsItem, Shop, SmallCategory, LargeCategory } from '../../infrastructures/models';
import { EntitySweetsItem, EntityShop, EntityLargeCategory, EntitySmallCategory } from '../../states/Entities';

const sweetsSchema = new schema.Entity('sweets', undefined, { idAttribute: 'id' });
export const normalizeSweetsItem = (sweetsItems: SweetsItem[]): EntitySweetsItem =>
  normalize<SweetsItem[], { sweets: EntitySweetsItem }>(sweetsItems, [sweetsSchema]).entities.sweets;

const shopSchema = new schema.Entity('shops', undefined, { idAttribute: 'id' });
export const normalizeShops = (shops: Shop[]): EntityShop =>
  normalize<Shop[], { shops: EntityShop }>(shops, [shopSchema]).entities.shops;

const largeCategoriesSchema = new schema.Entity('largeCategories', undefined, { idAttribute: 'id' });
export const normalizeLargeCategories = (largeCategories: LargeCategory[]): EntityLargeCategory =>
  normalize<LargeCategory[], { largeCategories: EntityLargeCategory }>(largeCategories, [largeCategoriesSchema])
    .entities.largeCategories;

const smallCategoriesSchema = new schema.Entity('smallCategories', undefined, { idAttribute: 'id' });
export const normalizeSmallCategories = (smallCategories: SmallCategory[]): EntitySmallCategory =>
  normalize<SmallCategory[], { smallCategories: EntitySmallCategory }>(smallCategories, [smallCategoriesSchema])
    .entities.smallCategories;

console.log(normalizeSweetsItem([{ id: 'id1', name: 'sweets' } as any]));
