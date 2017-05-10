/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import AppReducer from './reducers/AppReducer';
// Combine all reducers into one root reducer
export default combineReducers({
	app: AppReducer
});
