export type SmallCategoryState = {
  aggregatedSweetsId: AggregatedSweetsBySmallCategory;
};

export type AggregatedSweetsBySmallCategory = {
  [smallCategoryId: number]: number[];
};
