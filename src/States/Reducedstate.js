import Cartstate from "./Cartstate";
import productstate from "./productstate";
import { combineReducers } from "redux";

const Reduced = combineReducers({
	cart: Cartstate,
	product: productstate,
});

export default Reduced;
