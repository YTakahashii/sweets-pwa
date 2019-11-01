import { put, takeLatest, all, select } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';

import {
  normalizeSweetsItem,
  normalizeShop,
  normalizeLargeCategory,
  normalizeSmallCategory,
} from '../actions/Entities/ActionCreator';
import { sweets, shops, largeCategories, smallCategories } from '../infrastructures/models/samples';
import { aggregateSweetsBySmallCategory } from '../actions/SmallCategory/ActionCreator';
import { getSweetsItem, getSmallCategory } from './selector';

function* loadAllDataSaga() {
  yield put(normalizeSweetsItem({ sweetsItems: sweets }));
  yield put(normalizeShop({ shops }));
  yield put(normalizeLargeCategory({ largeCategories }));
  yield put(normalizeSmallCategory({ smallCategories }));
  const sweetsItem = yield select(getSweetsItem);
  const smallCategory = yield select(getSmallCategory);
  yield put(aggregateSweetsBySmallCategory({ sweetsItem, smallCategory }));
}

const listener = [takeLatest(REHYDRATE, loadAllDataSaga)];

export function* rootSaga() {
  yield all(listener);
}
