import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

import "../styles/navbar.css";

export default function Navbar() {
  const [{ basket }] = useStateValue();
  return (
    <AppBar position="static">
      <Toolbar>
        <Link exact={{ exact: true }} className="navbar-brand" to="/">
          <Typography variant="h6">Ecommerce</Typography>
        </Link>

        <div className="header-navbar__buttons">
          <Link
            className="btn btn-secondary"
            exact={{ exact: true }}
            to="/login"
          >
            <strong>Sign in</strong>
          </Link>
          <Link
            className="btn btn-outline"
            exact={{ exact: true }}
            to="/paycart"
          >
            <Badge badgeContent={basket?.length} color="secondary">
              <ShoppingCartRoundedIcon fontSize="large" color="primary" />
            </Badge>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
