import {ADD_STARSHIP_ERROR, ADD_STARSHIP_REQUEST, ADD_STARSHIP_SUCCESS, DELETE_STARSHIP_REQUEST, DELETE_STARSHIP_SUCCESS, DISCARD_ERROR, FETCH_ALL_STARSHIPS_ERROR, FETCH_ALL_STARSHIPS_REQUEST, FETCH_ALL_STARSHIPS_SUCCESS} from './starshipConstants';

// const {} = {
// 	starships: [],
// 	error: null,
// 	loading: false,
// };

export const starshipReducers = (state = {}, action) => {
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
		case DISCARD_ERROR:
			return {
				...state,
				error: null,
			};

		default:
			return state;
	}
};
