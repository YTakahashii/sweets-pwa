import { EntityLargeCategory, EntitySmallCategory } from '../../states/Entities';
import { AggregatedSmallCategory } from '../../states/LargeCategoryState';
import { SmallCategory } from '../../infrastructures/models';

export const aggregateSmallCategory = (
  largeCategories: EntityLargeCategory,
  smallCategory: EntitySmallCategory
): AggregatedSmallCategory => {
  return Object.values(largeCategories).reduce<AggregatedSmallCategory>((aggregated, largeCategory) => {
    const aggregatedSmallCategoryIds: Array<SmallCategory['id']> = [];
    for (const sc of Object.values(smallCategory)) {
      if (sc.large_category_id === largeCategory.id) {
        aggregatedSmallCategoryIds.push(sc.id);
      }
    }
    aggregated[largeCategory.id] = aggregatedSmallCategoryIds;
    return aggregated;
  }, {});
};
