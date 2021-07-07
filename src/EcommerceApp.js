import React from "react";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import { PageCart } from "./components/PageCart";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";

// este archivo es la aplicaion entera,
// se exporta y se utiliza solo en el index.js
const Ecommerce = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/paycart">
            <PageCart />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Ecommerce;
