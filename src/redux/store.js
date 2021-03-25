import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {starshipReducers} from './starships/starshipReducers';
import {userReducers} from './users/userReducer';

/* Combined Reducers */
const reducer = combineReducers({
	starships: starshipReducers,
	user: userReducers,
});

const defaultStore = {
	user: {
		name: '',
		lastname: '',
		email: '',
		isLogged: false,
	},
	starships: {
		starships: [],
		error: null,
		loading: false,
	},
};

const middleware = [thunk];

const store = createStore(reducer, defaultStore, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
