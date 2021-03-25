import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT} from './userConstants';

const defaultState = {
	name: '',
	lastname: '',
	email: '',
	isLogged: false,
	error: null,
};

export const userReducers = (state = defaultState, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return {
				...state,
				loading: true,
			};

		case USER_LOGIN_SUCCESS:
			return {
				...state,
				isLogged: true,
				success: true,
				...action.payload,
			};

		case USER_LOGOUT:
			return {
				name: '',
				lastname: '',
				email: '',
				isLogged: false,
			};

		default:
			return state;
	}
};
