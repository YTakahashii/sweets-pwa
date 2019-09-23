import { put, takeLatest, all } from 'redux-saga/effects';
import { loadSweets } from '../actions/Sweets/ActionCreator';
import { loadShops } from '../actions/Shop/ActionCreator';
import { loadLargeCategories } from '../actions/LargeCategory/ActionCreator';
import { loadSmallCategories } from '../actions/SmallCategory/ActionCreator';
import { REHYDRATE } from 'redux-persist';

function* persistRehydrateSaga() {
  yield put(loadSweets());
  yield put(loadShops());
  yield put(loadLargeCategories());
  yield put(loadSmallCategories());
}

const listener = [takeLatest(REHYDRATE, persistRehydrateSaga)];

export function* rootSaga() {
  yield all(listener);
}
