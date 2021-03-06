import * as actions from './actions';

const initialState = {
	products: [],
	currentSelected: new Set(),
	filtered: [],
	cart: [],
	isEmpty: true
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
			
			return {
				...state,
				currentSelected: action.current
			}
		case actions.ADD_TO_CART:
				console.log(action.clicked.id)
				const tmpCart = [...state.cart];

				if(tmpCart.includes(action.clicked)){
					alert("Imate dodadeno takov product!")
				}
				else{
					tmpCart.push(action.clicked);
				}
				var tmpIsEmpty1 = state.isEmpty;
				
				tmpIsEmpty1= false;		 
						
				return {
					...state,
					cart: tmpCart,
					isEmpty: tmpIsEmpty1					
				}

		case actions.REMOVE_FROM_CART:
			const tmpCartRemove = [...state.cart];
			for( var i = 0; i < tmpCartRemove.length; i++){ 
				if ( tmpCartRemove[i].id === action.toRemove) {
					  tmpCartRemove.splice(i, 1); 
						}
					 }
			var tmpIsEmpty = state.isEmpty;
				if(state.cart.length == 1){
					tmpIsEmpty= true;		 
				}			
			return {
			...state,
			cart: tmpCartRemove,
			isEmpty: tmpIsEmpty				
				}
		

		default:
			return state;
	}
	


	
};

export default reducer;
