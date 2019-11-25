import { combineReducers } from 'redux';
import { sweetsReducer } from './SweetsItem/reducer';
import { shopReducer } from './Shop/reducer';
import { largeCategoryReducer } from './LargeCategory/reducer';
import { smallCategoryReducer } from './SmallCategory/reducer';
import { entitiesReducer } from './Entities/reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const sweetsPersistConfig = {
  key: 'sweets',
  storage,
  whitelist: ['favorites'],
};

export const rootReducer = combineReducers({
  entities: entitiesReducer,
  sweets: persistReducer(sweetsPersistConfig, sweetsReducer),
  shop: shopReducer,
  largeCategory: largeCategoryReducer,
  smallCategory: smallCategoryReducer,
});
