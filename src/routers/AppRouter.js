import { Home } from "../components/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { PageCart } from "../components/PageCart";
import { LoginPage } from "../components/LoginPage";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/login" component={LoginPage} />
        <Route exact={true} path="/paycart" component={PageCart} />
      </Switch>
    </Router>
  );
};
