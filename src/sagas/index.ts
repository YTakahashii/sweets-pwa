import { put, takeLatest, all, select } from 'redux-saga/effects';
import { loadSweets } from '../actions/Sweets/ActionCreator';
import { loadShops } from '../actions/Shop/ActionCreator';
import { loadLargeCategories } from '../actions/LargeCategory/ActionCreator';
import { loadSmallCategories } from '../actions/SmallCategory/ActionCreator';
import { REHYDRATE } from 'redux-persist';
import { RootState, AggregatedSweetsBySmallCategory } from '../states';
import { Sweets } from '../models/Sweets';
import { SmallCategory } from '../models/Category';
import { aggregateSweetsBySmallCategory } from '../actions/SmallCategory/ActionCreator';
import ActionType from '../actions/SmallCategory/ActionType';

function* loadAllDataSaga() {
  yield put(loadSweets());
  yield put(loadShops());
  yield put(loadLargeCategories());
  yield put(loadSmallCategories());
  yield put(aggregateSweetsBySmallCategory.request());
}

function* aggregateSweetsBySmallCategorySaga() {
  const sweets: Sweets[] = yield select((state: RootState) => state.sweets.lists);
  const smallCategories: SmallCategory[] = yield select((state: RootState) => state.smallCategory.lists);
  const aggregatedSweets: AggregatedSweetsBySmallCategory = yield smallCategories.reduce<
    AggregatedSweetsBySmallCategory
  >((aggregated, smallCategory) => {
    const aggregatedSweetsIds: number[] = [];
    for (const s of sweets) {
      if (s.small_category_ids.filter(id => id === smallCategory.id).length > 0) {
        aggregatedSweetsIds.push(s.id);
      }
    }
    aggregated[smallCategory.id] = aggregatedSweetsIds;
    return aggregated;
  }, {});
  yield put(aggregateSweetsBySmallCategory.success(aggregatedSweets));
}

const listener = [
  takeLatest(REHYDRATE, loadAllDataSaga),
  takeLatest(ActionType.AGGREGATE_SWEETS_BY_SMALL_CATEGORY_REQUEST, aggregateSweetsBySmallCategorySaga),
];

export function* rootSaga() {
  yield all(listener);
}
