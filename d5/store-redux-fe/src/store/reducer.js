import { INCREMENT, ADD, DECREMENT, SUB } from "./actions";

const initialState = {
	products: []
};

const reducer = (state = initialState, action) => {

	// switch (action.type) {
	// 	case INCREMENT:
	// 		return {
	// 			...state,
	// 			counter: state.counter + 1
	// 		}
	// 	case ADD:
	// 		return {
	// 			...state,
	// 			counter: state.counter + action.value
	// 		}
	// 	case DECREMENT:
	// 		return {
	// 			...state,
	// 			counter: state.counter - 1
	// 		}
	// 	case SUB:
	// 		return {
	// 			...state,
	// 			counter: state.counter - action.payload
	// 		}
	// 	default:
	// 		return state;
	// }

	// if (action.type === 'INCREMENT') {
	// 	// const newTmp = {...state};
	// 	// newTmp.counter = state.counter + 1;
	// 	// return newTmp;
	// 	return {
	// 		...state,
	// 		counter: state.counter + 1
	// 	}
	// }
	if (action.type === 'INITIAL_STATE') {
		return {
			...state,
			products: action.products
		}
	}

	 return state;
};

export default reducer;
