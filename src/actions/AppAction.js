export const LOAD_DATA_REQUEST = "REQUEST/APP"
export const LOAD_DATA_SUCCESS = "SUCCESS/APP"
export const LOAD_DATA_ERROR = "ERROR/APP"

export const request = () => {
	return {
		type: LOAD_DATA_REQUEST
	}
}

export const recieved = (data) => {
	return {
		type: LOAD_DATA_SUCCESS,
		payload: data 
	}
}

export const error = () => {
	return {
		type: LOAD_DATA_REQUEST
	}
}

