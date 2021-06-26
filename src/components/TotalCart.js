import React from "react";
import { Button, makeStyles } from "@material-ui/core";

export const TotalCart = () => {
  return (
    <>
      <h2>Total productos: 3</h2>
      <h2>$120</h2>
      <Button variant="contained" color="secondary">
        Pagar
      </Button>
    </>
  );
};
