import { combineReducers } from 'redux';
import { sweetsReducer } from './SweetsItem/reducer';
import { shopReducer } from './Shop/reducer';
import { largeCategoryReducer } from './LargeCategory/reducer';
import { smallCategoryReducer } from './SmallCategory/reducer';
import { entitiesReducer } from './Entities/reducer';

export const rootReducer = combineReducers({
  entities: entitiesReducer,
  sweets: sweetsReducer,
  shop: shopReducer,
  largeCategory: largeCategoryReducer,
  smallCategory: smallCategoryReducer,
});
