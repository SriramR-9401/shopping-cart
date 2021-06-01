import React from "react";
import { useAxios } from "./hooks/fetching";
import productadd from "./States/productadd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Loader from "./loader";
import "./style.css";
import cartadd from "./States/cartadd";

const ProductImg = () => {
	const dispatch = useDispatch();
	let content;
	const update = useSelector((state) => state.product);
	const url = "https://609bf1682b549f00176e4ca4.mockapi.io/products/data";
	const items = useAxios(url);
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
		content = update.map((item, id) => (
			<div className="card cardstyle d-inline-block m-5" key={id}>
				<img src={item.Image} className="card-img-top rounded" alt="..." />
				<div className="card-body">
					<p className="card-text text-wrap">
						Name:{item.name}
						<br />
						Department:{item.department}
						<br />
						Price:{item.price}
					</p>
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

export default ProductImg;
