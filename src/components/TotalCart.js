import React from "react";
import accounting from "accounting";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import "../styles/navbar.css";

export const TotalCart = () => {
  const [{ basket }] = useStateValue();
  return (
    <>
      <h2 className="animate__fadeInUp">Total products: {basket?.length}</h2>
      <div className="total-pagar">
        <h2 className="animate__fadeInUp">
          {accounting.formatMoney(getBasketTotal(basket))}
        </h2>
        <button className="btn btn-danger animate__fadeInUp">
          <strong>Pagar</strong>
        </button>
      </div>
    </>
  );
};
