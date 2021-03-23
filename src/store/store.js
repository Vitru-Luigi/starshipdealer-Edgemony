import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {starshipReducer} from './starshipReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const defaultStore = {
	starShips: [],
	error: undefined,
	loading: false,
};

const middleware = [thunk];

const store = createStore(starshipReducer, defaultStore, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
