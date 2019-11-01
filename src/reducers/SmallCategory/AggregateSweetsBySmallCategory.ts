import { EntitySweetsItem, EntitySmallCategory } from '../../states/Entities';
import { AggregatedSweetsBySmallCategory } from '../../states/SmallCategoryState';

export const aggregateSweetsBySmallCategory = (
  sweetsItem: EntitySweetsItem,
  smallCategory: EntitySmallCategory
): AggregatedSweetsBySmallCategory => {
  const aggregatedSweets = Object.values(smallCategory).reduce<AggregatedSweetsBySmallCategory>(
    (aggregated, smallCategory) => {
      const aggregatedSweetsIds: number[] = [];
      for (const s of Object.values(sweetsItem)) {
        if (s.small_category_ids.filter(id => id === smallCategory.id).length > 0) {
          aggregatedSweetsIds.push(s.id);
        }
      }
      aggregated[smallCategory.id] = aggregatedSweetsIds;
      return aggregated;
    },
    {}
  );
  return aggregatedSweets;
};
