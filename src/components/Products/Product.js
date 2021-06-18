import React, { useState } from "react";
import PropTypes from "prop-types";

const Product = ({ setProducts }) => {
  // declaramos el estado de los productos
  const [inputValue, setInputValue] = useState("");
  // funcion para capturar el valor del input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  // funcion para enviar los datos del form
  const handleSubmit = (e) => {
    // evita que la pagina se recargue
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      setProducts([inputValue]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>{inputValue}</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

Product.propTypes = { setProducts: PropTypes.func.isRequired };

export default Product;
