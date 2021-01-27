import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root.reducer';

const middelewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middelewares.push(logger);
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middelewares))
);
export const persistor = persistStore(store);
// export const storeAndPeristor = { store, persistor };
// export default storeAndPeristor;
