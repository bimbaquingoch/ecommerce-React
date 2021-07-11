import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import "../styles/navbar.css";

export const Navbar = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

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
          {/*eslint-disable-next-line jsx-a11y/no-access-key*/}
          <a
            accessKey="w"
            title="(Alt+W)=Ask for Help"
            className="btn btn-success"
            href="https://api.whatsapp.com/send/?phone=593963766640&text=Hola!%20Me%20Interesan%20sus%20productos.&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon />
            <strong className="whats">Ask for Help</strong>
          </a>
        </div>

        <h3>{user ? "Welcome" : ""}</h3>
        <div className="header-navbar__buttons">
          {user ? (
            /*eslint-disable-next-line jsx-a11y/no-access-key*/
            <Link
              exact={{ exact: true }}
              to="/ecommerce-React/login"
              accessKey="s"
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
              title="(Alt+S)=Sign in"
              className="btn btn-secondary"
            >
              <strong>Sign In</strong>
            </Link>
          )}

          {/*eslint-disable-next-line jsx-a11y/no-access-key*/}
          <Link
            className="btn btn-outline"
            accessKey="c"
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
  );
};
