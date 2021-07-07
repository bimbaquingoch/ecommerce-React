import React from "react";
import ReactDOM from "react-dom";
import Ecommerce from "./EcommerceApp";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <Ecommerce />
  </StateProvider>,
  document.getElementById("root")
);
