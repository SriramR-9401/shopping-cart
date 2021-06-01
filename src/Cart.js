import React from "react";
import { useSelector } from "react-redux";
import cartremove from "./States/cartremove";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const Cart = () => {
	const dispatch = useDispatch();
	let total,
		sum,
		totalsum = 0,
		content,
		dataum;
	const item = useSelector((state) => state.cart.cartitems);
	const count = useSelector((state) => state.cart.cartcount);
	const functions = (item) => {
		total = parseFloat(item.price);
		sum = total * count[item.id - 1];
		totalsum += sum;
	};

	content = item.map((item, id) => (
		<div className="card cardstyle d-inline-block m-5" key={id}>
			<img src={item.Image} className="card-img-top rounded" alt="..." />
			<div className="card-body">
				<p className="card-text text-wrap">{item.details}</p>
				<button
					className="btn btn-info"
					id="cartitem"
					onClick={() => {
						dispatch(cartremove(item));
					}}
				>
					Remove from cart &nbsp;
					<span className="badge bg-warning">{count[item.id - 1]}</span>&nbsp;
				</button>
				<hr />
				<p>Price: {(functions(item), sum)}</p>
			</div>
		</div>
	));
	if (item.length < 1) {
		content = (
			<div>
				<div className="fs-5 m-5 text-center bg-warning shadow p-3">
					No items in cart. Add items to Cart and Checkout
				</div>
				<Typography align="center">
					<Link to="/products/withimg" style={{ textDecoration: "none" }}>
						<Button
							variant="contained"
							type="button"
							color="secondary"
							className="text-center"
						>
							Shop now
						</Button>
					</Link>
				</Typography>
			</div>
		);
	} else {
		dataum = (
			<div className="text-center m-2">
				<button
					type="button"
					class="btn btn-danger"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal"
				>
					Place Order
				</button>

				<div
					class="modal fade"
					id="exampleModal"
					tabindex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">
									Your Bill...!
								</h5>
								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div class="modal-body">
								<p className="fs-5">Your order has successfully placed.</p>
								<Typography variant="subtitle1">
									Amount to be paid: {totalsum}
								</Typography>
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Done
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<React.Fragment>
			<div className="margin-t">
				<header className="fs-5 p-3 text-center">Total Cost :{totalsum}</header>
				{content}
				{dataum}
			</div>
		</React.Fragment>
	);
};

export default Cart;
