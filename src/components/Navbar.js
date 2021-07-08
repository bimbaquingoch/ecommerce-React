import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import "../styles/navbar.css";

export default function Navbar() {
  const [{ basket }] = useStateValue();
  return (
    <AppBar position="static">
      <Toolbar>
        {/*eslint-disable-next-line jsx-a11y/no-access-key*/}
        <Link
          accessKey="a"
          title="Alt+A=> HOME"
          exact={{ exact: true }}
          className="navbar-brand"
          to="/"
        >
          <Typography variant="h6">Ecommerce</Typography>
        </Link>
        <a
          className="btn btn-success"
          href="https://api.whatsapp.com/send/?phone=593963766640&text=Hola!%20Quiero%20contratar%20sus%20servicios.&app_absent=0"
        >
          <WhatsAppIcon />
        </a>

        <div className="header-navbar__buttons">
          <Link
            className="btn btn-secondary"
            exact={{ exact: true }}
            to="/login"
          >
            <strong>Sign in</strong>
          </Link>
          {/*eslint-disable-next-line jsx-a11y/no-access-key*/}
          <Link
            className="btn btn-outline"
            accessKey="c"
            title="Alt+C=> Go to Cart"
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
