/**
 * Main store function
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';

export function configureStore(initialState = {}) {
  // Middleware and store enhancers
  const enhancers = [thunk];

  if (process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering on client and during development.
    const logger = createLogger();
    enhancers.push(logger);
  }

  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...enhancers)));

  return store;
}
