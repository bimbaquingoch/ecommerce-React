import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "../styles/cartvacio.css";

export const CartVacio = () => {
  return (
    <div className="card card-vacio animate__animated animate__fadeInUp">
      <h2 className="card-title card-vacio__header">Empty Cart</h2>
      <img
        className="card-vacio__gif"
        src="https://media.giphy.com/media/m6aIggqT7oB4A/giphy.gif"
        alt="gif cart empty"
      />
      <RouterLink className="button-link" to="/">
        <p className="btn btn-outline-primary card-text card-vacio__parrafo">
          Shop NOW!
        </p>
      </RouterLink>
    </div>
  );
};
