import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";
import { Link } from "react-router-dom";

const Canvas = () => {
	return (
		<React.Fragment>
			<div
				className="offcanvas offcanvas-start mt-5"
				tabIndex="-1"
				id="offcanvasExample"
				aria-labelledby="offcanvasExampleLabel"
			>
				<div className="offcanvas-header mt-2">
					<h5 className="offcanvas-title" id="offcanvasExampleLabel">
						Menu Items
					</h5>
					<button
						type="button"
						className="btn-close text-reset"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div className="offcanvas-body">
					<div className="mb-2">
						<Link to="/" style={{ textDecoration: "none" }}>
							<Button
								startIcon={<HomeIcon />}
								fullWidth={true}
								variant="text"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasExample"
								aria-controls="offcanvasExample"
							>
								Home
							</Button>
						</Link>
					</div>
					<div className="mb-2">
						<Link to="/cart" style={{ textDecoration: "none" }}>
							<Button
								startIcon={<ShoppingCartIcon />}
								fullWidth={true}
								variant="text"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasExample"
								aria-controls="offcanvasExample"
							>
								Cart
							</Button>
						</Link>
					</div>
					<div className="dropdown mt-3">
						<Button
							startIcon={<ArrowDropDownCircleRoundedIcon />}
							className="dropdown-toggle"
							id="dropdownMenuButton"
							data-bs-toggle="dropdown"
							variant="text"
							fullWidth={true}
						>
							Products
						</Button>
						<div
							className="dropdown-menu text-center w-100"
							aria-labelledby="dropdownMenuButton"
						>
							<Link to="/products/withimg" style={{ textDecoration: "none" }}>
								<li
									className="dropdown-item"
									data-bs-toggle="offcanvas"
									href="#offcanvasExample"
									role="button"
									aria-controls="offcanvasExample"
								>
									Details with Image
								</li>
							</Link>
							<Link
								to="/products/withoutimg"
								style={{ textDecoration: "none" }}
							>
								<li
									className="dropdown-item"
									data-bs-toggle="offcanvas"
									href="#offcanvasExample"
									role="button"
									aria-controls="offcanvasExample"
								>
									Details Without Image
								</li>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Canvas;
