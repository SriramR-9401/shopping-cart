import React from "react";
import photo1 from "./media/glass.jpg";
import photo2 from "./media/head.jpg";
import photo3 from "./media/watch.jpg";
const Home = () => {
	return (
		<React.Fragment>
			<div className="margin-t extra-m">
				<div className="m-5 p-3 shadow">
					<center>
						<h3 className="p-3">WELCOME ... !</h3>
					</center>
					<div className="d-flex justify-content-center">
						<div className="alert alert-info w-75 text-center" role="alert">
							A simple info alert—check it out!&nbsp;&nbsp;
							<button
								className="btn btn-primary"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseExample"
								aria-expanded="false"
								aria-controls="collapseExample"
							>
								Show
							</button>
						</div>
					</div>

					<div className="collapse" id="collapseExample">
						<div className="card card-body fs-5 bg-light text-center">
							80% Offer for first time buyers. Check out your cart and get the
							chance to get lifetime prime membership for this shopping site.
						</div>
					</div>
					<div className="d-flex justify-content-center flex-wrap">
						<img
							src={photo1}
							className="img-thumbnail d-inline-block m-3"
							alt="Glass"
						/>
						<img
							src={photo2}
							className="img-thumbnail d-inline-block m-3"
							alt="Head Set"
						/>
						<img
							src={photo3}
							className="img-thumbnail d-inline-block m-3"
							alt="watch"
						/>
					</div>
					<footer className="text-center mt-5">
						&copy;Copy Rights 2021 reserved.
					</footer>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Home;
