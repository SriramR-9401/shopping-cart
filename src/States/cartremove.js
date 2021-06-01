const cartremove = (data) => {
	return {
		type: "REMOVE",
		payload: data,
	};
};
export default cartremove;
