import Canvas from "./canvas";
import Menu from "@material-ui/icons/Menu";
import ToolBar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
	typograph: {
		width: "100%",
	},
});
function App() {
	const item = useSelector((state) => state.cart.cartitems);

	const classes = useStyles();
	return (
		<div>
			<AppBar>
				<ToolBar>
					<IconButton>
						<Menu
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasExample"
							aria-controls="offcanvasExample"
						/>
					</IconButton>

					<Typography varient="h4" align="center" className={classes.typograph}>
						Simple Shopping Cart Demo
					</Typography>

					<div style={{ marginLeft: "auto" }}>
						<Link to="/cart" style={{ color: "#fff" }}>
							<IconButton
								aria-label="show 4 new mails"
								color="inherit"
								className="d-flex float-end"
							>
								<Badge badgeContent={item.length} color="secondary">
									<AddShoppingCartIcon />
								</Badge>
							</IconButton>
						</Link>
					</div>
				</ToolBar>
			</AppBar>

			<Canvas />
		</div>
	);
}

export default App;
