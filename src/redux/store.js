import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import { fetchCollectionsStart } from './shop/shop.sagas';
import rootReducer from './root.reducer';

const sagaMiddleware = createSagaMiddleware();

const middelewares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middelewares.push(logger);
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middelewares))
);

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);
// export const storeAndPeristor = { store, persistor };
// export default storeAndPeristor;
