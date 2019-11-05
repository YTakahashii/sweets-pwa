import { SweetsItem } from '../infrastructures/models';

export type ShopState = {
  aggregatedSweetsByShop: AggregatedSweetsByShop;
};

export type AggregatedSweetsByShop = {
  [id: number]: SweetsItem['id'][];
};
