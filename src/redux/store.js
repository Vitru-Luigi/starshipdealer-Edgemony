import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {starshipListReducer, starshipAddReducer, starshipDeleteReducer} from './starships/starshipReducers';

/* Combined Reducers */
const reducer = combineReducers({
	starshipList: starshipListReducer,
	starshipAdd: starshipAddReducer,
	starshipDelete: starshipDeleteReducer,
});

const defaultStore = {
	starShips: [],
	error: undefined,
	loading: false,
};

const middleware = [thunk];

const store = createStore(reducer, defaultStore, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
