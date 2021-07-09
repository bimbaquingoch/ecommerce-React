import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { PageCart } from "./components/PageCart";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import SignUp from "./components/RegisterPage";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { FooterComponent } from "./components/Footer";
import { Checkout } from "./components/payForm/Checkout";
// este archivo es la aplicaion entera,
// se exporta y se utiliza solo en el index.js
const Ecommerce = () => {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      }
    });
  }, [dispatch, user]);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/paycart">
            <PageCart />
          </Route>
          <Route path="/paypage">
            <Checkout />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <FooterComponent />
    </>
  );
};

export default Ecommerce;
