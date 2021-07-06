import React from "react";
import ReactDOM from "react-dom";
import Ecommerce from "./EcommerceApp";
import { ProveedorEstado } from "./ProveedorEstado";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <ProveedorEstado initialState={initialState} reducer={reducer}>
    <Ecommerce />
  </ProveedorEstado>,
  document.getElementById("root")
);
