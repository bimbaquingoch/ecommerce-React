import React from "react";
import accounting from "accounting";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Joyride from "react-joyride";
import "../styles/navbar.css";

const state = {
  steps: [
    {
      target: ".delbtn",
      content: "Press Alt+Q to delet items",
    },
  ],
};

export const TotalCart = () => {
  const [{ basket, user }] = useStateValue();
  const { steps } = state;

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
      <h2 className="animate__fadeInUp">
        <Joyride steps={steps} showProgress={true} />
        Total products: {basket?.length}
      </h2>
      <div className="total-pagar">
        <h2 className="animate__fadeInUp">
          {accounting.formatMoney(getBasketTotal(basket))}
        </h2>
        {user ? (
          <Link
            className="btn btn-danger animate__fadeInUp"
            to="/ecommerce-React/paypage"
          >
            <strong>Checkout</strong>
          </Link>
        ) : (
          <Link
            className="btn btn-danger animate__fadeInUp"
            to="/ecommerce-React/login"
            onClick={handleClick}
          >
            <strong>Checkout</strong>
          </Link>
        )}
      </div>
    </>
  );
};
