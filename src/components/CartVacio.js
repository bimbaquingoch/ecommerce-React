import React from "react";
import "../styles/cartvacio.css";

export const CartVacio = () => {
  return (
    <div className="card card-vacio animate__animated animate__fadeInUp">
      <h2 className="card-title card-vacio__header">Cart Empty</h2>
      <img
        className="card-vacio__gif"
        src="https://media.giphy.com/media/m6aIggqT7oB4A/giphy.gif"
        alt="gif cart empty"
      />
      <p className="card-text card-vacio__parrafo">Go back!</p>
    </div>
  );
};
