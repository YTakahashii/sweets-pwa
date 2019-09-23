import { combineReducers } from 'redux';
import { sweetsReducer } from './Sweets';
import { shopReducer } from './Shop';
import { largeCategoryReducer } from './LargeCategory';
import { smallCategoryReducer } from './SmallCategory';

export const rootReducer = combineReducers({
  sweets: sweetsReducer,
  shop: shopReducer,
  largeCategory: largeCategoryReducer,
  smallCategory: smallCategoryReducer,
});
