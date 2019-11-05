import { put, takeLatest, all, select } from 'redux-saga/effects';
import {
  normalizeSweetsItem,
  normalizeShop,
  normalizeLargeCategory,
  normalizeSmallCategory,
} from '../actions/Entities/ActionCreator';
import { sweets, shops, largeCategories, smallCategories } from '../infrastructures/models/samples';
import { aggregateSweetsBySmallCategory } from '../actions/SmallCategory/ActionCreator';
import { getSweetsItem, getSmallCategory, getShop } from './selector';
import { aggregateSweetsByShop } from '../actions/Shop/ActionCreator';
import AppActionType from '../actions/App/ActionType';

function* loadAllDataSaga() {
  yield put(normalizeSweetsItem({ sweetsItems: sweets }));
  yield put(normalizeShop({ shops }));
  yield put(normalizeLargeCategory({ largeCategories }));
  yield put(normalizeSmallCategory({ smallCategories }));
  const sweetsItem = yield select(getSweetsItem);
  const smallCategory = yield select(getSmallCategory);
  const shop = yield select(getShop);
  yield put(aggregateSweetsBySmallCategory({ sweetsItem, smallCategory }));
  yield put(aggregateSweetsByShop({ sweetsItem, shop }));
}

const listener = [takeLatest(AppActionType.LOAD_DATA, loadAllDataSaga)];

export function* rootSaga() {
  yield all(listener);
}
