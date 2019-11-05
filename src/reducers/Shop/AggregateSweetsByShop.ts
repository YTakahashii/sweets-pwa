import { EntitySweetsItem, EntityShop } from '../../states/Entities';
import { AggregatedSweetsByShop } from '../../states/ShopState';
import { SweetsItem } from '../../infrastructures/models';

export function aggregateSweetsByShop(shops: EntityShop, sweets: EntitySweetsItem): AggregatedSweetsByShop {
  return Object.values(shops).reduce<AggregatedSweetsByShop>((aggregated, shop) => {
    const aggregatedSweetsIds: Array<SweetsItem['id']> = [];
    for (const sw of Object.values(sweets)) {
      if (sw.shop_id === shop.id) {
        aggregatedSweetsIds.push(sw.id);
      }
    }
    aggregated[shop.id] = aggregatedSweetsIds;
    return aggregated;
  }, {});
}
