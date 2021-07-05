import React from "react";
// import { Button, makeStyles } from "@material-ui/core";
import "../styles/navbar.css";

export const TotalCart = () => {
  return (
    <>
      <h2>Total products: 3</h2>
      <div className="total-pagar">
        <h2>$120</h2>
        <button className="btn btn-danger">
          <strong>Pagar</strong>
        </button>
      </div>
    </>
  );
};
