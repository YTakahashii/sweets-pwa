import { SmallCategory } from '../infrastructures/models';

export type LargeCategoryState = {
  aggregatedSmallCategory: AggregatedSmallCategory;
};

export type AggregatedSmallCategory = {
  [id: number]: SmallCategory['id'][];
};
