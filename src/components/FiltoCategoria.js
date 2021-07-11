import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/btnFiltros.css";

export const FiltroCategoria = ({ setFiltro }) => {
  const [inputValue, setInputValue] = useState([""]);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    setFiltro([inputValue]);
  };

  const jewelery = "jewelery";
  const electronics = "electronics";
  const men = "men's clothing";
  const women = "women's clothing";

  return (
    <form className="btns-filtro" onSubmit={handleSubmit}>
      <button
        className="btn btn-primary btn-lg animate__fadeInUp"
        onClick={handleInputChange}
        type="submit"
        id="jewelery"
        value={jewelery}
        name="jewelery"
      >
        Jewelery
      </button>

      <button
        className="btn btn-primary btn-lg animate__fadeInUp"
        onClick={handleInputChange}
        type="submit"
        id="electronics"
        value={electronics}
        name="electronics"
      >
        Electronics
      </button>

      <button
        className="btn btn-primary btn-lg animate__fadeInUp"
        onClick={handleInputChange}
        type="submit"
        id="menClotes"
        value={men}
        name="menClothes"
      >
        Men's
      </button>

      <button
        className="btn btn-primary btn-lg animate__fadeInUp"
        onClick={handleInputChange}
        type="submit"
        id="womenClotes"
        value={women}
        name="womenClothes"
      >
        Women's
      </button>
    </form>
  );
};

FiltroCategoria.propTypes = { setFiltro: PropTypes.func.isRequired };
