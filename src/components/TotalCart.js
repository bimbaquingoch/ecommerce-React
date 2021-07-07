import React from "react";
import "../styles/navbar.css";
import accounting from "accounting";

export const TotalCart = () => {
  return (
    <>
      <h2 className="animate__fadeInUp">Total products: 3</h2>
      <div className="total-pagar">
        <h2 className="animate__fadeInUp">{accounting.formatMoney(120)}</h2>
        <button className="btn btn-danger animate__fadeInUp">
          <strong>Pagar</strong>
        </button>
      </div>
    </>
  );
};
