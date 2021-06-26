import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import "../styles/navbar.css";
import { Badge, IconButton } from "@material-ui/core";

export default function Navbar() {
  return (
    <div className="header-navbar">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Ecommerce</Typography>
          <h3>Hello</h3>
          <div className="header-navbar__buttons">
            <Button variant="contained" size="medium">
              <strong>Sign in</strong>
            </Button>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartRoundedIcon fontSize="large" color="primary" />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
