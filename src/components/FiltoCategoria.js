import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/btnFiltros.css";

export const FiltroCategoria = ({ setFiltro }) => {
  const [inputValue, setInputValue] = useState([""]);

  const handleInputChange = (evento) => {
    setInputValue(evento.target.value);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    setFiltro([inputValue]);
  };

  return (
    <form className="btns-filtro" onSubmit={handleSubmit}>
      <input
        onClick={handleInputChange}
        type="submit"
        id="jewelery"
        value="jewelery"
        name="jewelery"
      />

      <input
        onClick={handleInputChange}
        type="submit"
        id="electronics"
        value="electronics"
        name="electronics"
      />

      <input
        onClick={handleInputChange}
        type="submit"
        id="menClotes"
        value="Men's"
        name="menClothes"
      />
      <input
        onClick={handleInputChange}
        type="submit"
        id="menClotes"
        value="Women's"
        name="womenClothes"
      />
    </form>
  );
};

FiltroCategoria.propTypes = { setFiltro: PropTypes.func.isRequired };
