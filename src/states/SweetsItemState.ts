import { SweetsItem } from '../infrastructures/models';

export type SweetsItemState = {
  favorites: Array<SweetsItem['id']>;
};
