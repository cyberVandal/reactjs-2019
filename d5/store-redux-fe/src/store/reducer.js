import * as actions from './actions';

const initialState = {
	products: [],
	currentSelected: new Set(),
	filtered: []
};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case actions.INITIAL_STATE:
			return {
				...state,
				products: action.products
			}
		case actions.SET_FILTER:
			console.log(action.filtered);
			return {
				...state,
				filtered: action.filtered
			}

		case actions.SET_CURRENT:
			console.log(action.current);
			return {
				...state,
				currentSelected: action.current
			}


		default:
			return state;
	}
	


	
};

export default reducer;
