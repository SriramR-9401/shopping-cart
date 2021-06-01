const productadd = (data) => {
	return {
		type: "ADDPRODUCT",
		payload: data,
	};
};
export default productadd;
