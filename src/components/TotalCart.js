import React from "react";
import accounting from "accounting";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "../styles/navbar.css";

export const TotalCart = () => {
  const [{ basket, user }] = useStateValue();

  const handleClick = () => {
    swal({
      title: "Sign In",
      text: "Plese Sign In to pay",
      icon: "warning",
      button: "OK",
      timer: "3000",
    });
  };

  return (
    <>
      <h2 className="animate__fadeInUp">Total products: {basket?.length}</h2>
      <div className="total-pagar">
        <h2 className="animate__fadeInUp">
          {accounting.formatMoney(getBasketTotal(basket))}
        </h2>
        {user ? (
          <Link className="btn btn-danger animate__fadeInUp" to="/paypage">
            <strong>Pagar</strong>
          </Link>
        ) : (
          <Link
            className="btn btn-danger animate__fadeInUp"
            to="/login"
            onClick={handleClick}
          >
            <strong>Pagar</strong>
          </Link>
        )}
      </div>
    </>
  );
};
