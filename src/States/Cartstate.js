let array = new Array(10);
const initialstate = {
	cartitems: [],
	cartcount: array,
};
const Cartstate = (state = initialstate, action) => {
	switch (action.type) {
		case "ADD": {
			let data, items;
			items = state.cartitems.some((o) => o.id === action.payload.id);
			if (!items) {
				data = [...state.cartitems, action.payload];
			} else {
				data = [...state.cartitems];
			}
			if (state.cartcount[action.payload.id - 1] > 0) {
				state.cartcount[action.payload.id - 1] += 1;
			} else {
				state.cartcount[action.payload.id - 1] = 1;
			}
			return { cartitems: data, cartcount: array };
		}
		case "REMOVE": {
			let items;
			if (state.cartcount[action.payload.id - 1] > 1) {
				state.cartcount[action.payload.id - 1] -= 1;
				items = state.cartitems;
			} else {
				state.cartcount[action.payload.id - 1] = 0;
				items = state.cartitems.filter((item) => item !== action.payload);
			}
			return { cartitems: items, cartcount: [...state.cartcount] };
		}
		default: {
			return {
				cartitems: state.cartitems,
				cartcount: array,
			};
		}
	}
};

export default Cartstate;
