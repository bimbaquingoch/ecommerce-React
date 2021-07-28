import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import Joyride from "react-joyride";
import "../styles/navbar.css";

const state = {
  steps: [
    {
      target: ".navbar-brand",
      content: "Press Alt+A to back to home",
    },
    {
      target: ".signInbtn",
      content: "To Sign In press ALT+S",
    },
    {
      target: ".cartbtn",
      content: "Go to cart press ALT+C",
    },
    {
      target: ".footer",
      content: "Our social media",
    },
  ],
};

export const Navbar = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const { steps } = state;

  const handleOut = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      history.push("/ecommerce-React/");
    }
    swal({
      title: "Sign Out",
      text: "Good bye",
      icon: "success",
      button: "OK",
      timer: "2000",
    });
  };
  return (
    <>
      <Joyride
        steps={steps}
        continuous={true}
        showProgress={true}
        showSkipButton={true}
      />
      <AppBar position="static">
        <Toolbar>
          <div className="eco-whats">
            {/*eslint-disable-next-line jsx-a11y/no-access-key*/}
            <Link
              accessKey="a"
              title="(Alt+A)=HOME"
              exact={{ exact: true }}
              className="navbar-brand"
              to="/ecommerce-React/"
            >
              <Typography variant="h6">Ecommerce</Typography>
            </Link>
          </div>

          <h3>{user ? "Welcome" : ""}</h3>
          <div className="header-navbar__buttons">
            {user ? (
              /*eslint-disable-next-line jsx-a11y/no-access-key*/
              <Link
                exact={{ exact: true }}
                to="/ecommerce-React/login"
                accessKey="s"
                aria-label="Sign Out"
                title="(Alt+S)=Sign Out"
                className="btn btn-secondary"
                onClick={handleOut}
              >
                <strong>Sign Out</strong>
              </Link>
            ) : (
              /*eslint-disable-next-line jsx-a11y/no-access-key*/
              <Link
                exact={{ exact: true }}
                to="/ecommerce-React/login"
                accessKey="s"
                aria-label="Sign in"
                title="(Alt+S)=Sign in"
                className="btn btn-secondary signInbtn"
              >
                <strong>Sign In</strong>
              </Link>
            )}

            {/*eslint-disable-next-line jsx-a11y/no-access-key*/}
            <Link
              className="btn btn-outline cartbtn"
              accessKey="c"
              aria-label="Go to Cart"
              title="(Alt+C)=Go to Cart"
              exact={{ exact: true }}
              to="/ecommerce-React/paycart"
            >
              <Badge badgeContent={basket?.length} color="secondary">
                <ShoppingCartRoundedIcon fontSize="large" color="primary" />
              </Badge>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
