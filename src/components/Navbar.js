import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import "../styles/navbar.css";
import { Badge } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

export default function Navbar() {
  // const classes = useStyles();

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
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartRoundedIcon fontSize="large" color="primary" />
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
