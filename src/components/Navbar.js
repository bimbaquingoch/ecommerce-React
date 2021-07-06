import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";

import "../styles/navbar.css";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link exact={{ exact: true }} className="navbar-brand" to="/">
          <Typography variant="h6">Ecommerce</Typography>
        </Link>

        <div className="header-navbar__buttons">
          <Link exact={{ exact: true }} to="/login">
            <button className="btn btn-secondary">
              <strong>Sign in</strong>
            </button>
          </Link>
          <Link exact={{ exact: true }} to="/paycart">
            <button className="btn btn-outline">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartRoundedIcon fontSize="large" color="primary" />
              </Badge>
            </button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
