import { takeEvery, call, put } from 'redux-saga/effects';

import {
  firestore,
  convertSnapshotCollectionToMap,
} from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';
import shopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertSnapshotCollectionToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}
export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
