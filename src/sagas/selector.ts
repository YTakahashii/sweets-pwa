import { RootState } from '../states';

export const getSweetsItem = (state: RootState) => state.entities.sweets;
export const getSmallCategory = (state: RootState) => state.entities.smallCategory;
export const getShop = (state: RootState) => state.entities.shop;
