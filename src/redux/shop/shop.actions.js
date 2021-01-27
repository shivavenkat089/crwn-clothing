import shopActionTypes from './shop.types';

import {
  firestore,
  convertSnapshotCollectionToMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionsState = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsState());
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertSnapshotCollectionToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => {
        dispatch(fetchCollectionsFailure(error.message));
      });
  };
};
