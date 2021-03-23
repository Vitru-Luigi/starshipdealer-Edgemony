import axios from 'axios';
import {DISCARD_ERROR, FETCH_ALL_STARSHIPS_REQUEST, FETCH_ALL_STARSHIPS_SUCCESS} from './constants';

export const featchAllShips = () => {
	return async (dispatch) => {
		dispatch({type: FETCH_ALL_STARSHIPS_REQUEST});

		try {
			const {data: starships} = await axios.get('http://localhost:5000/starships');
			dispatch({type: FETCH_ALL_STARSHIPS_SUCCESS, payload: starships});
		} catch (e) {
			// console.error(error);
			throw new Error(e);
		}
	};
};

export const discardError = () => ({
	type: DISCARD_ERROR,
});
