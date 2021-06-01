import React from "react";
import { useDispatch } from "react-redux";
import { useAxios } from "./hooks/fetching";
import Loader from "./loader";
import productadd from "./States/productadd";
import cartadd from "./States/cartadd";
import "./style.css";

const ProductNoImg = () => {
	let content;
	const url = "https://609bf1682b549f00176e4ca4.mockapi.io/products/data";
	const items = useAxios(url);
	const dispatch = useDispatch();
	if (items.loading) {
		content = <Loader />;
	}
	if (items.error) {
		content = (
			<div className="text-center fs-5">
				Something went wrong ....please try again after some moments
				<br />
				Thank you in advance...
			</div>
		);
	}
	if (items.data) {
		dispatch(productadd(items.data));
		content = items.data.map((item, id) => (
			<div className="card cardstyle d-inline-block m-5" key={id}>
				<div className="card-body">
					<p>
						<b>{item.department}</b>
					</p>
					<p className="card-text text-wrap">{item.details}</p>
					<p>Material: {item.material}</p>
					<p>Price: {item.price}</p>
					<button
						className="btn btn-info"
						id="cartitem"
						onClick={() => {
							dispatch(cartadd(item));
						}}
					>
						Add to cart
					</button>
				</div>
			</div>
		));
	}
	return (
		<React.Fragment>
			<div className="margin-t">{content}</div>
		</React.Fragment>
	);
};

export default ProductNoImg;
