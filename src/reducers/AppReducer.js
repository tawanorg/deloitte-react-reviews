import { 
	LOAD_DATA_REQUEST,
	LOAD_DATA_SUCCESS,
	LOAD_DATA_ERROR } from '../actions/AppAction';

const initialState = {
	isFetching: false,
	data: [],
	error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
		case LOAD_DATA_REQUEST: {
			return Object.assign({}, state, {
				isFetching: true,
			})
		}
		case LOAD_DATA_SUCCESS: {
			return Object.assign({}, state, {
				isFetching: false,
				data: action.payload,
				error: false
			})
		}
		case LOAD_DATA_ERROR: {
			return Object.assign({}, state, {
				isFetching: false,
				error: true
			})
		}
        default:
            return state;
    }
};