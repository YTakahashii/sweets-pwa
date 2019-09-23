import { StateType } from 'typesafe-actions';
import { rootReducer } from '../reducers';
import { Sweets } from '../models/Sweets';
import { Shop } from '../models/Shop';
import { LargeCategory, SmallCategory } from '../models/Category';

export type RootState = StateType<typeof rootReducer>;

export type SweetsState = {
  lists: Sweets[];
  edits: {};
};

export type ShopState = {
  lists: Shop[];
  edits: {};
};

export type LargeCategoryState = {
  lists: LargeCategory[];
  edits: {};
};

export type SmallCategoryState = {
  lists: SmallCategory[];
  edits: {};
};
