import {
	FETCH_ALL_STARSHIPS_REQUEST,
	FETCH_ALL_STARSHIPS_SUCCESS,
	FETCH_ALL_STARSHIPS_ERROR,
	ADD_STARSHIP_REQUEST,
	ADD_STARSHIP_SUCCESS,
	ADD_STARSHIP_ERROR,
	DELETE_STARSHIP_REQUEST,
	DELETE_STARSHIP_SUCCESS,
	DELETE_STARSHIP_ERROR,
} from './starshipConstants';

const defaultState = {
	starships: [],
	error: null,
	success: null,
	loading: false,
};

export const starshipListReducer = (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_ALL_STARSHIPS_REQUEST:
			return {
				...state,
				loading: true,
			};

		case FETCH_ALL_STARSHIPS_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				starships: action.payload,
			};

		case FETCH_ALL_STARSHIPS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const starshipAddReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_STARSHIP_REQUEST:
			return {
				...state,
				loading: true,
			};

		case ADD_STARSHIP_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				starships: [...state.starships, action.payload],
			};

		case ADD_STARSHIP_ERROR:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const starshipDeleteReducer = (state = defaultState, action) => {
	switch (action.type) {
		case DELETE_STARSHIP_REQUEST:
			return {
				...state,
				loading: true,
			};

		case DELETE_STARSHIP_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				starships: state.starships.filter((starship) => starship.id !== action.payload),
			};

		case DELETE_STARSHIP_ERROR:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

// case DISCARD_ERROR:
// 	return {
// 		...state,
// 		error: null,
// 	};
