import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import ProductImg from "./ProductImg";
import ProductNoImg from "./ProductNoImg";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reduce from "./States/Reducedstate";
const store = createStore(
	Reduce,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<App />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/cart">
						<Cart />
					</Route>
					<Route exact path="/products/withimg">
						<ProductImg />
					</Route>
					<Route exact path="/products/withoutimg">
						<ProductNoImg />
					</Route>
				</Switch>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
