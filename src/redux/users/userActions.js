import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT} from './userConstants';

export const login = (name, lastname, email) => (dispatch) => {
	dispatch({type: USER_LOGIN_REQUEST});
	// const {user} = {name, lastname, email};
	dispatch({type: USER_LOGIN_SUCCESS, payload: {name, lastname, email}});
};

export const logout = () => (dispatch) => {
	dispatch({type: USER_LOGOUT});
};
