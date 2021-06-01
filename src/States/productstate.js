const productstate = (state = [], action) => {
	switch (action.type) {
		case "ADDPRODUCT":
			return action.payload;
		default:
			return [...state];
	}
};
export default productstate;
